import Link from "next/link";
import Image from "next/image";
import { BRAND, CUSTOMER_CARE } from "@/lib/config";
import { Phone, Mail } from "lucide-react";
import { publishedCategories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-olive text-cream mt-16 md:mt-24 scallop-top">
      <div className="mx-auto max-w-6xl px-5 md:px-4 pb-8 md:pb-10 pt-4 grid grid-cols-2 gap-x-6 gap-y-8 md:gap-10 md:grid-cols-4">
        <div className="col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
          <Link href="/" aria-label={`${BRAND.name}, home`} className="inline-block rounded-[2rem] bg-cream p-4 shadow-[0_6px_0_rgba(0,0,0,.15)]">
            <Image src="/images/logo.webp" alt={BRAND.name} width={900} height={570} className="h-20 w-auto md:h-28" />
          </Link>
          <div className="mt-5 space-y-2 text-sm">
            <p className="font-semibold">Customer care · {CUSTOMER_CARE.name}</p>
            <a href={CUSTOMER_CARE.phoneHref} className="flex items-center gap-2 hover:text-blush max-md:justify-center"><Phone size={15} aria-hidden /> {CUSTOMER_CARE.phoneDisplay}</a>
            <a href={`mailto:${CUSTOMER_CARE.email}`} className="flex items-center gap-2 hover:text-blush break-all max-md:justify-center"><Mail size={15} aria-hidden /> {CUSTOMER_CARE.email}</a>
          </div>
        </div>
        <nav aria-label="Product categories"><p className="font-semibold mb-3">Shop by type</p>
          <ul className="space-y-2.5">{publishedCategories().map((c) => <li key={c.slug}><Link className="footlink" href={`/products/${c.slug}/`}>{c.name}</Link></li>)}</ul></nav>
        <nav aria-label="Site"><p className="font-semibold mb-3">Explore</p>
          <ul className="space-y-2.5">
            <li><Link className="footlink" href="/our-story/">Our Story</Link></li>
            <li><Link className="footlink" href="/products/">All Products</Link></li>
            <li><Link className="footlink" href="/gallery/">Gallery</Link></li>
            <li><Link className="footlink" href="/ingredients-and-care/">Ingredients &amp; Care</Link></li>
            <li><Link className="footlink" href="/faq/">FAQ</Link></li>
            <li><Link className="footlink" href="/contact/">Contact</Link></li>
          </ul></nav>
      </div>
      <div className="text-center pb-8 px-4">
        <p className="font-script text-3xl md:text-4xl text-blush leading-none">
          created by{" "}
          <a href="/plum-designs.html" target="_blank" rel="noopener" className="text-cream underline decoration-blush/60 decoration-2 underline-offset-[6px] hover:text-blush transition-colors">Plum Designs</a>
        </p>
        <p className="mt-4 text-sm text-cream/70">© {new Date().getFullYear()} {BRAND.name}</p>
      </div>
    </footer>
  );
}
