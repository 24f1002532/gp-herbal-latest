"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/config";
import { publishedCategories } from "@/lib/data";
import { generalLink } from "@/lib/whatsapp";
import WhatsAppButton from "./WhatsAppButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-story/", label: "Our Story" },
  { href: "/products/", label: "Products" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/ingredients-and-care/", label: "Ingredients & Care" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="sticky top-0 z-40 bg-blush scallop-bottom">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-olive focus:text-white">Skip to content</a>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 h-20 md:h-24">
        <Link href="/" aria-label={`${BRAND.name}, home`} className="block shrink-0" onClick={() => setOpen(false)}>
          <Image src="/images/logo.webp" alt={BRAND.name} width={900} height={570} priority className="h-[4.25rem] w-auto md:h-20" />
        </Link>
        <nav aria-label="Main" className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => l.label === "Products" ? (
            <div key={l.href} className="relative group">
              <Link href={l.href} className="py-5 inline-block hover:underline underline-offset-4">Products</Link>
              <ul className="absolute left-0 top-full hidden group-hover:block group-focus-within:block bg-cream border border-beige rounded-2xl p-2 min-w-48 shadow-lg">
                {publishedCategories().map((c) => (
                  <li key={c.slug}><Link className="block px-3 py-2 rounded-lg hover:bg-blush/40" href={`/products/${c.slug}/`}>{c.name}</Link></li>
                ))}
              </ul>
            </div>
          ) : <Link key={l.href} href={l.href} className="hover:underline underline-offset-4">{l.label}</Link>)}
          <WhatsAppButton href={generalLink()} label="WhatsApp us" className="!min-h-10 !py-2" />
        </nav>
        <button ref={btn} className="lg:hidden p-3 -mr-3" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="lg:hidden bg-cream border-t border-beige px-4 pb-6 max-h-[80vh] overflow-auto">
          <ul className="text-lg font-display">
            {links.map((l) => (
              <li key={l.href} className="border-b border-beige/60">
                <Link href={l.href} className="block py-3" onClick={() => setOpen(false)}>{l.label}</Link>
                {l.label === "Products" && (
                  <ul className="pb-2 pl-4 font-sans text-base">
                    {publishedCategories().map((c) => (
                      <li key={c.slug}><Link className="block py-2 text-brown" href={`/products/${c.slug}/`} onClick={() => setOpen(false)}>{c.name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <WhatsAppButton href={generalLink()} label="Chat on WhatsApp" className="mt-5 w-full justify-center" />
        </nav>
      )}
    </header>
  );
}
