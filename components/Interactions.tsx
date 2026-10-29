"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Small site-wide touches: a ripple where you tap a button, and sections / product cards that rise into view as you scroll.
 *  Everything is switched off for people who prefer reduced motion, and the page works without it. */
export default function Interactions() {
  const path = usePathname();

  // ripple on buttons and button-like links
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onDown = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(".btn, [data-ripple]");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2;
      const dot = document.createElement("span");
      dot.className = "ripple";
      dot.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
      if (getComputedStyle(el).position === "static") el.style.position = "relative";
      el.appendChild(dot);
      setTimeout(() => dot.remove(), 650);
    };
    document.addEventListener("pointerdown", onDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  // reveal on scroll (re-run on every page change)
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("main section:not(:first-child), main article"));
    const vh = window.innerHeight;
    const below: HTMLElement[] = [];
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) return; // already on screen: leave alone, no flash
      el.setAttribute("data-reveal", "");
      below.push(el);
    });
    root.classList.add("reveal-on");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.hasAttribute("data-reveal") && !c.classList.contains("in")) : [];
        el.style.setProperty("--reveal-delay", `${Math.min(sibs.indexOf(el), 4) * 0.08}s`);
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    below.forEach((el) => io.observe(el));
    return () => { io.disconnect(); below.forEach((el) => { el.removeAttribute("data-reveal"); el.classList.remove("in"); el.style.removeProperty("--reveal-delay"); }); };
  }, [path]);

  return null;
}
