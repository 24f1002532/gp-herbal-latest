import type { Metadata } from "next";
import { Fraunces, DM_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND } from "@/lib/config";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const pinyon = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-pinyon", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });

export const metadata: Metadata = {
  ...(BRAND.siteUrl ? { metadataBase: new URL(BRAND.siteUrl) } : {}),
  title: { default: `${BRAND.name} | Herbal personal care`, template: `%s | ${BRAND.name}` },
  description: "Handmade herbal soaps, shampoos, face wash, facial kits, bleach and more, made at home in Abohar, Punjab by GP Herbal Homemade Products.",
  openGraph: { title: BRAND.name, description: "Pure herbs, gentle hands. Handmade herbal personal care from Abohar, Punjab.", type: "website", siteName: BRAND.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dm.variable} ${pinyon.variable}`}>
      <body><Header /><main id="main">{children}</main><Footer /></body>
    </html>
  );
}
