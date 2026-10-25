import Link from "next/link";
import { formatPrice, type Product } from "@/lib/data";
import ProductVisual from "./ProductVisual";
import BestSellerSeal from "./BestSellerSeal";

/** A product on its shelf, with its name and price underneath. No boxes around the text. */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group relative">
      <Link href={`/products/${p.slug}/`} aria-label={`${p.name}, ${formatPrice(p.price)}`}
        className="block overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border-2 border-beige paper-edge transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:rotate-[.6deg]">
        <ProductVisual p={p} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px" />
      </Link>
      {p.bestSeller && <BestSellerSeal className="absolute -right-2 top-[14%] z-10 sm:-right-3" />}
      <div className="mt-4 px-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-snug text-brown"><Link href={`/products/${p.slug}/`} className="group-hover:text-leaf">{p.name}</Link></h3>
          <p className="shrink-0 font-display text-lg text-leaf">{formatPrice(p.price)}</p>
        </div>
        <p className="mt-1 text-[.95rem] leading-snug text-ink/75">{p.description}</p>
      </div>
    </article>
  );
}
