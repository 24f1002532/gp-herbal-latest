import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/config";
import { publishedCategories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-olive text-cream mt-24 scallop-top">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-4 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" aria-label={`${BRAND.name}, home`} className="inline-block rounded-[2rem] bg-cream p-4 shadow-[0_6px_0_rgba(0,0,0,.15)]">
            <Image src="/images/logo.webp" alt={BRAND.name} width={900} height={570} className="h-24 w-auto md:h-28" />
          </Link>
        </div>
        <nav aria-label="Product categories"><p className="font-semibold mb-3">Shop by type</p>
          <ul className="space-y-2">{publishedCategories().map((c) => <li key={c.slug}><Link className="hover:underline" href={`/products/${c.slug}/`}>{c.name}</Link></li>)}</ul></nav>
        <nav aria-label="Site"><p className="font-semibold mb-3">Explore</p>
          <ul className="space-y-2">
            <li><Link className="hover:underline" href="/our-story/">Our Story</Link></li>
            <li><Link className="hover:underline" href="/products/">All Products</Link></li>
            <li><Link className="hover:underline" href="/gallery/">Gallery</Link></li>
            <li><Link className="hover:underline" href="/ingredients-and-care/">Ingredients &amp; Care</Link></li>
            <li><Link className="hover:underline" href="/faq/">FAQ</Link></li>
            <li><Link className="hover:underline" href="/contact/">Contact</Link></li>
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
