import type { CSSProperties, ReactNode } from "react";

/* Tiny hand-drawn ingredient illustrations (48x48), same brown outline as the rest of the site. */
const K = "#60312B";
const o = { stroke: K, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" } as const;

const Leaf = ({ x, y, r, c = "#2E5A22", s = 1 }: { x: number; y: number; r: number; c?: string; s?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M0 0C5-9 15-9 20 0C15 9 5 9 0 0Z" fill={c} {...o} strokeWidth={1.8} />
    <path d="M2 0H16" stroke="#FFF8EE" strokeWidth="1.4" strokeLinecap="round" opacity=".8" />
  </g>
);

const art: Record<string, ReactNode> = {
  Neem: (<><path d="M10 40C18 30 26 20 36 8" fill="none" {...o} />
    <Leaf x={14} y={34} r={-125} /><Leaf x={18} y={30} r={-20} /><Leaf x={23} y={25} r={-135} /><Leaf x={27} y={21} r={-25} /><Leaf x={31} y={15} r={-140} /><Leaf x={34} y={11} r={-30} s={.9} /></>),
  "Aloe vera": (<><path d="M24 42C14 34 12 18 17 7C22 18 25 30 24 42Z" fill="#7C9A3C" {...o} />
    <path d="M24 42C34 34 36 18 31 7C26 18 23 30 24 42Z" fill="#4C651E" {...o} />
    <path d="M24 42C20 30 20 18 24 4C28 18 28 30 24 42Z" fill="#9DB554" {...o} /></>),
  Rice: (<>{[[-30, 15, 30], [8, 22, 20], [-62, 30, 32], [20, 33, 18], [-10, 14, 20]].map(([r, x, y], i) => (
    <ellipse key={i} cx={x + 4} cy={y} rx="3.6" ry="8.5" transform={`rotate(${r} ${x + 4} ${y})`} fill="#FFF8EE" {...o} strokeWidth={1.8} />))}</>),
  Turmeric: (<><path d="M9 36Q6 27 15 24L33 12Q41 8 41 16Q41 21 35 25L21 38Q12 43 9 36Z" fill="#E6A82E" {...o} />
    <path d="M19 28l4 4M26 22l4 4M32 16l3 3" stroke={K} strokeWidth="1.8" strokeLinecap="round" fill="none" /></>),
  Mulethi: (<>{[[-40, 0], [-20, 2], [0, 0]].map(([r, dx], i) => (
    <g key={i} transform={`rotate(${r + 30} 24 24) translate(${dx + (i - 1) * 8} 0)`}>
      <rect x="20" y="6" width="8" height="36" rx="3.5" fill={["#B07A4A", "#C58971", "#9A6A3C"][i]} {...o} strokeWidth={1.8} />
      <ellipse cx="24" cy="8.5" rx="3" ry="1.8" fill="#EBD9CF" stroke={K} strokeWidth="1.4" /></g>))}</>),
  Amla: (<><circle cx="17" cy="29" r="11" fill="#A9C25A" {...o} /><circle cx="32" cy="27" r="9" fill="#8DB04A" {...o} />
    <path d="M12 26q2-4 6-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7" />
    <Leaf x={20} y={18} r={-60} s={.9} /></>),
  Hibiscus: (<><g transform="translate(24 24)">{[0, 72, 144, 216, 288].map((a) => <path key={a} transform={`rotate(${a})`} d="M0 0C-9-6-11-18 0-20C11-18 9-6 0 0Z" fill="#FE5871" {...o} strokeWidth={1.8} />)}
    <circle r="4" fill="#AA473B" stroke={K} strokeWidth="1.6" /><path d="M0 0V-12" stroke="#FFD36B" strokeWidth="2.2" strokeLinecap="round" /><circle cy="-13" r="2" fill="#FFD36B" /></g></>),
  Rose: (<><circle cx="24" cy="23" r="16" fill="#FA9EAD" {...o} /><path d="M24 23c0-5 6-5 6 0s-8 7-12 1-1-14 8-14 14 12 6 18" fill="none" stroke={K} strokeWidth="2" strokeLinecap="round" />
    <Leaf x={22} y={40} r={-160} s={.8} c="#4C651E" /></>),
  Fitkari: (<><path d="M8 30L16 12L30 8L40 22L34 40L16 40Z" fill="#E4F1F4" {...o} /><path d="M16 12L22 26L40 22M22 26L16 40M22 26L34 40" fill="none" stroke={K} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M13 22l3-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></>),
  "Green tea": (<><Leaf x={8} y={34} r={-50} s={1.25} c="#7C9A3C" /><Leaf x={22} y={38} r={-85} s={1.15} c="#4C651E" /><Leaf x={26} y={30} r={-20} s={.9} c="#9DB554" /></>),
  Clove: (<>{[[-35, 0], [30, 6]].map(([r, dx], i) => (
    <g key={i} transform={`rotate(${r} 24 24) translate(${dx} 0)`}><path d="M24 40V18" stroke="#6B3E2E" strokeWidth="5" strokeLinecap="round" /><path d="M24 40V18" stroke={K} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="12" r="5.5" fill="#6B3E2E" {...o} strokeWidth={1.8} /><path d="M19 9l-3-3M29 9l3-3M24 6V2" stroke={K} strokeWidth="2" strokeLinecap="round" /></g>))}</>),
  Kalonji: (<>{[[14, 14, 20], [30, 12, -30], [22, 24, 60], [36, 28, 10], [12, 32, -50], [26, 38, 35], [38, 40, -20]].map(([x, y, r], i) => (
    <path key={i} transform={`translate(${x} ${y}) rotate(${r})`} d="M0 -5C4 -2 4 3 0 5C-4 3 -4 -2 0 -5Z" fill="#241714" stroke={K} strokeWidth="1.4" />))}</>),
};

const items: { n: string; bg: string; dur: number; delay: number; dx: number; dy: number; r0: number; r1: number; top: number }[] = [
  { n: "Neem", bg: "#D8E6B4", dur: 6.2, delay: 0, dx: 4, dy: -9, r0: -5, r1: 3, top: 0 },
  { n: "Aloe vera", bg: "#C9DD9A", dur: 7.4, delay: -2, dx: -5, dy: 8, r0: 4, r1: -3, top: 22 },
  { n: "Rice", bg: "#F6E3CF", dur: 5.6, delay: -1, dx: 3, dy: -8, r0: -3, r1: 5, top: 6 },
  { n: "Turmeric", bg: "#FBD98B", dur: 6.8, delay: -3.5, dx: -4, dy: 10, r0: 5, r1: -4, top: 26 },
  { n: "Mulethi", bg: "#EBD0BC", dur: 7.8, delay: -4, dx: 5, dy: -10, r0: -4, r1: 4, top: 14 },
  { n: "Amla", bg: "#DCE8B0", dur: 5.9, delay: -1.5, dx: -3, dy: 9, r0: 3, r1: -5, top: 0 },
  { n: "Hibiscus", bg: "#FFC9D0", dur: 7.1, delay: -5, dx: 5, dy: -8, r0: -5, r1: 3, top: 24 },
  { n: "Rose", bg: "#FBD1DA", dur: 6.4, delay: -2.5, dx: -4, dy: 10, r0: 4, r1: -3, top: 8 },
  { n: "Fitkari", bg: "#DCEEF2", dur: 8, delay: -6, dx: 4, dy: -9, r0: -3, r1: 5, top: 28 },
  { n: "Green tea", bg: "#C5DB9C", dur: 5.7, delay: -3, dx: -5, dy: 8, r0: 5, r1: -4, top: 4 },
  { n: "Clove", bg: "#E4C9B8", dur: 7.3, delay: -0.5, dx: 4, dy: -10, r0: -4, r1: 4, top: 22 },
  { n: "Kalonji", bg: "#F1E2CC", dur: 6.6, delay: -4.5, dx: -3, dy: 9, r0: 3, r1: -3, top: 10 },
];

/** Ingredient "stickers". With `float`, they drift gently in the air (home page only);
 *  without it they sit still. Motion is switched off for people who prefer reduced motion. */
export default function Pantry({ float = false }: { float?: boolean }) {
  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 gap-x-2 gap-y-3 pb-6" aria-label="Some of the ingredients she works with">
      {items.map((it) => {
        const style = { "--dur": `${it.dur}s`, "--delay": `${it.delay}s`, "--dx": `${it.dx}px`, "--dy": `${it.dy}px`, "--r0": `${it.r0}deg`, "--r1": `${it.r1}deg` } as CSSProperties;
        return (
          <li key={it.n} className="flex justify-center" style={{ paddingTop: it.top * 0.5 }}>
            <div className={`pantry-item ${float ? "pantry-float" : ""}`} style={style}>
              <div className="pantry-sticker relative flex flex-col items-center">
                <span className="grid place-items-center w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-full border-[3px] border-white shadow-[0_8px_14px_-6px_rgba(96,49,43,.45)]" style={{ backgroundColor: it.bg }}>
                  <svg viewBox="0 0 48 48" className="w-[78%] h-[78%]" aria-hidden>{art[it.n]}</svg>
                </span>
                <span className="-mt-3 rounded-full bg-white px-2.5 py-0.5 text-[.8rem] font-semibold text-brown shadow-sm">{it.n}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Free-floating placement ----------
   Each ingredient is pinned to its own spot around a `relative` wrapper (the illustration, or the text block) and
   drifts in the air. `m*` = small screens (kept inside the wrapper), `l/t/b` = screens 1280px and wider (spills out into the margins).
   `show` hides an item below that breakpoint where it would sit on the text. */
export type Placement = { n: string; lm: string; tm?: string; bm?: string; l?: string; t?: string; b?: string; show?: "md" | "xl"; size?: "sm" | "md" };

export function Floaters({ spots, label, compact = false }: { spots: Placement[]; label: string; compact?: boolean }) {
  return (
    <ul className="pointer-events-none absolute inset-0 z-10" aria-label={label}>
      {spots.map((s) => {
        const it = items.find((x) => x.n === s.n)!;
        const vars = {
          "--lm": s.lm, "--tm": s.tm, "--bm": s.bm, "--l": s.l, "--t": s.t, "--b": s.b,
          "--dur": `${it.dur}s`, "--delay": `${it.delay}s`, "--dx": `${it.dx}px`, "--dy": `${it.dy}px`, "--r0": `${it.r0}deg`, "--r1": `${it.r1}deg`,
        } as CSSProperties;
        return (
          <li key={s.n} className={`fl pointer-events-auto ${s.show === "md" ? "hidden md:block" : s.show === "xl" ? "hidden xl:block" : ""}`} style={vars}>
            <div className="pantry-item pantry-float">
              <div className="pantry-sticker relative flex flex-col items-center">
                <span className={`grid place-items-center rounded-full border-white shadow-[0_8px_14px_-6px_rgba(96,49,43,.45)] ${compact ? "h-7 w-7 border-2" : `border-[3px] ${s.size === "sm" ? "w-10 h-10 xl:w-12 xl:h-12" : "w-11 h-11 xl:w-14 xl:h-14"}`}`} style={{ backgroundColor: it.bg }}>
                  <svg viewBox="0 0 48 48" className="w-[78%] h-[78%]" aria-hidden>{art[it.n]}</svg>
                </span>
                <span className={`whitespace-nowrap rounded-full bg-white py-0.5 font-semibold text-brown shadow-sm ${compact ? "sr-only" : "-mt-2.5 px-1.5 text-[.62rem] xl:text-[.68rem]"}`}>{it.n}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
