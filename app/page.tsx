import Link from "next/link";
import { ArrowRight, MapPin, Clock, MessageCircle, Package } from "lucide-react";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import { publishedCategories } from "@/lib/data";
import Art from "@/components/Art";
import Founder from "@/components/Founder";
import { Floaters, type Placement } from "@/components/Pantry";
import Image from "next/image";
import { shots } from "@/lib/gallery";
import { Tape, tiltFor } from "@/components/Print";

/* Ingredients that float in the air around the illustration: three above, three below, six at the sides (About section only). */
const aroundHer: Placement[] = [
  { n: "Neem", lm: "-1%", tm: "1%", l: "-11%", t: "-1%" },
  { n: "Hibiscus", lm: "80%", tm: "-1%", l: "89%", t: "3%" },
  { n: "Rice", lm: "-2%", tm: "34%", l: "-14%", t: "32%" },
  { n: "Turmeric", lm: "82%", tm: "27%", l: "90%", t: "26%" },
  { n: "Mulethi", lm: "0%", tm: "64%", l: "-11%", t: "62%" },
  { n: "Aloe vera", lm: "81%", tm: "50%", l: "90%", t: "49%" },
  /* three above the illustration ... */
  { n: "Amla", lm: "12%", tm: "-4.6rem", l: "12%", t: "-5.2rem", size: "sm" },
  { n: "Rose", lm: "42%", tm: "-5.4rem", l: "42%", t: "-6rem", size: "sm" },
  { n: "Green tea", lm: "72%", tm: "-4.6rem", l: "72%", t: "-5.2rem", size: "sm" },
  /* ... and three below it (the round badge keeps the bottom-right corner) */
  { n: "Fitkari", lm: "6%", bm: "-5rem", l: "6%", b: "-5.4rem", size: "sm" },
  { n: "Clove", lm: "34%", bm: "-5.6rem", l: "34%", b: "-6rem", size: "sm" },
  { n: "Kalonji", lm: "60%", bm: "-4.6rem", l: "58%", b: "-5rem", size: "sm" },
];
const steps = [
  { Icon: MessageCircle, t: "Say hello", d: "Tap the button. A message is already written for you." },
  { Icon: Package, t: "Pick your products", d: "Tell us what you like, or ask us what suits your skin and hair." },
  { Icon: Clock, t: "We make and pack it", d: "Each order is wrapped and sealed by hand in Abohar." },
];

export default function Home() {
  const cats = publishedCategories();
  return (
    <>
      <Hero />

      <section className="stripes">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="scallop-frame bg-cream p-6 md:p-12 border-2 border-blush">
            <h2 className="font-display text-3xl md:text-4xl text-brown text-center">Find your favourite kind of care</h2>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-8">
              {cats.map((c) => (
                <li key={c.slug} className="w-[calc(50%-0.75rem)] sm:w-[calc(33.3%-1.1rem)] lg:w-[calc(25%-1.15rem)]">
                  <Link href={`/products/${c.slug}/`} className="group block text-center">
                    <div className="wavy aspect-square transition-transform group-hover:rotate-2 group-hover:scale-105"><Art alt="" tone={c.tone} slug={c.slug} /></div>
                    <span className="mt-4 block font-display text-xl text-brown group-hover:text-leaf">{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- About: the woman behind GP Herbal ---------- */}
      <section aria-labelledby="about-h" className="relative bg-blush/25 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5 relative mx-auto w-full max-w-md mt-14 mb-20 md:my-0">
            <Founder className="w-full h-auto drop-shadow-[0_18px_22px_rgba(96,49,43,.22)]" />
            <div className="spin-slow absolute -right-3 -bottom-3 sm:-right-8 sm:-bottom-6 w-28 h-28" aria-hidden>
              <svg viewBox="0 0 100 100"><defs><path id="ab" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" /></defs>
                <circle cx="50" cy="50" r="48" fill="#2E5A22" stroke="#F9F4EB" strokeWidth="2" />
                <text fontSize="8.6" fill="#F9F4EB" letterSpacing="1.3" fontFamily="sans-serif" fontWeight="600"><textPath href="#ab">ABOHAR • PUNJAB • HANDMADE • </textPath></text>
                <path d="M50 36C60 44 60 58 50 66C40 58 40 44 50 36Z" fill="#FA9EAD" /></svg>
            </div>
            <Floaters spots={aroundHer} label="Ingredients floating around her kitchen" />
          </div>

          <div className="md:col-span-7 relative md:pl-8 lg:pl-16">
            <p className="inline-flex items-center gap-1.5 text-leaf font-semibold"><MapPin size={16} aria-hidden /> Abohar, Punjab</p>
            <h2 id="about-h" className="font-display text-4xl md:text-5xl text-brown mt-2 leading-[1.1]">One woman, one kitchen & a pantry full of herbs.</h2>
            <p className="mt-5 text-lg max-w-xl">GP Herbal began at home in Abohar, where each product is made in small batches by the woman behind the brand.</p>
            <p className="mt-4 max-w-xl text-ink/85">From soaps and shampoos to face packs, she makes and packs each product herself, using ingredients such as neem, aloe vera, rice, turmeric and mulethi. It's a home-run business built around products she enjoys making and sharing with others.</p>
            <Link href="/our-story/" className="btn btn-olive mt-8">Read her story <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* ---------- Behind the packing table ---------- */}
      <section className="bg-leaf/10 py-16 overflow-hidden" aria-labelledby="pack-h">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 id="pack-h" className="font-display text-3xl md:text-4xl text-brown">Behind the packing table</h2>
              <p className="mt-2 max-w-md text-ink/85">Real photos of real orders, wrapped and sealed by hand.</p>
            </div>
            <Link href="/gallery/" className="inline-flex items-center gap-2 font-semibold text-leaf underline underline-offset-4">Open the gallery <ArrowRight size={16} aria-hidden /></Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start">
            {["soap-box", "bottles", "gp-shampoos", "day-creams"].map((id, i) => {
              const sh = shots.find((x) => x.id === id)!;
              return (
                <li key={id} className={`${tiltFor(i)} ${i % 2 ? "md:mt-8" : ""}`}>
                  <Link href="/gallery/" className="relative block bg-white p-2.5 pb-3 rounded-sm shadow-[0_14px_26px_-12px_rgba(96,49,43,.5)] border border-brown/10">
                    <Tape c={sh.tape} i={i} />
                    <Image src={sh.src} alt={sh.alt} width={sh.w} height={sh.h} sizes="(max-width: 768px) 45vw, 260px" className="block w-full h-auto" />
                    <span className="block pt-2.5 px-1 font-display italic text-brown leading-snug">{sh.caption}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- How ordering works ---------- */}
      <section className="stripes">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="scallop-frame border-2 border-blush bg-cream p-6 md:p-12">
            <h2 className="text-center font-display text-3xl text-brown md:text-4xl">How ordering works</h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
              {steps.map(({ Icon, t, d }, i) => (
                <li key={t} className="relative text-center">
                  <span className={`mx-auto grid h-20 w-20 place-items-center rounded-full border-[3px] border-white text-brown shadow-[0_8px_14px_-6px_rgba(96,49,43,.45)] ${["bg-blush/70 -rotate-3", "bg-sun/50 rotate-3", "bg-olive/25 -rotate-2"][i]}`}><Icon size={30} aria-hidden /></span>
                  <p className="mt-4 font-display text-2xl text-brown"><span className="text-brick">{i + 1}.</span> {t}</p>
                  <p className="mx-auto mt-1 max-w-[16rem] text-ink/80">{d}</p>
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
