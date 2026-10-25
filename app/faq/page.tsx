import type { Metadata } from "next";
import { generalLink } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
export const metadata: Metadata = { title: "FAQ", description: "Frequently asked questions about GP Herbal Homemade Products." };
const faqs = [
  ["How do I order?", "Open any product page and tap Order on WhatsApp. A message with the product name will be ready; you just press Send."],
  ["Where are your products made?", "At home in Abohar, Punjab, by hand and in small batches."],
  ["What is in each product?", "Every product page lists its ingredients, what each one does, the benefits and how to use it. The Ingredients & Care page gathers them all in one place."],
  ["Is it safe for sensitive skin?", "Herbal products can still bother some skins. Please do a small patch test first, and tell us about any allergy when you message so we can help you choose."],
  ["Which products do you make?", "Handmade soaps, hair care, face washes, a facial kit, a facial bleach, eyebrow oil, rose water and a painless wax powder."],
];
export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-5xl text-brown">Questions, answered</h1>
      <div className="mt-8 space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="border-2 border-beige rounded-2xl p-4 open:bg-blush/20">
            <summary className="cursor-pointer font-semibold text-brown">{q}</summary>
            <p className="mt-2">{a}</p>
          </details>
        ))}
      </div>
      <WhatsAppButton href={generalLink()} label="Still curious? Ask us" variant="text" className="mt-8" />
    </div>
  );
}
