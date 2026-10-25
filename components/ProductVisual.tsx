import Image from "next/image";
import type { Product } from "@/lib/data";
import ProductArt from "./ProductArt";

/** Every product gets the same 5:6 frame (the card adds the arched window).
 *  Most are hand-drawn scenes; products with a product photo (5:6) show it instead. */
export default function ProductVisual({ p, sizes = "(max-width: 768px) 90vw, 420px", priority = false }:
  { p: Product; sizes?: string; priority?: boolean }) {
  if (p.kind === "photo" && p.image) {
    return (
      <div className="relative aspect-[5/6] w-full overflow-hidden" style={{ backgroundColor: p.tint }}>
        <Image src={p.image} alt={p.name} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return <ProductArt slug={p.slug} label={p.name} />;
}
