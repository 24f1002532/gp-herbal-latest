import Image from "next/image";
import type { Shot } from "@/lib/gallery";

export const tapeColor = { blush: "bg-blush/85", olive: "bg-olive/70", sun: "bg-sun/80", coral: "bg-coral/70" } as const;
const tilt = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-[1.5deg]", "-rotate-[1.5deg]"];

/** A photo print: white border, a strip of washi tape, a handwritten-style caption. Never cropped or stretched. */
export function PrintBody({ s, sizes, playing }: { s: Shot; sizes: string; playing?: boolean }) {
  return (
    <>
      {s.video && playing ? (
        <video src={s.video} poster={s.src} controls autoPlay muted playsInline loop className="block w-full h-auto bg-ink" aria-label={s.alt} />
      ) : (
        <div className="relative">
          <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes={sizes} className="block w-full h-auto" />
          {s.video && (
            <span aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="grid place-items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cream/90 text-brown shadow-lg"><svg viewBox="0 0 24 24" className="w-7 h-7 ml-1"><path d="M7 4l13 8-13 8z" fill="currentColor" /></svg></span>
            </span>
          )}
        </div>
      )}
      <figcaption className="pt-2.5 pb-1 px-0.5 font-display italic text-brown text-[.88rem] sm:text-[1.05rem] leading-snug">{s.caption}</figcaption>
    </>
  );
}

export function Tape({ c, i }: { c: Shot["tape"]; i: number }) {
  return <span aria-hidden className={`absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 ${i % 2 ? "rotate-3" : "-rotate-3"} ${tapeColor[c]} shadow-sm [clip-path:polygon(2%_0,98%_0,100%_25%,96%_50%,100%_75%,98%_100%,2%_100%,0_75%,4%_50%,0_25%)]`} />;
}

export function tiltFor(i: number) { return tilt[i % tilt.length]; }
