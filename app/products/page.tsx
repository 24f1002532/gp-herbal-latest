import type { Metadata } from "next";
import Link from "next/link";
import { publishedCategories, productsIn } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = { title: "All Products", description: "Browse GP Herbal Homemade Products by category: soaps, hair care, face washes, face packs, facial kits, oils, creams, sun care and more." };

export default function Catalogue() {
  const cats = publishedCategories();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <h1 className="font-display text-4xl sm:text-5xl text-brown">All products</h1>
      <nav aria-label="Jump to category" className="chip-strip sticky top-[4.4rem] md:static z-30 bg-cream/95 backdrop-blur md:bg-transparent mt-5 md:mt-6 pt-4 md:pt-0">
        {cats.map((c) => <a key={c.slug} href={`#${c.slug}`} className="px-4 py-2 whitespace-nowrap rounded-full border-2 border-leaf text-leaf text-sm sm:text-base font-medium hover:bg-leaf hover:text-white">{c.name}</a>)}
      </nav>
      {cats.map((c) => (
        <section key={c.slug} id={c.slug} className="mt-12 md:mt-16 scroll-mt-36 md:scroll-mt-24">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="font-display text-2xl sm:text-3xl text-brown">{c.name}</h2>
            <Link href={`/products/${c.slug}/`} className="text-leaf font-semibold underline underline-offset-4">View {c.name.toLowerCase()}</Link>
          </div>
          <p className="mt-2 max-w-xl text-[.95rem] sm:text-base">{c.intro}</p>
          <ul className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-9 sm:gap-x-8 sm:gap-y-12">
            {productsIn(c.slug).map((p) => <li key={p.slug}><ProductCard p={p} /></li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}
