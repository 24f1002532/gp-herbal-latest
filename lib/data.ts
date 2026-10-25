// Central catalogue. Add a product to `products` and it appears automatically on its category page,
// the catalogue, the sitemap and gets its own page with ingredients, benefits and how-to-use.

export type Category = {
  slug: string;
  name: string;
  intro: string;
  enquiryNoun: string; // used in WhatsApp message: "your <noun>"
  order: number;
  published: boolean;
  tone: "coral" | "olive" | "beige" | "pink";
};

export type Ingredient = { name: string; role: string };

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  description: string;       // one-line teaser used on cards
  story: string;             // a few warm sentences on the product page
  price: number;             // in rupees
  kind: "art" | "photo";     // art = hand-drawn scene (components/ProductArt.tsx, keyed by slug), photo = product photo (5:6) in `image`
  image?: string;            // photo products only: /images/products/<slug>.webp
  bestSeller?: boolean;      // shows the gold "Best Seller" seal on the card and product page
  tint?: string;             // backdrop colour for bottle shelves
  ingredients: Ingredient[];
  benefits: string[];
  usage?: string[];
  goodFor?: string;          // who / which skin or hair type
  caution?: string;
};

export const categories: Category[] = [
  { slug: "soaps", name: "Handmade Soaps", enquiryNoun: "soaps", order: 1, published: true, tone: "olive",
    intro: "Small-batch herbal soaps poured by hand into butterfly, sunflower and oval moulds. Neem, rice, avocado, fitkari and more." },
  { slug: "face-washes", name: "Face Washes", enquiryNoun: "face washes", order: 3, published: true, tone: "coral",
    intro: "A gentle herbal face wash for everyday cleansing, built around mulethi." },
  { slug: "facial-kits", name: "Facial Kits", enquiryNoun: "facial kits", order: 5, published: true, tone: "pink",
    intro: "A five-jar facial kit that takes you from cleanser to mask, step by step, in your own bathroom." },
  { slug: "creams", name: "Creams & Bleach", enquiryNoun: "creams", order: 6, published: true, tone: "pink",
    intro: "A homemade facial bleach set, made in small batches in our home kitchen." },
  { slug: "beauty-essentials", name: "Serums, Oils & More", enquiryNoun: "beauty essentials", order: 7, published: true, tone: "coral",
    intro: "Eyebrow oil, rose water, neem toner, SPF 50 sunscreen, an under-eye kit and a painless wax powder. The small things that finish a routine." },
  { slug: "hair-care", name: "Hair Care", enquiryNoun: "hair care products", order: 2, published: true, tone: "olive",
    intro: "Seven herbal shampoos, each named for the ingredient it is built around." },
];

export const PRICE = 300; // every product is Rs. 300 for now. Give a product its own `price` to change it.
export const formatPrice = (n: number) => `Rs. ${n.toLocaleString("en-IN")}`;

const P = (p: Omit<Product, "kind" | "price" | "story"> & { story: string; price?: number; kind?: Product["kind"] }): Product => ({
  kind: "art", price: PRICE, ...p,
});

const shampoo = (slug: string, name: string, tint: string, description: string, story: string,
  ingredients: Ingredient[], benefits: string[], bestSeller = false): Product => ({
  slug, name, bestSeller, categorySlug: "hair-care", kind: "photo", tint, description, story, price: PRICE,
  image: `/images/products/${slug}.webp`, ingredients, benefits,
  usage: ["Wet your hair and scalp well.", "Pump a small amount into your palm and massage into the scalp.", "Work the lather down the lengths.", "Rinse thoroughly with water."],
  goodFor: "All hair types",
});

