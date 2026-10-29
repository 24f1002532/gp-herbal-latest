import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { generalLink } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Motif } from "@/components/CareArt";
import { Hand, Hourglass, EyeOff, Sun, HeartHandshake, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "Ingredients & Care", description: "What the bases in GP Herbal products are made of, which products use them, and how to look after your skin." };

const base = { title: "What our bases are made of", accent: "bg-terra/25", tape: "bg-terra/70" };

/** Only the bases and helpers are listed here. Every other ingredient is on its own product page. */
const isBase = (n: string) => /(base|bleach|activator|wax|keratin|cream)/i.test(n) && !/(oil|vitamin e)/i.test(n);

const notes = [
  { Icon: Hand, title: "Patch test first", text: "Try a little on your inner arm before anything new.", color: "bg-[#FFE9A8]", rot: "-rotate-1" },
  { Icon: EyeOff, title: "Eyes & broken skin", text: "Keep away from eyes and broken skin.", color: "bg-[#FBC9D2]", rot: "rotate-1" },
  { Icon: Sun, title: "Cool, closed & shaded", text: "Keep closed and out of the sun.", color: "bg-[#FFF8EE]", rot: "-rotate-1" },
  { Icon: HeartHandshake, title: "Sensitive skin?", text: "Tell us when you message and we will help you choose.", color: "bg-[#DCE9B8]", rot: "rotate-1" },
];

