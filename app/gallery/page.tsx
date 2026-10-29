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
      {/* ---------- hero ---------- */}
      <section className="grid-paper relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 pb-10 pt-10 text-center md:pb-14 md:pt-20">
          
          <h1 className="mt-3 font-display text-[2.5rem] font-light leading-[1.05] text-brick sm:text-5xl md:text-6xl">
            A little look at what we <span className="font-script align-baseline text-[3.4rem] text-leaf md:text-7xl">make.</span>
          </h1>
        </div>
      </section>

      {/* ---------- the wall ---------- */}
      <section className="relative overflow-hidden bg-leaf/10 py-14 md:py-24" aria-label="Photo wall">
        <span aria-hidden className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-blush/35" />
        <span aria-hidden className="pointer-events-none absolute -right-24 top-[45%] h-96 w-96 rounded-full bg-sun/20" />
        <span aria-hidden className="pointer-events-none absolute -left-20 bottom-24 h-72 w-72 rounded-full bg-olive/15" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-3 sprig-divider" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10"><GalleryWall /></div>
      </section>

      {/* ---------- closing card ---------- */}
      <section className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-olive px-6 py-10 text-center text-cream shadow-[0_10px_0_rgba(0,0,0,.15)] md:px-12 md:py-14">
          <span aria-hidden className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blush/30" />
          <span aria-hidden className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-sun/25" />
          <div className="relative">
            <p className="font-script text-3xl leading-none text-blush md:text-4xl">fancy one of these?</p>
            <h2 className="mt-2 font-display text-[1.8rem] leading-tight md:text-4xl">Want a parcel like this?</h2>
            <p className="mx-auto mt-3 max-w-md text-cream/85">Tell us what you like and we will pack it up for you.</p>
            <WhatsAppButton href={generalLink()} label="Message us on WhatsApp" variant="line" className="mt-7 !border-cream !text-cream hover:!bg-cream hover:!text-brown" />
          </div>
        </div>
      </section>
    </div>
  );
}