export const products: Product[] = [
  /* ------------------------------ SOAPS ------------------------------ */
  P({ slug: "neem-soap", name: "Antiseptic Neem Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/neem-soap.webp",
    description: "Forest-green butterflies for days when you want to feel clear and fresh.",
    story: "Neem has grown in Punjabi courtyards for longer than anyone can remember, and this bar is our thank-you to it. We pour it by hand into butterfly, sunflower and oval moulds, and it lathers up cool, green and herby. It is the one to reach for after a long, dusty, sticky day.",
    ingredients: [
      { name: "Neem extract", role: "Natural antiseptic, antibacterial and purifying" },
      { name: "Glycerine soap base", role: "Gentle, moisturising cleansing base" },
      { name: "Neem leaf", role: "Gives the bar its deep green colour" },
    ],
    benefits: ["Helps fight acne and pimples", "Helps reduce rashes and skin irritation", "Deep cleanses and detoxifies", "Soothes itching and inflammation", "Supports body-odour control and summer care"],
    usage: ["Wet skin with water.", "Rub the soap gently on skin and lather.", "Rinse thoroughly and pat dry."],
    goodFor: "Oily, dry, sensitive and acne-prone skin. Gentle enough for the whole family." }),
  P({ slug: "rice-soap", name: "Rice Soap", categorySlug: "soaps", bestSeller: true, kind: "photo", image: "/images/products/rice-soap.webp",
    description: "A cream-white bar that feels like a spoonful of rice milk on your skin.",
    story: "Rice is the quiet hero of every Indian kitchen, so we gave it a bar of its own. It is soft, creamy and gentle, the kind of soap you can use every single day without thinking twice. We make it in small butterfly-shaped batches and let it set slowly.",
    ingredients: [
      { name: "Rice extract", role: "Brightening, nourishing and gently cleansing" },
      { name: "Glycerine soap base", role: "Gentle, moisturising cleansing base" },
    ],
    benefits: ["Brightens and evens skin tone", "Cleanses gently without dryness", "Soothes and moisturises sensitive skin", "Helps reduce tan and dark spots", "Leaves skin soft, smooth and glowing"],
    usage: ["Wet skin with water.", "Rub the soap gently on skin and lather.", "Rinse thoroughly and pat dry."],
    goodFor: "Normal, dry, sensitive, oily and combination skin. Safe for daily use." }),
  P({ slug: "avocado-soap", name: "Avocado Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/avocado-soap.webp",
    description: "Soft green butterflies, rich and creamy, like a face mask you can wash with.",
    story: "This is our softest, most pampering bar. Avocado goes in for richness, a pinch of herbal powder gives it its tiny green flecks, and the glycerine base keeps it kind to your skin. It is a good one for tired, thirsty skin.",
    ingredients: [
      { name: "Avocado", role: "Rich, nourishing and moisturising" },
      { name: "Herbal powder", role: "Gives the bar its flecks and a mild herbal scrub" },
      { name: "Glycerine soap base", role: "Gentle, moisturising cleansing base" },
    ],
    benefits: ["Moisturises and nourishes skin", "Soothes irritated skin", "Enhances skin elasticity"],
    usage: ["Wet skin with water.", "Rub the soap gently on skin and lather.", "Rinse thoroughly and pat dry."],
    goodFor: "Dry and tired skin" }),
  P({ slug: "pigmentation-soap", name: "Pigmentation Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/pigmentation-soap.webp",
    description: "A deep-brown sunflower bar with turmeric, aloe and a squeeze of lemon.",
    story: "Turmeric has been part of Indian skin care for generations, so it was an easy choice for this bar. Aloe cools it down and lemon keeps it fresh. Pressed into a little brown sunflower, it asks for patience: use it daily and give it time.",
    ingredients: [
      { name: "Turmeric (haldi)", role: "Traditional brightening herb" },
      { name: "Aloe vera", role: "Cooling and soothing" },
      { name: "Lemon", role: "Helps brighten and freshen" },
      { name: "Glycerine soap base", role: "Gentle, moisturising cleansing base" },
    ],
    benefits: ["Helps fade dark spots", "Helps even out skin tone", "Helps reduce pigmentation"],
    usage: ["Wet skin with water.", "Rub the soap gently over the area and lather.", "Rinse thoroughly and pat dry. Use daily for steady results."],
    goodFor: "Uneven skin tone and dark spots" }),
  P({ slug: "fitkari-soap", name: "Fitkari (Alum) Soap", categorySlug: "soaps", bestSeller: true, kind: "photo", image: "/images/products/fitkari-soap.webp",
    description: "Oval bars with fitkari, the old-fashioned way to feel fresh and clean.",
    story: "Fitkari (alum) was in every grandmother's bathroom for a reason. We set it into glycerine with a few herbal powders, so you get that crisp, tight, just-washed feeling without the harshness. Great for the face, great for the body, and especially good in summer.",
    ingredients: [
      { name: "Fitkari (alum)", role: "Natural astringent that tightens pores" },
      { name: "Herbal powders", role: "Soothe skin and give the bar its flecks" },
      { name: "Glycerine soap base", role: "Gentle, moisturising cleansing base" },
    ],
    benefits: ["Tightens pores", "Helps control excess oil and sweat", "Effective odour control", "Helps with acne and pimples", "Soothes skin itching and irritation", "Improves skin texture"],
    usage: ["Wet face or body with water.", "Rub the soap gently on skin and lather.", "Rinse thoroughly and pat dry."],
    goodFor: "Face and body cleansing, suitable for all skin types" }),
  P({ slug: "manicure-pedicure-scrub-soap", name: "Manicure Pedicure Scrub Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/manicure-pedicure-scrub-soap.webp",
    description: "A scalloped scrub bar that turns bath time into a little spa visit for hands and feet.",
    story: "Hands and feet do the most work and get the least care. This bar is made with a natural herbal scrub and aloe, so one scrub in the bath leaves elbows, knees, hands and heels feeling softer and looking fresher. Keep it near the sink and use it often.",
    ingredients: [
      { name: "Natural herbal scrub", role: "Exfoliates dead skin and helps lift tan" },
      { name: "Aloe vera", role: "Soothes and softens" },
      { name: "Glycerine soap base", role: "Gentle, moisturising cleansing base" },
    ],
    benefits: ["Removes dead skin", "Deep cleansing", "Smooth and soft hands and feet", "Helps with tan removal"],
    usage: ["Wet hands or feet.", "Scrub gently with the bar in circular motions.", "Rinse well and moisturise."],
    goodFor: "Hands, feet, elbows and knees" }),
  P({ slug: "moroccan-whitening-soap", name: "Moroccan Whitening Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/moroccan-whitening-soap.webp",
    description: "A bright blue butterfly bar that brings a little Marrakech into your bathroom.",
    story: "You will spot this one on the shelf straight away, with its bright blue wings. It is a gentle everyday cleanser for the neck, elbows and everywhere else that tends to look a little dull, and it is safe for kids too.",
    ingredients: [
      { name: "Skin-brightening herbal extracts", role: "Help brighten and even out skin tone" },
      { name: "Moisturising botanicals", role: "Keep skin soft and nourished" },
      { name: "Glycerine soap base", role: "Gentle, moisturising cleansing base" },
    ],
    benefits: ["Deep cleansing", "Skin brightening", "Helps reduce blackness and dark spots on neck and elbows", "Moisturises and nourishes"],
    usage: ["Wet skin with water.", "Gently rub the soap on skin.", "Rinse thoroughly and pat dry."],
    goodFor: "All skin types. Kids and adults." }),

  /* ------------------------------ FACE WASH ------------------------------ */
  P({ slug: "mulethi-majesta-face-wash", name: "Mulethi Majesta Face Wash", categorySlug: "face-washes", kind: "photo", image: "/images/products/mulethi-majesta-face-wash.webp",
    description: "A copper-red face wash built around mulethi, the root our grandmothers swore by.",
    story: "Mulethi (liquorice root) has been a quiet favourite in home remedies for ages. We pair it with gentle herbal extracts in a soft-lathering wash that cleans without that tight, squeaky feeling. It is the one that goes next to your sink for morning and night.",
    ingredients: [
      { name: "Mulethi (liquorice root)", role: "Brightens and calms the skin" },
      { name: "Herbal extracts", role: "Cleanse without stripping" },
      { name: "Gentle cleansing base", role: "Lathers softly for daily use" },
    ],
    benefits: ["Brightens and evens skin tone", "Soothes and calms irritated skin", "Helps fight acne and reduce blemishes", "Deep cleanses without drying", "Leaves skin fresh, soft and glowing"],
    usage: ["Wet your face.", "Take a small amount.", "Massage gently in circular motion.", "Rinse with water and pat dry."],
    goodFor: "All skin types, daily use" }),

  /* ---------------------------- FACIAL KITS ---------------------------- */
  P({ slug: "vitamin-c-facial-kit", name: "Vitamin C Facial Kit", categorySlug: "facial-kits", bestSeller: true, kind: "photo", image: "/images/products/vitamin-c-facial-kit.webp",
    description: "Five jars in sunny orange tones, a whole salon facial for your own bathroom.",
    story: "Cleanser, scrub, cream, gel and mask: the five steps of a proper facial, lined up in order so you never have to guess. The kit is built around vitamin C from orange and is all about leaving your skin looking fresh and bright. Put on your favourite song and take your time.",
    ingredients: [
      { name: "Vitamin C (orange)", role: "Brightening, antioxidant protection" },
      { name: "Natural extracts", role: "Nourish and hydrate through all five steps" },
    ],
    benefits: ["Brightens skin tone", "Hydrates and nourishes", "Reduces dullness and dark spots", "Improves skin texture", "Gives a healthy, radiant glow"],
    usage: ["Step 1, Cleanser: deep cleanses and removes impurities.", "Step 2, Scrub: exfoliates dead skin and unclogs pores.", "Step 3, Cream: moisturises and brightens.", "Step 4, Gel: hydrates and soothes.", "Step 5, Mask: nourishes and revitalises."],
    goodFor: "All skin types" }),

  /* --------------------------- CREAMS & BLEACH --------------------------- */
  P({ slug: "organic-bleach", name: "Homemade Organic Bleach", categorySlug: "creams", bestSeller: true, kind: "photo", image: "/images/products/organic-bleach.webp",
    description: "A homemade cream-and-powder set that gets your skin ready for its glow.",
    story: "Mix the cream with the little blue sachet of activator and you have a homemade bleach to use before a facial. It lifts tan and leaves skin feeling clean and bright. It is made for monthly use, so it is a treat rather than an everyday product.",
    ingredients: [
      { name: "Bleach cream", role: "The creamy base, in the white tub" },
      { name: "Activator powder", role: "The blue sachet, mixed in before applying" },
    ],
    benefits: ["Lightens skin tone", "Removes tan, dirt and impurities", "Gives an instant glow and brightness", "Soft, smooth, radiant skin"],
    usage: ["Use before a facial for deep cleansing.", "Helps remove dead skin cells.", "Prepares skin for better absorption of facial products.", "Use monthly for best results."],
    goodFor: "Use once a month",
    caution: "Do a patch test on a small area first and keep away from the eyes." }),

  /* ------------------------ SERUMS, OILS & MORE ------------------------ */
  P({ slug: "eyebrow-thicker-oil", name: "Herbal Eyebrow Thicker Oil", categorySlug: "beauty-essentials", kind: "photo", image: "/images/products/eyebrow-thicker-oil.webp",
    description: "A roll-on oil blend that gives your brows a little daily love.",
    story: "Castor, coconut and almond oil, vitamin E and amla extract roll on in one smooth line. Think of it as a bedtime ritual for your brows: roll, massage, sleep. Consistency matters most here, so make it a habit. It is for men and women both.",
    ingredients: [
      { name: "Castor oil", role: "Classic conditioning oil for brows and lashes" },
      { name: "Coconut oil", role: "Nourishes and softens" },
      { name: "Almond oil", role: "Light, rich in vitamin E" },
      { name: "Vitamin E", role: "Conditions and protects" },
      { name: "Amla extract", role: "Strengthens hair" },
    ],
    benefits: ["Promotes eyebrow hair growth", "Makes eyebrows look thicker and fuller", "Nourishes and strengthens hair follicles", "Reduces hair fall and breakage"],
    usage: ["Roll a thin line over clean, dry brows.", "Massage in gently.", "Use regularly, ideally at night."],
    goodFor: "Men and women" }),
  P({ slug: "organic-rose-water", name: "Organic Rose Water", categorySlug: "beauty-essentials", kind: "photo", image: "/images/products/organic-rose-water.webp",
    description: "Pure rose water in a fine mist, ready for a pick-me-up whenever you need one.",
    story: "Nothing fancy, just rose water in a spray bottle that you can use all day long. Mist it as a toner after cleansing, spritz it over your makeup, or use it as a hair mist. It is alcohol-free, gentle, and a lovely way to freshen up on a hot afternoon.",
    ingredients: [
      { name: "Rose water", role: "Pure, alcohol-free floral water" },
    ],
    benefits: ["Hydrates and refreshes skin", "Soothes and tones skin", "Natural antioxidant", "Strengthens hair roots", "Relieves stress and uplifts mood"],
    usage: ["Face toner: mist after cleansing.", "Makeup setting spray.", "Hair mist.", "Refresh skin anytime."],
    goodFor: "The whole family. Alcohol-free and gentle." }),
  P({ slug: "painless-wax-powder", name: "Painless Wax Powder", categorySlug: "beauty-essentials", kind: "photo", image: "/images/products/painless-wax-powder.webp",
    description: "A chocolate-and-rose scented wax powder that you mix with water.",
    story: "No melting pots, no strips. Mix the powder with water into a paste, apply, wait ten minutes, and wipe it off with a wet cloth or sponge. It smells of chocolate and roses, which makes the whole job a lot more pleasant.",
    ingredients: [
      { name: "Herbal wax powder", role: "Removes hair from the root" },
      { name: "Cocoa", role: "The chocolate note in the blend" },
      { name: "Rose", role: "The rose note in the blend" },
    ],
    benefits: ["Removes hair from the root", "Reduces hair growth over time", "Gentle on skin", "Leaves skin soft and smooth"],
    usage: ["Mix the powder with normal water.", "Apply for 10 minutes.", "Remove with a wet cloth or sponge.", "Remove silver ornaments before applying."],
    goodFor: "All skin types",
    caution: "Do not apply on any kind of rash or broken skin." }),
  P({ slug: "lavender-spf-50-sunscreen", name: "Lavender SPF 50 Sunscreen with Niacinamide", categorySlug: "beauty-essentials", kind: "photo", image: "/images/products/lavender-spf-50-sunscreen.webp",
    description: "A light, non-greasy daily sunscreen with calming lavender and brightening niacinamide.",
    story: "Sunscreen is the step that protects everything else in your routine, so we made one you will actually enjoy wearing. It is lightweight and non-greasy, with lavender to calm the skin and niacinamide to brighten it. SPF 50 PA+++ gives broad-spectrum protection from UVA and UVB rays. It comes in a 100 ml pump bottle.",
    ingredients: [
      { name: "Sunscreen filters (SPF 50, PA+++)", role: "Broad-spectrum UVA and UVB protection" },
      { name: "Lavender extract", role: "Soothes irritation, reduces redness and gives antioxidant protection" },
      { name: "Niacinamide", role: "Brightens skin, improves texture, minimises pores and strengthens the skin barrier" },
    ],
    benefits: ["Broad-spectrum protection that shields from sun damage and premature aging", "Calms and soothes redness and irritation", "Helps fade dark spots, evens skin tone and boosts natural radiance", "Keeps skin moisturised and soft without a greasy feel"],
    usage: ["Apply evenly on face and neck before sun exposure.", "Use daily as the last step of your skincare routine.", "Reapply every 2 to 3 hours for maximum protection."],
    goodFor: "All skin types. Paraben free, sulfate free and dermatologically tested. 100 ml." }),
  P({ slug: "under-eye-dark-circles-kit", name: "Under Eye Dark Circles Kit", categorySlug: "beauty-essentials", kind: "photo", image: "/images/products/under-eye-dark-circles-kit.webp",
    description: "A herbal gel for the day and a roll-on for the night, for bright, rested-looking eyes.",
    story: "Two small bottles, two jobs. Smooth the gel on in the morning to hydrate and refresh, and roll the oil on at night to repair and nourish while you sleep. Used daily, the pair is made to ease dark circles and puffiness, soften fine lines and leave the skin around your eyes looking brighter.",
    ingredients: [
      { name: "Under Eye Gel", role: "Daytime step: hydrates and refreshes" },
      { name: "Under Eye Roll-On", role: "Night-time step: repairs and nourishes" },
    ],
    benefits: ["Reduces dark circles", "De-puffs and soothes", "Hydrates and nourishes", "Reduces fine lines", "Brightens and refreshes", "Safe and gentle for daily use"],
    usage: ["Clean your face gently.", "Apply a small amount gently around the eyes.", "Day time: use the gel to hydrate and refresh.", "Night time: use the roll-on to repair and nourish.", "Use daily for best results."],
    goodFor: "All skin types. 100% natural, paraben free, chemical free and cruelty free." }),
  P({ slug: "neem-toner", name: "Antiseptic Neem Toner", categorySlug: "beauty-essentials", kind: "photo", image: "/images/products/neem-toner.webp",
    description: "A light green neem mist for clean, clear and healthy skin, gentle enough for kids.",
    story: "Neem is the herb we reach for first when skin needs cleaning up, so it was only a matter of time before it got its own mist. This 100 ml toner is enriched with neem extract and made for clean, clear, healthy-looking skin. It is gentle enough for the whole family, kids included, and has no paraben, sulphate or alcohol.",
    ingredients: [
      { name: "Neem extract", role: "Natural antiseptic and antibacterial, helps keep skin clean and clear" },
    ],
    benefits: ["Antibacterial, helps fight germs and prevent acne", "Soothes skin and reduces irritation, redness and rashes", "Balances skin, controls oil and tightens pores", "Refreshes and revitalises for a natural glow", "100% herbal, with no harsh chemicals", "Helps protect kids from mosquito bites", "Keeps skin clean and fresh"],
    usage: ["Mist onto clean skin.", "Use for daily face and skin care."],
    goodFor: "All skin types. Safe for kids' daily face and skin care. Paraben free, sulphate free and alcohol free." }),

  /* ------------------------------ HAIR CARE ------------------------------ */
  shampoo("7-in-1-herbal-shampoo", "7-in-1 Herbal Shampoo", "#F4DDB0", "Our all-rounder, seven herbs in one amber bottle.",
    "Amla, shikakai, bhringraj, hibiscus, fenugreek, neem and aloe vera all in a single bottle. If you only want to try one of our shampoos, start here. It is warm amber in colour and very much the \"everything\" shampoo.",
    [{ name: "Amla", role: "Adds shine" }, { name: "Shikakai", role: "Gently cleanses the scalp" }, { name: "Bhringraj", role: "Strengthens hair" }, { name: "Hibiscus", role: "Conditions" }, { name: "Fenugreek", role: "Nourishes" }, { name: "Neem", role: "Keeps the scalp fresh" }, { name: "Aloe vera", role: "Soothes and hydrates" }],
    ["Cleanses gently", "Nourishes hair and scalp", "Adds shine and softness"], true),
  shampoo("aloe-vera-neem-shampoo", "Aloe Vera Neem Shampoo", "#DCEBB0", "Cool and green, aloe vera and neem for a fresh scalp.",
    "This is our \"deep breath\" shampoo. Aloe soothes and hydrates, neem keeps the scalp fresh, and together they turn wash day into something cooling and calm.",
    [{ name: "Aloe vera", role: "Soothes and hydrates the scalp" }, { name: "Neem", role: "Keeps the scalp clean and fresh" }],
    ["Soothes an itchy scalp", "Keeps the scalp clean", "Leaves hair soft"]),
  shampoo("onion-hibiscus-shampoo", "Onion Hibiscus Shampoo", "#F6D3CC", "Rosy-red, onion and hibiscus for strong roots.",
    "Onion is an old home remedy for strong hair, and hibiscus has been used to condition and add body for just as long. We blend the two into a rosy shampoo that is all about roots.",
    [{ name: "Onion extract", role: "Traditional remedy for strong roots" }, { name: "Hibiscus", role: "Conditions and promotes thicker-looking hair" }],
    ["Helps reduce hair fall", "Conditions and adds body", "Nourishes the scalp"]),
  shampoo("flaxseed-shampoo", "Flaxseed Shampoo", "#E9E0CF", "Speckled with flaxseed, for soft, smooth, well-behaved hair.",
    "You can actually see the flaxseeds in this bottle. They are known for smoothing and defining, so this is a good pick if your hair loves to frizz.",
    [{ name: "Flaxseed", role: "Smooths and defines, rich in nourishing oils" }],
    ["Smooths frizz", "Adds softness and shine", "Nourishes hair"]),
  shampoo("keratin-shampoo", "Keratin Shampoo", "#F2E9DB", "A creamy white shampoo from our keratin range.",
    "Smooth, white and creamy. Keratin is the protein that gives hair its strength and sleekness, and this shampoo is made for that polished, softer-looking finish.",
    [{ name: "Keratin protein", role: "Helps strengthen and smooth hair" }],
    ["Helps strengthen hair", "Smooths and softens", "Reduces the look of frizz"]),
  shampoo("kalonji-shampoo", "Kalonji Shampoo", "#D9DFDA", "Dark and rich, kalonji (nigella seeds) in a bottle.",
    "Kalonji has a long history in Indian homes as a hair-strengthening seed. The dark colour in the bottle is the real thing, and it leaves hair feeling soft and nourished.",
    [{ name: "Kalonji (nigella seeds)", role: "Traditional hair-strengthening seed" }],
    ["Nourishes the scalp", "Helps strengthen hair", "Leaves hair soft"]),
  shampoo("rice-shampoo", "Rice Shampoo", "#F3ECD6", "A soft, creamy shampoo built around rice.",
    "Rice water has been a hair-wash secret for ages, and this is our gentle everyday version of it. Soft, creamy and kind to hair, it is the one for regular use.",
    [{ name: "Rice extract", role: "Softens and adds shine" }],
    ["Softens hair", "Adds shine", "Gentle for regular use"]),
];

// --- helpers + light validation (runs at build time) ---
const slugs = new Set<string>();
for (const s of [...categories.map((c) => c.slug), ...products.map((p) => p.slug)]) {
  if (slugs.has(s)) throw new Error(`Duplicate slug: ${s}`);
  slugs.add(s);
}
for (const p of products) {
  if (!categories.some((c) => c.slug === p.categorySlug)) throw new Error(`Unknown category for ${p.slug}`);
}

export const publishedCategories = () => categories.filter((c) => c.published).sort((a, b) => a.order - b.order);
export const getCategory = (slug: string) => publishedCategories().find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsIn = (cat: string) => products.filter((p) => p.categorySlug === cat);