export default function Care() {
  const map = new Map<string, { role: string; used: { slug: string; name: string }[] }>();
  for (const p of products) for (const ing of p.ingredients) {
    if (!map.has(ing.name)) map.set(ing.name, { role: ing.role, used: [] });
    const e = map.get(ing.name)!;
    if (!e.used.some((u) => u.slug === p.slug)) e.used.push({ slug: p.slug, name: p.name });
  }
  const items = [...map.entries()].filter(([n]) => isBase(n)).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div>
      {/* ───────── hero ───────── */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 pt-10 md:pt-14 pb-8 md:pb-12 text-center">
          <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-7xl text-brown leading-[1.02] mt-2">Ingredients <span className="italic text-olive">&amp;</span> care</h1>
        </div>
      </section>

      {/* ───────── bases ───────── */}
      <section id="bases" className="scroll-mt-28 mx-auto max-w-6xl px-4 mt-6" aria-labelledby="bases-title">
        <header className="flex flex-col items-center text-center md:flex-row md:items-end md:text-left gap-3 md:gap-6">
          <div className={`shrink-0 grid place-items-center w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-brown/25 shrink-0 ${base.accent}`}>
            <Motif kind="base" className="w-14 h-14 md:w-16 md:h-16" />
          </div>
          <div>
            <h2 id="bases-title" className="font-display text-[1.7rem] md:text-4xl text-brown leading-tight">{base.title}</h2>
          </div>
        </header>
        <div className="mt-3 h-3 rounded-full shelf-plank" aria-hidden />

        {/* compact cards, always three to a row */}
        <ul className="mt-8 grid grid-cols-3 items-start gap-2.5 sm:gap-4 md:gap-5">
          {items.map(([name, v]) => {
            const shown = v.used.slice(0, 2), rest = v.used.slice(2);
            const chip = "rounded-full bg-cream border border-beige px-2 py-0.5 text-[.65rem] sm:px-2.5 sm:text-xs leading-snug text-brown hover:bg-olive hover:text-cream hover:border-olive";
            return (
              <li key={name} className="group relative rounded-2xl bg-white/85 border-2 border-beige paper-edge px-2.5 pt-5 pb-3 sm:px-4 sm:pt-6 sm:pb-4 transition duration-300 hover:-translate-y-1 hover:border-olive/60 hover:shadow-lg">
                <span aria-hidden className={`absolute -top-2.5 left-1/2 -translate-x-1/2 h-4 w-12 sm:h-5 sm:w-16 rotate-2 rounded-[3px] ${base.tape} opacity-90`} />
                <div className="flex flex-col items-center gap-1.5 text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left">
                  <span className={`shrink-0 grid place-items-center h-9 w-9 sm:h-11 sm:w-11 rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${base.accent}`}><Motif kind="base" className="h-7 w-7 sm:h-8 sm:w-8" /></span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[.85rem] sm:text-base md:text-lg text-brown leading-tight">{name}</h3>
                    <p className="mt-0.5 text-[.65rem] sm:text-xs text-ink/75 italic leading-snug">{v.role}</p>
                  </div>
                </div>
                <div className="mt-2.5 border-t-2 border-dashed border-beige pt-2">
                  <p className="text-[.55rem] sm:text-[10px] uppercase tracking-[.14em] text-brick font-semibold text-center sm:text-left">Found in</p>
                  <div className="mt-1.5 flex flex-wrap justify-center gap-1 sm:justify-start">
                    {shown.map((u) => <Link key={u.slug} href={`/products/${u.slug}/`} className={chip}>{u.name}</Link>)}
                  </div>
                  {rest.length > 0 && (
                    <details className="mt-1.5 group/more text-center sm:text-left">
                      <summary className="cursor-pointer text-[.65rem] sm:text-xs font-semibold text-olive list-none [&::-webkit-details-marker]:hidden">
                        <span className="group-open/more:hidden">+ {rest.length} more</span><span className="hidden group-open/more:inline">− show less</span>
                      </summary>
                      <div className="mt-1.5 flex flex-wrap justify-center gap-1 sm:justify-start">
                        {rest.map((u) => <Link key={u.slug} href={`/products/${u.slug}/`} className={chip}>{u.name}</Link>)}
                      </div>
                    </details>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ───────── care ───────── */}
      <section className="relative mt-20 md:mt-28 bg-olive text-cream scallop-top" aria-labelledby="care">
        <div className="mx-auto max-w-6xl px-4 pb-14 md:pb-20 pt-6">
          <div className="text-center">
            <h2 id="care" className="font-display text-[2rem] sm:text-4xl md:text-5xl mt-1 leading-tight">Look after your skin correctly</h2>
          </div>

          <div className="mt-10 md:mt-12 grid lg:grid-cols-5 gap-7 md:gap-8 items-start">
            {/* patch test steps */}
            <div className="lg:col-span-2 rounded-[1.75rem] md:rounded-[2rem] bg-cream text-ink p-5 sm:p-7 border-2 border-brown/30 shadow-[0_8px_0_rgba(0,0,0,.2)] -rotate-1">
              <p className="font-display text-2xl text-brown">The 3-step patch test</p>
              <ol className="mt-5 space-y-5">
                {[[Hand, "Dab", "A tiny amount on your inner arm."], [Hourglass, "Wait", "Leave it for a day and see how skin feels."], [Sparkles, "Glow on", "No redness or itching? You are good to go."]].map(([I, t, d], i) => {
                  const Icon = I as typeof Hand;
                  return (
                    <li key={t as string} className="flex gap-4 items-center">
                      <span className={`relative shrink-0 grid place-items-center w-14 h-14 rounded-full text-cream ${["bg-coral", "bg-sun !text-ink", "bg-olive"][i]}`}>
                        <Icon size={22} aria-hidden />
                        <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-brown text-cream text-xs grid place-items-center font-semibold">{i + 1}</span>
                      </span>
                      <span><span className="font-display text-lg text-brown block leading-tight">{t as string}</span><span className="text-sm text-ink/75">{d as string}</span></span>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* sticky notes */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5 md:gap-6 mt-2 lg:mt-0">
              {notes.map(({ Icon, title, text, color, rot }) => (
                <div key={title} className={`relative rounded-[1.25rem] ${color} text-ink p-6 pt-8 shadow-[0_10px_20px_-10px_rgba(0,0,0,.45)] ${rot} transition hover:rotate-0 hover:-translate-y-1`}>
                  <span aria-hidden className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brick border-2 border-brown shadow-sm" />
                  <Icon className="text-brown" size={26} aria-hidden />
                  <h3 className="font-display text-xl text-brown mt-3">{title}</h3>
                  <p className="text-sm mt-2 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <p className="font-script text-3xl text-blush">Not sure about something?</p>
            <div className="mt-3"><WhatsAppButton href={generalLink()} label="Ask us about an ingredient" variant="text" className="!text-cream hover:!text-blush text-lg" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
