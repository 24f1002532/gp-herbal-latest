import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { generalLink } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import Founder from "@/components/Founder";
import { Floaters, type Placement } from "@/components/Pantry";

export const metadata: Metadata = { title: "Contact", description: "Contact GP Herbal Homemade Products on WhatsApp to order or ask about a product." };

const around: Placement[] = [
  { n: "Hibiscus", lm: "-2%", tm: "2%", l: "-10%", t: "4%", size: "sm" },
  { n: "Neem", lm: "82%", tm: "0%", l: "90%", t: "2%", size: "sm" },
  { n: "Rose", lm: "80%", tm: "62%", l: "90%", t: "60%", size: "sm" },
  { n: "Turmeric", lm: "-2%", tm: "64%", l: "-10%", t: "62%", size: "sm" },
];

export default function Contact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-blush/25">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-12 md:py-24">
          <div className="relative md:col-span-7">
            <p className="font-script text-4xl leading-none text-leaf">Let&rsquo;s talk</p>
            <h1 className="mt-2 font-display text-5xl leading-[1.05] text-brown md:text-6xl">Come say hello. The kettle&rsquo;s on.</h1>
            <p className="mt-6 max-w-xl text-lg">There is no cart and no checkout here. You message the woman who makes everything, and she writes back herself. Tap the button and your message is ready, you only have to press Send.</p>
            <WhatsAppButton href={generalLink()} label="Chat on WhatsApp" className="mt-8" />
            <p className="mt-4 flex items-center gap-2 text-ink/75"><MapPin size={16} className="text-leaf" aria-hidden /> Abohar, Punjab</p>
          </div>
          <div className="relative mx-auto w-full max-w-xs md:col-span-5 md:max-w-sm">
            <Founder className="h-auto w-full drop-shadow-[0_18px_22px_rgba(96,49,43,.22)]" />
            <Floaters spots={around} label="Ingredients floating around the kitchen" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 pt-6 text-center">
        <p className="font-script text-4xl text-leaf">Not sure what to pick?</p>
        <p className="mx-auto mt-2 max-w-lg text-lg">Browse the shelves first, then send us the names of the ones you like.</p>
        <Link href="/products/" className="btn btn-line mt-6">Browse all products <ArrowRight size={18} aria-hidden /></Link>
      </section>
    </div>
  );
}
