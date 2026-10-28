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
  { Icon: Hand, title: "Patch test first", text: "Herbal does not mean allergy-proof. Dab a little on your inner arm before trying anything new, especially the bleach, wax powder and clove oil cream.", color: "bg-[#FFE9A8]", rot: "-rotate-1" },
  { Icon: EyeOff, title: "Eyes & broken skin", text: "Keep anything you apply away from your eyes, and never use wax or bleach on rashes or broken skin.", color: "bg-[#FBC9D2]", rot: "rotate-1" },
  { Icon: Sun, title: "Cool, closed & shaded", text: "Keep jars, bottles and pouches closed and out of direct sun.", color: "bg-[#FFF8EE]", rot: "-rotate-1" },
  { Icon: HeartHandshake, title: "Sensitive skin?", text: "If you have sensitive skin or a known allergy, tell us when you message and we will help you choose.", color: "bg-[#DCE9B8]", rot: "rotate-1" },
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
        <div className="relative mx-auto max-w-3xl px-4 pt-14 pb-12 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-brown leading-[1.02] mt-2">Ingredients <span className="italic text-olive">&amp;</span> care</h1>
          <p className="mt-6 text-lg text-ink/80 max-w-xl mx-auto">Every product page lists its own herbs, benefits and how to use it. Here we want to be open about the bases, plus a few little habits that keep your skin happy.</p>
        </div>
      </section>

      {/* ───────── bases ───────── */}
      <section id="bases" className="scroll-mt-28 mx-auto max-w-6xl px-4 mt-6" aria-labelledby="bases-title">
        <header className="flex items-end gap-4 md:gap-6">
          <div className={`shrink-0 grid place-items-center w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-brown/25 ${base.accent}`}>
            <Motif kind="base" className="w-14 h-14 md:w-16 md:h-16" />
          </div>
          <div>
            <p className="font-script text-3xl text-coral leading-none">nothing to hide</p>
            <h2 id="bases-title" className="font-display text-3xl md:text-4xl text-brown leading-tight">{base.title}</h2>
            <p className="text-ink/75 mt-1 max-w-2xl">Every product has its own ingredient list on its page. The bases are the foundations that hold a product together, so here is exactly what they are and where we use them.</p>
          </div>
        </header>
        <div className="mt-3 h-3 rounded-full shelf-plank" aria-hidden />

        <ul className="mt-8 flex flex-wrap justify-center items-start gap-6">
          {items.map(([name, v], i) => {
            const shown = v.used.slice(0, 3), rest = v.used.slice(3);
            return (
              <li key={name} className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] relative rounded-[1.25rem] bg-white/85 border-2 border-beige paper-edge px-5 pt-7 pb-5 transition duration-300 hover:rotate-0 hover:-translate-y-1 ${["-rotate-1", "rotate-[0.8deg]", "rotate-1", "-rotate-[0.6deg]"][i % 4]}`}>
                <span aria-hidden className={`absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-20 rotate-2 rounded-[3px] ${base.tape} opacity-90`} />
                <div className="flex items-start gap-3">
                  <span className={`shrink-0 grid place-items-center w-14 h-14 rounded-2xl ${base.accent}`}><Motif kind="base" className="w-10 h-10" /></span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-brown leading-tight">{name}</h3>
                    <p className="text-sm text-ink/75 italic mt-1">{v.role}</p>
                  </div>
                </div>
                <div className="mt-4 border-t-2 border-dashed border-beige pt-3">
                  <p className="text-[11px] uppercase tracking-[.18em] text-brick font-semibold">Found in</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {shown.map((u) => <Link key={u.slug} href={`/products/${u.slug}/`} className="rounded-full bg-cream border border-beige px-3 py-1 text-xs text-brown hover:bg-olive hover:text-cream hover:border-olive transition">{u.name}</Link>)}
                  </div>
                  {rest.length > 0 && (
                    <details className="mt-2 group">
                      <summary className="cursor-pointer text-xs font-semibold text-olive list-none [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">+ {rest.length} more</span><span className="hidden group-open:inline">− show less</span>
                      </summary>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {rest.map((u) => <Link key={u.slug} href={`/products/${u.slug}/`} className="rounded-full bg-cream border border-beige px-3 py-1 text-xs text-brown hover:bg-olive hover:text-cream hover:border-olive transition">{u.name}</Link>)}
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
      <section className="relative mt-28 bg-olive text-cream scallop-top" aria-labelledby="care">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-6">
          <div className="text-center">
            <p className="font-script text-4xl text-blush -rotate-2">little notes from us</p>
            <h2 id="care" className="font-display text-4xl md:text-5xl mt-1">Look after your skin correctly</h2>
          </div>

          <div className="mt-12 grid lg:grid-cols-5 gap-8 items-start">
            {/* patch test steps */}
            <div className="lg:col-span-2 rounded-[2rem] bg-cream text-ink p-7 border-2 border-brown/30 shadow-[0_8px_0_rgba(0,0,0,.2)] -rotate-1">
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
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
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

          <div className="mt-12 text-center">
            <p className="font-script text-3xl text-blush">Not sure about something?</p>
            <div className="mt-3"><WhatsAppButton href={generalLink()} label="Ask us about an ingredient" variant="text" className="!text-cream hover:!text-blush text-lg" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
