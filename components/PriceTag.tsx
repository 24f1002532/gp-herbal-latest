import { discountPercent, formatPrice, type Product } from "@/lib/data";

/** MRP struck through, the discounted price in bold, and a little "50% OFF" pill. */
export default function PriceTag({ p, size = "md", className = "" }: { p: Pick<Product, "mrp" | "price">; size?: "md" | "lg"; className?: string }) {
  const lg = size === "lg";
  return (
    <p className={`flex flex-wrap items-baseline gap-x-2.5 gap-y-1 ${className}`}>
      <span className={`font-display ${lg ? "text-4xl text-brick" : "text-xl text-leaf"}`}>
        <span className="sr-only">Now </span>{formatPrice(p.price)}
      </span>
      <span className={`${lg ? "text-xl" : "text-base"} text-ink/55 line-through decoration-brick/70 decoration-2`}>
        <span className="sr-only">MRP </span>{formatPrice(p.mrp)}
      </span>
      <span className={`rounded-full bg-sun/25 font-semibold uppercase tracking-wide text-brown ring-1 ring-sun/60 ${lg ? "px-3 py-1 text-sm" : "px-2 py-0.5 text-[.7rem]"}`}>
        {discountPercent}% off
      </span>
    </p>
  );
}
