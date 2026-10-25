import type { Metadata } from "next";
import { generalLink } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import Founder from "@/components/Founder";
import Pantry from "@/components/Pantry";

export const metadata: Metadata = { title: "Our Story", description: "Meet the woman behind GP Herbal, who makes every product by hand in her home kitchen in Abohar, Punjab." };

const steps = [
  ["Gather", "Neem, aloe vera, rice, turmeric, mulethi and the rest are chosen and set out on the counter."],
  ["Grind and infuse", "Herbs are ground into fine powders or infused into oils and bases."],
  ["Pour and set", "Soaps are poured into butterfly, sunflower and oval moulds and left to set."],
  ["Fill and pack", "Jars, bottles and pouches are filled and sealed by hand."],
];

export default function Story() {
  return (
    <div>
      <section className="bg-blush/25">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="text-leaf font-semibold">Abohar, Punjab</p>
            <h1 className="font-display text-5xl md:text-6xl text-brown mt-2 leading-[1.05]">Care that begins in a home kitchen</h1>
            <p className="mt-6 text-lg max-w-xl">Behind the brand is a woman who has built her own little business around making herbal personal care products. What you see here is the result of her work, her time, and the effort she puts into running something of her own.</p>
            <p className="mt-4 max-w-xl">She makes soaps, shampoos, face wash and facial kits herself. The same hands that choose the herbs grind them, pour them and pack them. If you have ever had something made for you by someone who cares how it turns out, you already know the feeling we are going for.</p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 mx-auto w-full max-w-sm">
            <Founder className="w-full h-auto drop-shadow-[0_18px_22px_rgba(96,49,43,.22)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="font-display text-3xl md:text-4xl text-brown">How it all comes together :</h2>
        <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-[1.5rem] bg-white/70 border-2 border-beige p-5 paper-edge">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-leaf text-cream font-display text-lg">{i + 1}</span>
              <h3 className="mt-3 font-display text-xl text-brown">{t}</h3>
              <p className="mt-1 text-sm text-ink/85">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-beige/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="font-display text-3xl md:text-4xl text-brown">Her pantry</h2>
          <div className="mt-6"><Pantry /></div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl text-brown">Say hello</h2>
        <p className="mt-3">Questions about a product, or want to place an order? Message her directly on WhatsApp.</p>
        <WhatsAppButton href={generalLink()} label="Say hello on WhatsApp" className="mt-6" />
      </section>
    </div>
  );
}
