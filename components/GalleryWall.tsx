"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { shots } from "@/lib/gallery";
import { PrintBody, Tape, tiltFor } from "./Print";

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
      <ul className="columns-2 lg:columns-3 gap-5 sm:gap-8 [&>li]:mb-6 sm:[&>li]:mb-10 [&>li]:break-inside-avoid">
        {shots.map((s, i) => (
          <li key={s.id} className={`${tiltFor(i)} hover:rotate-0 transition-transform duration-300`}>
            <button type="button" onClick={(e) => { opener.current = e.currentTarget; setOpen(i); }}
              className="relative block w-full text-left bg-white p-2.5 pb-3 sm:p-3.5 rounded-sm shadow-[0_14px_26px_-12px_rgba(96,49,43,.5)] border border-brown/10"
              aria-label={`Open photo: ${s.caption}`}>
              <Tape c={s.tape} i={i} />
              <figure><PrintBody s={s} sizes="(max-width: 1024px) 46vw, 380px" /></figure>
            </button>
          </li>
        ))}
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
