# GP Herbal Homemade Products

Static Next.js 15 + TypeScript + Tailwind v4 catalogue. WhatsApp is the only order/enquiry channel.

    npm install
    npm run dev          # local dev
    npm run typecheck    # TypeScript
    npm run build        # static export to ./out

## Adding or editing products
Everything lives in `lib/data.ts`.
- Illustrated products: add a `P({...})` entry, then draw its little scene in `components/ProductArt.tsx` (keyed by the same slug) and give it a backdrop colour in `artTint`. Each one has a `description` (card teaser) and a `story` (product page).
- Price: every product is `PRICE` (Rs. 300) in `lib/data.ts`. Change that one number, or give a product its own `price: 450`.
- Shampoo bottles: add a `shampoo(...)` entry. Bottle cut-outs (real photos in `public/images/products/`) are shown on a tinted arch and wooden shelf automatically.
- Each product has `ingredients` (name + what it does), `benefits`, `usage`, optional `goodFor` and `caution`.
- New categories: add to `categories` (and an illustration key in `components/Illustrations.tsx`).

The "Ingredients & Care" page is generated from the product data, so it always matches.
WhatsApp number: `lib/config.ts`. Set NEXT_PUBLIC_SITE_URL once the domain is known.

## Gallery
Photos live in `public/images/gallery/` and are listed in `lib/gallery.ts` (one line each: file, size, caption, tape colour).
A print with a `video` field plays a clip (see `public/videos/`). The gallery page is `/gallery`, and four prints also appear on the home page.
