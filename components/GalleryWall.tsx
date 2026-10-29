"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { shots } from "@/lib/gallery";

/* Every photo is cut into its own shape, with a colour block peeking out behind it. The shapes and colours repeat in a loop. */
const frames = [
  { shape: "rounded-t-[999px] rounded-b-[1.5rem]", aspect: "aspect-[4/5]", back: "bg-blush" },
  { shape: "rounded-full", aspect: "aspect-square", back: "bg-sun/80" },
  { shape: "rounded-[2.5rem_6rem_2.5rem_6rem]", aspect: "aspect-[4/5]", back: "bg-olive/50" },
  { shape: "rounded-[999px]", aspect: "aspect-[3/4]", back: "bg-coral/60" },
  { shape: "rounded-[2rem]", aspect: "aspect-[5/4]", back: "bg-terra/50" },
  { shape: "rounded-b-[999px] rounded-t-[1.5rem]", aspect: "aspect-[4/5]", back: "bg-leaf/40" },
] as const;

export default function GalleryWall() {
  const [open, setOpen] = useState<number | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const d = dlg.current; if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "ArrowRight") setOpen((o) => (o! + 1) % shots.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o! - 1 + shots.length) % shots.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => { setOpen(null); opener.current?.focus(); };
  const cur = open !== null ? shots[open] : null;

  return (
    <>
      <ul className="columns-2 lg:columns-3 gap-x-7 sm:gap-x-12 [&>li]:mb-12 sm:[&>li]:mb-16 [&>li]:break-inside-avoid">
        {shots.map((sh, i) => {
          const f = frames[i % frames.length];
          return (
            <li key={sh.id} className={i % 2 ? "sm:pt-6" : ""}>
              <button type="button" onClick={(e) => { opener.current = e.currentTarget; setOpen(i); }} aria-label={`Open ${sh.video ? "video" : "photo"}: ${sh.caption}`}
                className="group relative block w-full text-left">
                <span aria-hidden className={`absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 ${f.shape} ${f.back}`} />
                <span className={`relative block overflow-hidden border-[3px] border-cream shadow-[0_16px_24px_-14px_rgba(96,49,43,.6)] transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 ${f.aspect} ${f.shape}`}>
                  <Image src={sh.src} alt={sh.alt} fill sizes="(max-width: 1024px) 46vw, 340px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  {sh.video && (
                    <span aria-hidden className="absolute inset-0 grid place-items-center bg-ink/10">
                      <span className="grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-full bg-cream/95 text-brown shadow-lg transition-transform duration-300 group-hover:scale-110"><Play className="ml-1" size={26} fill="currentColor" /></span>
                    </span>
                  )}
                  <span aria-hidden className="absolute inset-x-3 bottom-4 hidden rounded-full bg-cream/95 px-3 py-1.5 text-center font-display text-[.9rem] italic leading-tight text-brown opacity-0 shadow translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">{sh.caption}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog ref={dlg} onClose={() => setOpen(null)} onClick={(e) => { if (e.target === dlg.current) close(); }}
        className="m-auto max-w-[min(94vw,980px)] max-h-[94vh] w-full bg-transparent p-0 backdrop:bg-ink/80 overflow-visible" aria-label="Photo viewer">
        {cur && (
          <div className="relative bg-white p-3 pb-4 rounded-sm shadow-2xl mx-auto w-fit max-w-full">
            <button onClick={close} aria-label="Close" className="absolute -top-4 -right-3 z-20 grid place-items-center w-11 h-11 rounded-full bg-cream text-brown shadow-lg"><X size={22} /></button>
            <figure>
              {cur.video ? (
                <video key={cur.id} src={cur.video} poster={cur.src} controls autoPlay muted playsInline loop className="block max-h-[76vh] w-auto max-w-full mx-auto" />
              ) : (
                <Image key={cur.id} src={cur.src} alt={cur.alt} width={cur.w} height={cur.h} sizes="94vw" className="block max-h-[76vh] w-auto max-w-full h-auto mx-auto object-contain" />
              )}
              <figcaption className="pt-3 text-center font-display italic text-brown text-lg">{cur.caption}</figcaption>
            </figure>
            <div className="mt-2 flex items-center justify-between">
              <button onClick={() => setOpen((open! - 1 + shots.length) % shots.length)} className="inline-flex items-center gap-1 p-2 font-semibold text-leaf"><ChevronLeft size={20} aria-hidden />Previous</button>
              <span className="text-sm text-ink/60">{open! + 1} of {shots.length}</span>
              <button onClick={() => setOpen((open! + 1) % shots.length)} className="inline-flex items-center gap-1 p-2 font-semibold text-leaf">Next<ChevronRight size={20} aria-hidden /></button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
