import { Leaf, Sprout, Flower2, Droplet, Wheat, Sparkles } from "lucide-react";
import type { Ingredient } from "@/lib/data";

const icons = [Leaf, Sprout, Flower2, Droplet, Wheat, Sparkles];
const chips = [
  "bg-leaf text-cream", "bg-coral text-white", "bg-sun text-ink", "bg-brick text-cream", "bg-olive text-cream", "bg-blush text-ink",
];

/** "What's inside": each ingredient gets its own little specimen tag, with what it does for you. */
export default function Ingredients({ items }: { items: Ingredient[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-3">
      {items.map((it, i) => {
        const Icon = icons[i % icons.length];
        return (
          <li key={it.name} className="flex items-center gap-3 rounded-[1.25rem] bg-white/80 border-2 border-beige px-3 py-3">
            <span className={`shrink-0 grid place-items-center w-12 h-12 rounded-full ${chips[i % chips.length]} ${i % 2 ? "rotate-6" : "-rotate-6"}`}><Icon size={22} aria-hidden /></span>
            <span className="leading-snug">
              <span className="block font-display text-lg text-brown">{it.name}</span>
              <span className="block text-sm text-ink/75">{it.role}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
