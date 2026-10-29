import { formatPrice, type Product } from "@/lib/data";

/** The price in bold, the old MRP quietly struck through. On the product page a plain "You save" line sits underneath. */
export default function PriceTag({ p, size = "md", className = "" }: { p: Pick<Product, "mrp" | "price">; size?: "md" | "lg"; className?: string }) {
  const lg = size === "lg";
  const saved = p.mrp - p.price;
  return (
    <div className={className}>
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className={`font-display ${lg ? "text-3xl sm:text-4xl text-brick" : "text-lg sm:text-xl text-leaf"}`}>
          <span className="sr-only">Now </span>{formatPrice(p.price)}
        </span>
        <span className={`${lg ? "text-lg sm:text-xl" : "text-sm sm:text-base"} text-ink/50 line-through decoration-ink/40`}>
          <span className="sr-only">MRP </span>{formatPrice(p.mrp)}
        </span>
      </p>
      {lg && saved > 0 && <p className="mt-1 text-[.95rem] text-leaf">You save {formatPrice(saved)}</p>}
    </div>
  );
}
