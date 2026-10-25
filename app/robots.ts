import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/config";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, ...(BRAND.siteUrl ? { sitemap: `${BRAND.siteUrl}/sitemap.xml` } : {}) };
}
