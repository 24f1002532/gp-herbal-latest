import type { Metadata } from "next";
import Link from "next/link";
import { publishedCategories, productsIn } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = { title: "All Products", description: "Browse GP Herbal Homemade Products by category: soaps, hair care, face washes, face packs, facial kits, oils, creams, sun care and more." };

export default function Catalogue() {
  const cats = publishedCategories();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-5xl text-brown">All products</h1>
      <nav aria-label="Jump to category" className="mt-6 flex flex-wrap gap-2">
        {cats.map((c) => <a key={c.slug} href={`#${c.slug}`} className="px-4 py-2 rounded-full border-2 border-leaf text-leaf font-medium hover:bg-leaf hover:text-white">{c.name}</a>)}
      </nav>
      {cats.map((c) => (
        <section key={c.slug} id={c.slug} className="mt-16 scroll-mt-24">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="font-display text-3xl text-brown">{c.name}</h2>
            <Link href={`/products/${c.slug}/`} className="text-leaf font-semibold underline underline-offset-4">View {c.name.toLowerCase()}</Link>
          </div>
          <p className="mt-2 max-w-xl">{c.intro}</p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {productsIn(c.slug).map((p) => <li key={p.slug}><ProductCard p={p} /></li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}
