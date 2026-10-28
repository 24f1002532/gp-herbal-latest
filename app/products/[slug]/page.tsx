import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { publishedCategories, products, getCategory, getProduct, productsIn } from "@/lib/data";
import { productLink, categoryLink } from "@/lib/whatsapp";
import Art from "@/components/Art";
import ProductCard from "@/components/ProductCard";
import ProductVisual from "@/components/ProductVisual";
import BestSellerSeal from "@/components/BestSellerSeal";
import PriceTag from "@/components/PriceTag";
import WhatsAppButton from "@/components/WhatsAppButton";

export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...publishedCategories().map((c) => ({ slug: c.slug })), ...products.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug); if (c) return { title: c.name, description: c.intro, openGraph: { title: c.name, description: c.intro } };
  const p = getProduct(slug); if (p) return { title: p.name, description: p.description, openGraph: { title: p.name, description: p.description } };
  return {};
}

/** Section heading: a title with a little hand-drawn squiggle under it. */
const H = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <div>
    <h2 id={id} className="font-display text-2xl md:text-[1.75rem] text-brown">{children}</h2>
    <svg viewBox="0 0 90 8" className="mt-1.5 h-2 w-24 text-blush" aria-hidden><path d="M2 4q7-6 14 0t14 0t14 0t14 0t14 0t14 0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
  </div>
);

/** A small hand-drawn leaf used as a bullet. */
const LeafBullet = () => (
  <svg viewBox="0 0 24 24" className="mt-[.45rem] h-4 w-4 shrink-0 text-leaf" aria-hidden>
    <path d="M3 17C3 8 10 3 21 3C21 14 15 21 6 20Z" fill="currentColor" /><path d="M4 20C8 14 12 10 17 7" stroke="#F9F4EB" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  </svg>
);

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const c = getCategory(slug);
  if (c) {
    const items = productsIn(c.slug);
    return (
      <div>
        <section className="bg-blush/30">
          <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <Link href="/products/" className="inline-flex items-center text-leaf font-semibold"><ChevronLeft size={18} aria-hidden />All products</Link>
              <h1 className="font-display text-5xl md:text-6xl text-brown mt-2">{c.name}</h1>
              <p className="mt-4 max-w-xl text-lg">{c.intro}</p>
            </div>
            <div className="wavy aspect-square max-w-60"><Art alt={c.name} tone={c.tone} slug={c.slug} /></div>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {items.map((p) => <li key={p.slug}><ProductCard p={p} /></li>)}
          </ul>
          <div className="mt-12"><WhatsAppButton href={categoryLink(c)} label={`Ask us about ${c.enquiryNoun}`} variant="text" /></div>
        </div>
      </div>
    );
  }

  const p = getProduct(slug);
  if (!p) notFound();
  const cat = getCategory(p.categorySlug)!;
  const related = productsIn(p.categorySlug).filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href={`/products/${cat.slug}/`} className="inline-flex items-center text-leaf font-semibold"><ChevronLeft size={18} aria-hidden />{cat.name}</Link>

      <div className="mt-6 grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* the product, on its shelf */}
        <div className="md:col-span-5 md:sticky md:top-24">
          <div className="relative mx-auto max-w-md">
          <div className="overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-2 border-beige paper-edge">
            <ProductVisual p={p} priority sizes="(max-width: 768px) 92vw, 460px" />
          </div>
          {p.bestSeller && <BestSellerSeal size="lg" className="absolute -right-3 top-[12%] z-10 md:-right-6" />}
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="font-script text-4xl leading-none text-leaf">{cat.name}</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl text-brown leading-[1.08]">{p.name}</h1>
          <div className="mt-4">
            <PriceTag p={p} size="lg" />
            <p className="mt-1 text-sm text-ink/60">handmade in Abohar</p>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed">{p.story}</p>
          {p.goodFor && <p className="mt-4 max-w-xl text-ink/80"><span className="font-semibold text-leaf">Good for: </span>{p.goodFor}</p>}
          <WhatsAppButton href={productLink(p)} label="Order on WhatsApp" className="mt-7" />

          <div className="sprig-divider my-12" aria-hidden />

          <section aria-labelledby="ing-h">
            <H id="ing-h">What&rsquo;s inside</H>
            <dl className="mt-5 max-w-2xl">
              {p.ingredients.map((it) => (
                <div key={it.name} className="grid gap-x-6 gap-y-0.5 border-b border-dashed border-brown/25 py-3 sm:grid-cols-[12rem_1fr]">
                  <dt className="font-display text-lg text-brown">{it.name}</dt>
                  <dd className="text-ink/80">{it.role}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12" aria-labelledby="ben-h">
            <H id="ben-h">What it does for you</H>
            <ul className="mt-5 max-w-2xl space-y-2.5">
              {p.benefits.map((b) => <li key={b} className="flex items-start gap-3"><LeafBullet /><span>{b}</span></li>)}
            </ul>
          </section>

          {p.usage?.length ? (
            <section className="mt-12" aria-labelledby="use-h">
              <H id="use-h">How to use it</H>
              <ol className="mt-5 max-w-2xl">
                {p.usage.map((u, i) => (
                  <li key={u} className="relative flex gap-5 pb-6 last:pb-0">
                    {i < p.usage!.length - 1 && <span aria-hidden className="absolute left-[1.05rem] top-10 bottom-1 border-l-2 border-dashed border-terra/50" />}
                    <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream font-display text-xl text-brick ring-2 ring-terra/60">{i + 1}</span>
                    <span className="pt-1">{u}</span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {p.caution && (
            <p className="mt-12 max-w-2xl border-l-4 border-sun pl-5 font-display italic text-lg leading-snug text-brown">
              <span className="not-italic font-semibold">A little note: </span>{p.caution}
            </p>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24" aria-labelledby="more-h">
          <H id="more-h">More from {cat.name.toLowerCase()}</H>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">{related.map((r) => <li key={r.slug}><ProductCard p={r} /></li>)}</ul>
        </section>
      )}
    </div>
  );
}
