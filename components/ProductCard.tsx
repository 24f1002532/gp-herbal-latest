import Link from "next/link";
import { formatPrice, type Product } from "@/lib/data";
import PriceTag from "./PriceTag";
import ProductVisual from "./ProductVisual";

/** A product on its shelf, with its name and price underneath. No boxes around the text. */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group relative">
      <Link href={`/products/${p.slug}/`} aria-label={`${p.name}, now ${formatPrice(p.price)}, MRP ${formatPrice(p.mrp)}`}
        className="block overflow-hidden rounded-t-[999px] rounded-b-[1.25rem] sm:rounded-b-[1.5rem] border-2 border-beige paper-edge transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:rotate-[.6deg]">
        <ProductVisual p={p} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px" />
      </Link>
      <div className="mt-3 sm:mt-4 px-0.5 sm:px-1">
        <h3 className="font-display text-[.98rem] sm:text-xl leading-snug text-brown"><Link href={`/products/${p.slug}/`} className="group-hover:text-leaf">{p.name}</Link></h3>
        <PriceTag p={p} className="mt-1" />
        <p className="mt-1.5 sm:mt-2 text-[.8rem] sm:text-[.95rem] leading-snug text-ink/75 line-clamp-2 sm:line-clamp-none">{p.description}</p>
      </div>
    </article>
  );
}
