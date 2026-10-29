import Link from "next/link";
import { ArrowRight, MapPin, Clock, MessageCircle, Package } from "lucide-react";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Founder from "@/components/Founder";
import { Floaters, type Placement } from "@/components/Pantry";
import Image from "next/image";
import { shots } from "@/lib/gallery";

/* Ingredients that float in the air around the illustration: three below, six at the sides (About section only). */
const aroundHer: Placement[] = [
  { n: "Neem", lm: "-1%", tm: "1%", l: "-11%", t: "-1%" },
  { n: "Hibiscus", lm: "80%", tm: "-1%", l: "89%", t: "3%" },
  { n: "Rice", lm: "-2%", tm: "34%", l: "-14%", t: "32%" },
  { n: "Turmeric", lm: "82%", tm: "27%", l: "90%", t: "26%" },
  { n: "Mulethi", lm: "0%", tm: "64%", l: "-11%", t: "62%" },
  { n: "Aloe vera", lm: "81%", tm: "50%", l: "90%", t: "49%" },
  /* three below it (the round badge keeps the bottom-right corner) */
  { n: "Fitkari", lm: "6%", bm: "-3.4rem", l: "6%", b: "-3.6rem", size: "sm" },
  { n: "Clove", lm: "34%", bm: "-3.8rem", l: "34%", b: "-4rem", size: "sm" },
  { n: "Kalonji", lm: "60%", bm: "-3.4rem", l: "58%", b: "-3.6rem", size: "sm" },
];
/* Phone layout: the illustration is small and sits beside the text, so the ingredients shrink and hug it more tightly. */
const aroundHerMobile: Placement[] = [
  { n: "Neem", lm: "-8%", tm: "0%" },
  { n: "Hibiscus", lm: "74%", tm: "-2%" },
  { n: "Rice", lm: "-10%", tm: "33%" },
  { n: "Turmeric", lm: "76%", tm: "28%" },
  { n: "Mulethi", lm: "-8%", tm: "64%" },
  { n: "Aloe vera", lm: "74%", tm: "55%" },
  { n: "Fitkari", lm: "-2%", bm: "-1.9rem" },
  { n: "Clove", lm: "30%", bm: "-2.1rem" },
  { n: "Kalonji", lm: "58%", bm: "-1.9rem" },
];
/* The four photos on the home page, each cut into its own shape with a colour block behind it. */
const packShapes = [
  { id: "soap-box", shape: "rounded-t-[999px] rounded-b-[1.5rem]", aspect: "aspect-[4/5]", back: "bg-blush", pos: "" },
  { id: "bottles", shape: "rounded-full", aspect: "aspect-square", back: "bg-sun/80", pos: "md:mb-14" },
  { id: "gp-shampoos", shape: "rounded-[2.5rem_6rem_2.5rem_6rem]", aspect: "aspect-[4/5]", back: "bg-olive/50", pos: "max-md:-mt-2 md:mb-4" },
  { id: "day-creams", shape: "rounded-[999px]", aspect: "aspect-[3/4]", back: "bg-coral/60", pos: "md:mb-20" },
] as const;
const steps = [
  { Icon: MessageCircle, t: "Say hello", d: "Tap the button. A message is already written for you." },
  { Icon: Package, t: "Pick your products", d: "Tell us what you like, or ask us what suits your skin and hair." },
  { Icon: Clock, t: "We make and pack it", d: "Each order is wrapped and sealed by hand in Abohar." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ---------- About: the woman behind GP Herbal ---------- */}
      <section aria-labelledby="about-h" className="relative bg-blush/25 overflow-hidden">
        {/* On phones the picture sits on the left and the words on the right, so the whole section fits on one screen, as it does on a laptop. */}
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-24 grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-4 md:grid-cols-12 md:gap-x-14 items-center">
          <div className="relative md:col-span-5 mx-auto w-full max-w-[19rem] md:max-w-md mt-4 mb-12 md:my-0">
            <Founder className="w-full h-auto drop-shadow-[0_10px_14px_rgba(96,49,43,.22)] md:drop-shadow-[0_18px_22px_rgba(96,49,43,.22)]" />
            <div className="spin-slow absolute -right-1 -bottom-2 h-12 w-12 md:-right-8 md:-bottom-6 md:h-28 md:w-28" aria-hidden>
              <svg viewBox="0 0 100 100"><defs><path id="ab" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" /></defs>
                <circle cx="50" cy="50" r="48" fill="#2E5A22" stroke="#F9F4EB" strokeWidth="2" />
                <text fontSize="8.6" fill="#F9F4EB" letterSpacing="1.3" fontFamily="sans-serif" fontWeight="600"><textPath href="#ab">ABOHAR • PUNJAB • HANDMADE • </textPath></text>
                <path d="M50 36C60 44 60 58 50 66C40 58 40 44 50 36Z" fill="#FA9EAD" /></svg>
            </div>
            <div className="md:hidden"><Floaters spots={aroundHerMobile} compact label="Ingredients floating around her kitchen" /></div>
            <div className="hidden md:block"><Floaters spots={aroundHer} label="Ingredients floating around her kitchen" /></div>
          </div>

          <div className="md:col-span-7 relative md:pl-8 lg:pl-16 text-left">
            <p className="inline-flex items-center gap-1 md:gap-1.5 text-[.72rem] md:text-base text-leaf font-semibold"><MapPin className="h-3 w-3 md:h-4 md:w-4" aria-hidden /> Abohar, Punjab</p>
            <h2 id="about-h" className="font-display text-[1.2rem] min-[420px]:text-[1.35rem] sm:text-3xl md:text-5xl text-brown mt-1 md:mt-2 leading-[1.12] md:leading-[1.1]">One woman, one kitchen & a pantry full of herbs.</h2>
            <p className="mt-2.5 md:mt-5 text-[.8rem] leading-snug sm:text-base md:text-lg max-w-xl">GP Herbal began at home in Abohar, where each product is made in small batches by the woman behind the brand.</p>
            <p className="mt-2 md:mt-4 max-w-xl text-[.72rem] leading-snug sm:text-[.95rem] md:text-base text-ink/85">From soaps and shampoos to face packs, she makes and packs each product herself, using ingredients such as neem, aloe vera, rice, turmeric and mulethi. It's a home-run business built around products she enjoys making and sharing with others.</p>
            <Link href="/our-story/" className="btn btn-olive mt-4 md:mt-8 max-md:!min-h-9 max-md:!px-4 max-md:!py-1.5 max-md:text-[.8rem]">Read her story <ArrowRight size={16} aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* ---------- Behind the packing table: cut-out shapes with a colour block peeking out behind each one ---------- */}
      <section className="relative overflow-hidden bg-leaf/10 py-14 md:py-24" aria-labelledby="pack-h">
        <span aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush/40" />
        <span aria-hidden className="pointer-events-none absolute -right-20 bottom-8 h-80 w-80 rounded-full bg-sun/25" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 id="pack-h" className="font-display text-[1.8rem] md:text-5xl text-brown leading-tight">Behind the packing table</h2>
            <p className="mx-auto mt-3 max-w-md text-ink/85">Real orders, wrapped and sealed by hand.</p>
          </div>
          <ul className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-9 items-end">
            {packShapes.map((f, i) => {
              const sh = shots.find((x) => x.id === f.id)!;
              return (
                <li key={f.id} className={f.pos}>
                  <Link href="/gallery/" aria-label={`${sh.caption}. Open the gallery`} className="group relative block">
                    <span aria-hidden className={`absolute inset-0 translate-x-2.5 translate-y-2.5 md:translate-x-4 md:translate-y-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 ${f.shape} ${f.back}`} />
                    <span className={`relative block overflow-hidden border-[3px] border-cream shadow-[0_16px_24px_-14px_rgba(96,49,43,.6)] transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 ${f.aspect} ${f.shape}`}>
                      <Image src={sh.src} alt={sh.alt} fill sizes="(max-width: 768px) 46vw, 280px" priority={i < 2} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-14 md:mt-20 text-center">
            <Link href="/gallery/" className="btn btn-olive">See the full gallery <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* ---------- How ordering works ---------- */}
      <section className="stripes">
        <div className="mx-auto max-w-5xl px-3 sm:px-4 py-10 md:py-14">
          <div className="scallop-frame border-2 border-blush bg-cream px-4 py-8 sm:p-8 md:p-12">
            <h2 className="text-center font-display text-[1.7rem] text-brown md:text-4xl">How ordering works</h2>
            <ol className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-6">
              {steps.map(({ Icon, t, d }, i) => (
                <li key={t} className="relative flex items-center gap-4 text-left md:block md:text-center">
                  <span className={`md:mx-auto grid h-16 w-16 md:h-20 md:w-20 shrink-0 place-items-center rounded-full border-[3px] border-white text-brown shadow-[0_8px_14px_-6px_rgba(96,49,43,.45)] ${["bg-blush/70 -rotate-3", "bg-sun/50 rotate-3", "bg-olive/25 -rotate-2"][i]}`}><Icon size={30} aria-hidden /></span>
                  <div><p className="md:mt-4 font-display text-xl md:text-2xl text-brown"><span className="text-brick">{i + 1}.</span> {t}</p>
                  <p className="md:mx-auto mt-0.5 md:mt-1 max-w-[16rem] text-[.95rem] md:text-base text-ink/80">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
