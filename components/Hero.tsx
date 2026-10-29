import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { publishedCategories } from "@/lib/data";
import Art from "./Art";

/* ---- hand-drawn botanical bits (decorative only) ---- */
const Leaf = ({ c = "#4C651E", className = "" }: { c?: string; className?: string }) => (
  <svg viewBox="0 0 90 50" className={className} aria-hidden>
    <path d="M4 25C24 -2 64 -2 86 25C64 52 24 52 4 25Z" fill={c} />
    <path d="M4 25H80" stroke="#F9F4EB" strokeWidth="2" strokeLinecap="round" opacity=".7" />
  </svg>
);
const Hibiscus = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-50 -50 100 100" className={className} aria-hidden>
    {[0, 72, 144, 216, 288].map((r) => (
      <path key={r} transform={`rotate(${r})`} d="M0 0C-22 -14 -26 -42 0 -46C26 -42 22 -14 0 0Z" fill="#FE5871" stroke="#AA473B" strokeWidth="1.5" />
    ))}
    <circle r="9" fill="#AA473B" />
    <path d="M0 0V-30" stroke="#F9F4EB" strokeWidth="3" strokeLinecap="round" />
    {[-8, 0, 8].map((x) => <circle key={x} cx={x} cy={-33 + Math.abs(x) / 3} r="3" fill="#F9F4EB" />)}
  </svg>
);
const Rice = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 120" className={className} aria-hidden>
    <path d="M10 118C14 70 26 30 34 6" stroke="#4C651E" strokeWidth="3" fill="none" strokeLinecap="round" />
    {[14, 30, 46, 62, 78].map((y, i) => (
      <g key={y}>
        <ellipse cx={34 - i * 3 + 10} cy={y} rx="4" ry="9" fill="#D9BFB3" transform={`rotate(25 ${44 - i * 3} ${y})`} />
        <ellipse cx={34 - i * 3 - 6} cy={y + 6} rx="4" ry="9" fill="#C58971" transform={`rotate(-25 ${28 - i * 3} ${y + 6})`} />
      </g>
    ))}
  </svg>
);
const Arrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 90" className={className} fill="none" stroke="#AA473B" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <path className="draw" d="M6 10C60 -8 70 40 40 42C10 44 36 4 74 36C100 58 120 66 148 62" />
    <path d="M134 50L150 62L132 74" />
  </svg>
);

function Awning() {
  const n = 10, w = 40;
  return (
    <svg viewBox={`0 0 ${n * w} 84`} className="w-full block drop-shadow-sm" aria-hidden>
      {Array.from({ length: n }, (_, i) => {
        const fill = i % 2 ? "#FFF8EE" : "#FE5871";
        return (
          <g key={i} fill={fill}>
            <rect x={i * w} y="0" width={w} height="58" />
            <path d={`M${i * w} 58a20 20 0 0 0 ${w} 0Z`} />
          </g>
        );
      })}
      <rect width={n * w} height="8" fill="#4C651E" />
    </svg>
  );
}

export default function Hero() {
  const cats = publishedCategories();
  const tilt = ["-rotate-2", "rotate-2", "rotate-1", "-rotate-1"];
  return (
    <section className="grid-paper relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:pt-14 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* words */}
        <div className="relative text-center md:text-left">
          <p className="inline-flex items-center gap-3 text-[.72rem] sm:text-sm font-semibold uppercase tracking-[.22em] text-olive">
          </p>
          <h1 className="mt-4 font-display font-light text-[2.6rem] sm:text-6xl lg:text-7xl text-brick leading-[1.05]">
            <span className="relative inline-block font-script text-leaf text-[3.4rem] sm:text-7xl lg:text-8xl align-baseline">
              Herbal
              <svg viewBox="0 0 120 10" preserveAspectRatio="none" className="absolute left-1 right-0 -bottom-1 h-2.5 w-full text-blush" aria-hidden><path d="M2 6q15-7 29 0t29 0t29 0t29 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            </span>{" "}essentials for <span className="italic text-olive">every day</span>
          </h1>
          <Arrow className="hidden md:block w-40 mt-4 ml-24" />
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3.5">
            <Link href="/products/" className="btn btn-olive btn-lg group !pr-2.5">Explore the range <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/20 transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={18} aria-hidden /></span></Link>
            <Link href="/our-story/" className="btn btn-line btn-lg">Our story</Link>
          </div>
        </div>

        {/* the stall */}
        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-md px-1">
          <Hibiscus className="float absolute -top-7 -right-1 sm:-right-4 w-16 sm:w-20 z-10" />
          <Leaf className="sway absolute -top-4 left-2 w-12 sm:w-16 z-10 -rotate-12" />
          <Rice className="sway absolute -bottom-6 -left-1 sm:-left-6 w-11 sm:w-14 z-10" />
          <Leaf c="#C58971" className="float absolute bottom-10 -right-1 sm:-right-6 w-10 sm:w-14 z-10 rotate-45" />
          <div className="spin-slow absolute -left-10 top-1/3 z-20 hidden sm:block w-24 h-24" aria-hidden>
            <svg viewBox="0 0 100 100"><defs><path id="c" d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1-74 0" /></defs>
              <circle cx="50" cy="50" r="48" fill="#4C651E" />
              <text fontSize="11.5" fill="#F9F4EB" letterSpacing="2.4" fontFamily="sans-serif" fontWeight="600"><textPath href="#c">MADE AT HOME • HERBAL • </textPath></text>
              <path d="M50 36C60 44 60 58 50 66C40 58 40 44 50 36Z" fill="#FA9EAD" /></svg>
          </div>

          <Awning />
          <div className="-mt-1 bg-white/70 border-x-4 border-b-4 border-brown rounded-b-[2rem] px-3 sm:px-5 pt-5 pb-6">
            <p className="text-center text-xs font-semibold tracking-[.2em] uppercase text-olive mb-4">Pick a window</p>
            <ul className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {cats.map((c, i) => (
                <li key={c.slug} className={tilt[i % 4]}>
                  <Link href={`/products/${c.slug}/`} className="group block text-center">
                    <div className="wavy aspect-square transition-transform group-hover:scale-105 group-hover:rotate-3"><Art alt="" tone={c.tone} slug={c.slug} /></div>
                    <span className="mt-2 block font-display text-[.8rem] sm:text-base leading-tight text-brown group-hover:text-leaf">{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
