"use client";
import { useRef } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";

/** A taped-on snippet of the real WhatsApp message. Tap it to read the whole thing in a pop-up. Never cropped or stretched. */
export default function ShotViewer({ shot, who, light }: { shot: { src: string; w: number; h: number }; who: string; light?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  const alt = `Screenshot of a real WhatsApp message from a customer about ${who}`;
  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()} aria-label={`Read the full WhatsApp message about ${who}`}
        className="group relative mt-5 block w-full text-left -rotate-1 transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]">
        <span aria-hidden className="absolute -top-2.5 left-6 z-10 h-5 w-16 rotate-[-4deg] bg-sun/80 shadow-sm [clip-path:polygon(2%_0,98%_0,100%_30%,96%_55%,100%_80%,98%_100%,2%_100%,0_75%,4%_50%,0_25%)]" />
        <span className="relative block max-h-28 overflow-hidden rounded-lg border-2 border-white bg-white shadow-[0_8px_16px_-8px_rgba(27,6,6,.55)]">
          <Image src={shot.src} alt={alt} width={shot.w} height={shot.h} sizes="(max-width: 640px) 80vw, 340px" className="block w-full h-auto" />
          {shot.h / shot.w > 0.42 && <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />}
        </span>
        <span className={`mt-2 inline-flex items-center gap-1.5 text-xs font-semibold ${light ? "text-cream" : "text-leaf"}`}>
          <MessageCircle size={14} aria-hidden /> Real WhatsApp message · tap to read
        </span>
      </button>

      <dialog ref={ref} onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
        className="m-auto w-[min(92vw,640px)] max-h-[90vh] overflow-auto rounded-2xl border-4 border-white bg-cream p-3 shadow-2xl backdrop:bg-ink/70">
        <form method="dialog" className="flex justify-end pb-2">
          <button className="grid h-10 w-10 place-items-center rounded-full bg-brown text-cream" aria-label="Close"><X size={18} aria-hidden /></button>
        </form>
        <Image src={shot.src} alt={alt} width={shot.w} height={shot.h} sizes="640px" className="block w-full h-auto rounded-lg" />
      </dialog>
    </>
  );
}
