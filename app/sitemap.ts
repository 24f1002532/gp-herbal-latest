import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/config";
import { publishedCategories, products } from "@/lib/data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.siteUrl;
  const paths = ["", "/our-story", "/gallery", "/products", "/ingredients-and-care", "/contact", "/faq",
    ...publishedCategories().map((c) => `/products/${c.slug}`), ...products.map((p) => `/products/${p.slug}`)];
  return paths.map((p) => ({ url: `${base}${p}/` }));
}
