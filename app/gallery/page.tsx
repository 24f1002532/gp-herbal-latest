import type { Metadata } from "next";
import GalleryWall from "@/components/GalleryWall";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generalLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Real photos of GP Herbal orders being made and packed by hand in Abohar, Punjab.",
};

export default function Gallery() {
  return (
    <div>
      <section className="grid-paper relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 pt-14 pb-10 md:pt-20 text-center">
          <h1 className="font-display font-light text-5xl md:text-6xl text-brick leading-[1.05]">
            A little look at what we <span className="font-script text-leaf text-6xl md:text-7xl align-baseline">make.</span>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-lg">A few snapshots of our products, packed and ready to go.</p>
        </div>
      </section>

      <section className="relative bg-beige/45 py-14 md:py-20" aria-label="Photo wall">
        <div aria-hidden className="absolute inset-x-0 top-0 h-3 sprig-divider" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8"><GalleryWall /></div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl text-brown">Want a parcel like this?</h2>
        <p className="mt-3">Tell us what you like and we will pack it up for you.</p>
        <WhatsAppButton href={generalLink()} label="Message us on WhatsApp" className="mt-6" />
      </section>
    </div>
  );
}
