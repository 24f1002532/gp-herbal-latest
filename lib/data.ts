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
  mrp: number;               // original price in rupees (shown struck through)
  price: number;             // selling price after the discount, in rupees (set from MRP in the price table below)
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
    intro: "Small-batch herbal soaps poured by hand into butterfly, sunflower, oval and even little vehicle moulds. Neem, rice, avocado, fitkari and more." },
  { slug: "hair-care", name: "Hair Care", enquiryNoun: "hair care products", order: 2, published: true, tone: "olive",
    intro: "Seven herbal shampoos, each named for the ingredient it is built around, plus a herbal hair colour." },
  { slug: "oils", name: "Herbal Oils", enquiryNoun: "herbal oils", order: 3, published: true, tone: "beige",
    intro: "Pure coconut oil, a 32-herb hair oil, a kumkumadi face roll-on and an eyebrow oil. Small bottles that do a lot." },
  { slug: "face-washes", name: "Face Washes", enquiryNoun: "face washes", order: 4, published: true, tone: "coral",
    intro: "A gentle herbal face wash for everyday cleansing, built around mulethi." },
  { slug: "face-packs", name: "Face Packs & Scrubs", enquiryNoun: "face packs and scrubs", order: 5, published: true, tone: "beige",
    intro: "A powder face pack you mix fresh at home and a coffee scrub, for a quiet self-care moment." },
  { slug: "facial-kits", name: "Facial Kits", enquiryNoun: "facial kits", order: 6, published: true, tone: "pink",
    intro: "Five-jar facial kits that take you from cleanser to mask, step by step, in your own bathroom." },
  { slug: "creams", name: "Creams & Bleach", enquiryNoun: "creams", order: 7, published: true, tone: "pink",
    intro: "Herbal creams and a facial bleach, made in small batches in our home kitchen." },
  { slug: "sun-care", name: "Sun Care", enquiryNoun: "sun care products", order: 8, published: true, tone: "coral",
    intro: "A lavender SPF 50 sunscreen and a peach SPF moisturiser, for skin that spends time outdoors." },
  { slug: "beauty-essentials", name: "Beauty Essentials", enquiryNoun: "beauty essentials", order: 9, published: true, tone: "coral",
    intro: "Rose water, neem toner, an under-eye kit and a painless wax powder. The small things that finish a routine." },
];

export const DISCOUNT = 0.5; // 50% off every product. Change this one number to change the sale.
export const formatPrice = (n: number) => `Rs. ${n.toLocaleString("en-IN")}`;
export const discountPercent = Math.round(DISCOUNT * 100);

type Raw = Omit<Product, "mrp" | "price">;
const P = (p: Omit<Raw, "kind"> & { kind?: Product["kind"] }): Raw => ({
  kind: "art", ...p,
});

const shampoo = (slug: string, name: string, tint: string, description: string, story: string,
  ingredients: Ingredient[], benefits: string[], bestSeller = false): Raw => ({
  slug, name, bestSeller, categorySlug: "hair-care", kind: "photo", tint, description, story,
  image: `/images/products/${slug}.webp`, ingredients, benefits,
  usage: ["Wet your hair and scalp well.", "Pump a small amount into your palm and massage into the scalp.", "Work the lather down the lengths.", "Rinse thoroughly with water."],
  goodFor: "All hair types",
});

const rawProducts: Raw[] = [
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
  P({ slug: "rice-soap", name: "Rice Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/rice-soap.webp",
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
  P({ slug: "fitkari-soap", name: "Fitkari (Alum) Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/fitkari-soap.webp",
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

  P({ slug: "kids-special-soap", name: "Skin Whitening Kid's Special Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/kids-special-soap.webp",
    description: "Fun blue vehicle soaps with aloe vera and milk protein for soft, bright, healthy skin.",
    story: "A bath-time favourite: a smiling train, a car, a bus and a jeep, all in bright blue soaps made for little skin. Enriched with aloe vera and milk protein, they cleanse gently, moisturise and brighten skin naturally, leaving it soft, smooth and healthy. They are safe and mild for kids, perfect for daily use and dermatologist tested.",
    ingredients: [
      { name: "Aloe vera", role: "Soothes and moisturises the skin" },
      { name: "Milk protein", role: "Nourishes and softens the skin" },
      { name: "Natural ingredients", role: "Gentle on kids' skin" },
    ],
    benefits: ["Skin whitening, brightens naturally", "Gentle cleansing", "Moisturising care", "Soft and smooth skin", "Bright and healthy glow", "Safe and mild for kids"],
    usage: ["Wet skin with water.", "Rub the soap gently on skin and lather.", "Rinse thoroughly and pat dry."],
    goodFor: "Kids. Perfect for daily use. Dermatologist tested." }),
  P({ slug: "korean-whitening-soap", name: "Korean Whitening Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/korean-whitening-soap.webp",
    description: "A pearly white sunflower soap that brightens skin, fades dark spots and improves texture.",
    story: "Shaped like a pearly white sunflower, this Korean-style whitening soap is made from 100% natural herbal ingredients. Used regularly, it brightens your skin, helps fade dark spots and improves skin texture.",
    ingredients: [
      { name: "Natural herbal ingredients", role: "Brighten skin, fade dark spots and improve skin texture" },
    ],
    benefits: ["Brightens skin", "Fades dark spots", "Improves skin texture", "100% natural herbal"],
    usage: ["Wet skin with water.", "Rub the soap gently on skin and lather.", "Rinse thoroughly and pat dry."],
    goodFor: "Face and body. Daily use." }),
  P({ slug: "d-tan-soap", name: "Ghar Magic De-Tan Soap", categorySlug: "soaps", kind: "photo", image: "/images/products/d-tan-soap.webp",
    description: "A handmade two-tone De-Tan soap that removes tan, deep cleanses and brings out a natural glow.",
    story: "Ghar Magic De-Tan Soap is a pure, natural, herbal, handmade bar, with a creamy white base topped with a golden herbal layer. It gently cleanses, removes tan, evens out skin tone and leaves skin hydrated with a natural glow. It is mild enough for kids too, with a tear-free, non-irritating formula that is safe for sensitive skin and daily use.",
    ingredients: [
      { name: "Turmeric", role: "Traditional herb that brightens and evens out skin tone" },
      { name: "Sandalwood (chandan)", role: "Soothes skin and adds a natural glow" },
      { name: "Aloe vera", role: "Hydrates and soothes the skin" },
    ],
    benefits: ["Removes tan", "Gives a natural glow", "Deep cleansing", "Evens skin tone", "Hydrating", "Mild, non-irritating and safe for kids and sensitive skin"],
    usage: ["Rub the soap on wet skin to create lather.", "Gently massage on face and body.", "Rinse thoroughly and pat dry."],
    goodFor: "Everyone, kids too. Daily use. 100% natural, handmade, free of harmful chemicals and cruelty free." }),

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

  P({ slug: "rice-face-pack", name: "Rice Face Pack", categorySlug: "face-packs", kind: "photo", image: "/images/products/rice-face-pack.webp",
    description: "A 100% natural rice pack for detan and a natural glow. Kids can use it too.",
    story: "Made with 100% natural rice, this face pack is for detan and a natural glow. Mix it fresh with rose water or milk, spread it on, and let it tighten, lighten and deeply cleanse your skin. It is chemical free, safe and gentle with no side effects, and suits all skin types, kids included.",
    ingredients: [
      { name: "Natural rice", role: "100% natural rice powder that tightens skin, lifts tan and removes blackheads and whiteheads" },
      { name: "Rose water or milk", role: "Mixed in by you, to make a smooth paste" },
    ],
    benefits: ["Skin tightening", "Removes blackheads and whiteheads", "Skin lightening and detan", "Gives a natural glow", "Deep cleansing and deep nourishment", "Reduces tan and brightens skin", "Improves skin texture", "No side effects, suitable for all skin types, kids can also use"],
    usage: ["Take the required amount of rice face pack.", "Mix with rose water or milk into a smooth paste.", "Apply evenly on face and neck.", "Leave it for 15 to 20 minutes.", "Rinse with normal water. Use 2 to 3 times a week for best results."],
    goodFor: "All skin types, kids too. Chemical free." }),
  P({ slug: "coffee-scrub", name: "Coffee Scrub", categorySlug: "face-packs", kind: "photo", image: "/images/products/coffee-scrub.webp",
    description: "A natural coffee scrub for face and body that removes tan and dirt. 100 g.",
    story: "Pure coffee and herbal goodness in one jar. Use it as a face scrub, a body exfoliator, a pre-makeup scrub or a weekly skincare treat: it removes tan and dirt, exfoliates dead skin cells, unclogs pores and leaves skin with a natural, healthy glow. It is 100% natural, paraben free, sulfate free and cruelty free. It comes in a 100 g jar.",
    ingredients: [
      { name: "Pure coffee", role: "Natural exfoliant that lifts tan, dirt and dead skin cells" },
      { name: "Herbal ingredients", role: "Herbal goodness for a gentle, radiant finish" },
    ],
    benefits: ["Removes tanning and dirt", "Exfoliates dead skin cells", "Unclogs pores and clears skin", "Improves blood circulation", "Gives a natural, healthy glow"],
    usage: ["Take a small amount on damp skin.", "Massage gently in circular motions for a minute or two.", "Rinse well with water and pat dry. Use once a week."],
    goodFor: "Face and body. Use as a face scrub, body exfoliator, pre-makeup scrub or weekly skincare. 100 g jar. Paraben free, sulfate free, cruelty free.",
    caution: "Keep away from the eyes and do not scrub hard on sensitive skin." }),

  /* ---------------------------- FACIAL KITS ---------------------------- */
  P({ slug: "vitamin-c-facial-kit", name: "Vitamin C Facial Kit", categorySlug: "facial-kits", kind: "photo", image: "/images/products/vitamin-c-facial-kit.webp",
    description: "Five jars in sunny orange tones, a whole salon facial for your own bathroom.",
    story: "Cleanser, scrub, cream, gel and mask: the five steps of a proper facial, lined up in order so you never have to guess. The kit is built around vitamin C from orange and is all about leaving your skin looking fresh and bright. Put on your favourite song and take your time.",
    ingredients: [
      { name: "Vitamin C (orange)", role: "Brightening, antioxidant protection" },
      { name: "Natural extracts", role: "Nourish and hydrate through all five steps" },
    ],
    benefits: ["Brightens skin tone", "Hydrates and nourishes", "Reduces dullness and dark spots", "Improves skin texture", "Gives a healthy, radiant glow"],
    usage: ["Step 1, Cleanser: deep cleanses and removes impurities.", "Step 2, Scrub: exfoliates dead skin and unclogs pores.", "Step 3, Cream: moisturises and brightens.", "Step 4, Gel: hydrates and soothes.", "Step 5, Mask: nourishes and revitalises."],
    goodFor: "All skin types" }),

  P({ slug: "green-tea-facial-kit", name: "Organic Green Tea Facial Kit", categorySlug: "facial-kits", kind: "photo", image: "/images/products/green-tea-facial-kit.webp",
    description: "Five calm green jars that fight acne and soothe redness.",
    story: "Cleanser, scrub, cream, gel and mask, all in the fresh greens of green tea. This organic kit fights acne and pimples, calms and soothes the skin, reduces redness and irritation, and is rich in antioxidants for youthful-looking skin.",
    ingredients: [
      { name: "Green tea", role: "Rich in antioxidants, calms skin and helps fight acne and pimples" },
    ],
    benefits: ["Fights acne and pimples", "Calms and soothes the skin", "Reduces redness and irritation", "Rich in antioxidants for youthful skin"],
    usage: ["Step 1, Cleanser: deep cleanses and removes impurities.", "Step 2, Scrub: exfoliates dead skin and unclogs pores.", "Step 3, Cream: moisturises and nourishes.", "Step 4, Gel: hydrates and soothes.", "Step 5, Mask: nourishes and revitalises."],
    goodFor: "All skin types, especially acne-prone or irritated skin" }),
  P({ slug: "red-wine-anti-aging-facial-kit", name: "Organic Red Wine Anti-Ageing Facial Kit", categorySlug: "facial-kits", kind: "photo", image: "/images/products/red-wine-anti-aging-facial-kit.webp",
    description: "Five jars in grape and wine tones to firm skin and soften fine lines.",
    story: "Cleanser, scrub, cream, gel and mask in the colours of red grapes and a glass of red wine. This organic anti-ageing kit reduces fine lines and wrinkles, firms and tightens the skin, improves skin elasticity and revitalises and nourishes tired skin.",
    ingredients: [
      { name: "Red wine", role: "Antioxidant-rich ingredient that helps firm skin and soften fine lines" },
      { name: "Grapes", role: "Revitalise and nourish the skin" },
    ],
    benefits: ["Reduces fine lines and wrinkles", "Firms and tightens the skin", "Improves skin elasticity", "Revitalises and nourishes"],
    usage: ["Step 1, Cleanser: deep cleanses and removes impurities.", "Step 2, Scrub: exfoliates dead skin and unclogs pores.", "Step 3, Cream: moisturises and nourishes.", "Step 4, Gel: hydrates and soothes.", "Step 5, Mask: nourishes and revitalises."],
    goodFor: "All skin types, especially mature or tired-looking skin" }),
  P({ slug: "glow-booster-facial-kit", name: "Organic Glow Booster Facial Kit", categorySlug: "facial-kits", kind: "photo", image: "/images/products/glow-booster-facial-kit.webp",
    description: "Five jars of honey and turmeric goodness to brighten and revitalise skin.",
    story: "Cleanser, scrub, cream, gel and mask in warm, golden tones, inspired by honey and turmeric. This organic glow kit brightens and revitalises, evens out skin tone, boosts radiance and hydrates and nourishes for youthful-looking skin.",
    ingredients: [
      { name: "Honey", role: "Hydrates and nourishes the skin" },
      { name: "Turmeric", role: "Brightens and helps even out skin tone" },
    ],
    benefits: ["Brightens and revitalises the skin", "Evens out skin tone", "Boosts skin radiance", "Hydrates and nourishes for youthful skin"],
    usage: ["Step 1, Cleanser: deep cleanses and removes impurities.", "Step 2, Scrub: exfoliates dead skin and unclogs pores.", "Step 3, Cream: moisturises and nourishes.", "Step 4, Gel: hydrates and soothes.", "Step 5, Mask: nourishes and revitalises."],
    goodFor: "All skin types" }),
  P({ slug: "pearl-whitening-facial-kit", name: "Pearl Whitening Facial Kit", categorySlug: "facial-kits", kind: "photo", image: "/images/products/pearl-whitening-facial-kit.webp",
    description: "A 100% handmade organic kit with pearl extract and herbs for a natural glow.",
    story: "Natural glow with pearl and herbal care. This 100% handmade organic kit has five jars in cool blues, mint and white, made with aloe vera, neem, mint, green tea and pearl extract. It brightens and evens skin tone, removes tan and dullness, deeply nourishes and gives an instant glow.",
    ingredients: [
      { name: "Aloe vera", role: "Hydrates and soothes skin" },
      { name: "Neem", role: "Fights acne and purifies skin" },
      { name: "Mint", role: "Refreshes and brightens skin" },
      { name: "Green tea", role: "Protects and improves glow" },
      { name: "Pearl extract", role: "Brightens and evens skin tone" },
    ],
    benefits: ["Brightens and evens skin tone", "Removes tan and dullness", "Deeply nourishes skin", "Gives instant glow", "Suitable for all skin types"],
    usage: ["Step 1, Cleanser: deep cleanses and removes impurities.", "Step 2, Scrub: exfoliates dead skin and unclogs pores.", "Step 3, Cream: moisturises and nourishes.", "Step 4, Gel: hydrates and soothes.", "Step 5, Mask: nourishes and revitalises."],
    goodFor: "All skin types. 100% handmade and organic." }),

  /* --------------------------- CREAMS & BLEACH --------------------------- */
  P({ slug: "anti-aging-cream", name: "Anti-Aging Cream with Herbal Cloves Oil", categorySlug: "creams", kind: "photo", image: "/images/products/anti-aging-cream.webp",
    description: "A herbal day-and-night cream with cloves oil for youthful, radiant skin. 50 g.",
    story: "Made with a herbal infusion and cloves oil, this cream is for youthful, radiant skin. Use it in the morning to protect and revitalise your skin all day long, and at night to repair and nourish it for a firmer, younger-looking look. It suits all skin types and comes in a 50 g jar.",
    ingredients: [
      { name: "Herbal cloves oil", role: "Herbal oil that helps reduce the signs of aging" },
      { name: "Herbal infusion", role: "Nourishes and revitalises the skin" },
    ],
    benefits: ["Reduces the signs of aging", "Protects and revitalises your skin all day long (morning use)", "Repairs and nourishes for firmer, younger-looking skin (night use)", "Suitable for all skin types"],
    usage: ["Morning: apply on clean face and neck to protect and revitalise your skin all day.", "Night: apply on clean face and neck to repair and nourish while you sleep."],
    goodFor: "All skin types. Use day and night. 50 g jar.",
    caution: "Do a small patch test first and keep away from the eyes." }),
  P({ slug: "skin-whitening-day-cream", name: "Skin Whitening Fairness Day Cream", categorySlug: "creams", kind: "photo", image: "/images/products/skin-whitening-day-cream.webp",
    description: "A herbal day cream with hyaluronic acid and licorice for brighter, even-toned, glowing skin.",
    story: "Brighter skin, even tone and a natural glow are what this day cream is made for. Hyaluronic acid keeps skin hydrated and plump, salicylic acid clears pores and helps keep breakouts away, and botanical extracts such as licorice, niacinamide, aloe vera, green tea and chamomile work on dark spots and dullness. It is paraben free, cruelty free and suits all skin types, with visible results on regular use.",
    ingredients: [
      { name: "Hyaluronic acid", role: "Deep hydration, improves skin elasticity and keeps skin plump and youthful" },
      { name: "Salicylic acid", role: "Unclogs pores, fights acne and blackheads and smooths skin texture" },
      { name: "Licorice and niacinamide", role: "Help brighten the complexion and fade dark spots and pigmentation" },
      { name: "Aloe vera, green tea and chamomile", role: "Soothe, protect and hydrate the skin" },
    ],
    benefits: ["Brightens complexion", "Reduces dark spots and pigmentation", "Hydrates and moisturises skin", "Controls acne and prevents new breakouts", "Makes skin soft, smooth and glowing"],
    usage: ["Cleanse your face.", "Take a small amount of cream.", "Apply evenly on face and neck in the morning."],
    goodFor: "All skin types. Paraben free, cruelty free and free of harmful chemicals.",
    caution: "Do a small patch test first if you have very sensitive skin." }),
  P({ slug: "organic-bleach", name: "Homemade Organic Bleach", categorySlug: "creams", kind: "photo", image: "/images/products/organic-bleach.webp",
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

  P({ slug: "peach-spf-moisturizer-lotion", name: "Peach SPF Moisturizer Plus Body Lotion", categorySlug: "sun-care", kind: "photo", image: "/images/products/peach-spf-moisturizer-lotion.webp",
    description: "A herbal handmade peach moisturiser and body lotion with SPF 25. A winter special.",
    story: "A soft peach-coloured moisturiser that doubles as a body lotion, handmade with natural ingredients. It hydrates and nurtures dry skin and gives SPF 25 sun protection when you step out, which makes it our winter special.",
    ingredients: [
      { name: "Peach", role: "Softens and nourishes the skin" },
      { name: "SPF 25 sun protection", role: "Helps protect skin from the sun's UV rays" },
      { name: "Natural ingredients", role: "Hydrate and nurture the skin" },
    ],
    benefits: ["Hydrating and nurturing", "SPF 25 sun protection", "Works as a face moisturiser and a body lotion", "Made with natural ingredients"],
    usage: ["Take a small amount of lotion.", "Apply evenly on face, neck and body.", "Reapply if you stay out in the sun for long."],
    goodFor: "Face and body. Daily use, especially in winter." }),

  /* ------------------------ OILS, TONERS & ESSENTIALS ------------------------ */
  P({ slug: "pure-coconut-oil", name: "Pure Coconut Oil", categorySlug: "oils", kind: "photo", image: "/images/products/pure-coconut-oil.webp",
    description: "Cold-pressed, unrefined coconut oil in a 100 g jar, for hair, skin and the kitchen.",
    story: "Extracted from fresh coconuts, cold-pressed and unrefined, this is 100% pure coconut oil with nothing added. It is a multi-purpose oil for the whole family: it strengthens and conditions hair, moisturises skin and can be used for cooking. It is chemical free, gentle and safe for all ages. It comes in a 100 g jar.",
    ingredients: [
      { name: "Coconut oil", role: "100% pure, cold-pressed and unrefined, extracted from fresh coconuts" },
    ],
    benefits: ["Strengthens hair roots", "Helps reduce hair fall and prevent dandruff", "Adds natural shine and deeply conditions scalp and hair", "Deeply moisturises and soothes dry skin", "Works as a natural makeup remover and is safe for sensitive skin", "Can be used for cooking, with a high smoke point and natural flavour"],
    usage: ["For hair: warm a little oil between your palms and massage into scalp and hair, then wash off after an hour or overnight.", "For skin: smooth a little onto dry skin, or use it to remove makeup.", "For cooking: use it like any cooking oil."],
    goodFor: "The whole family, all ages. Hair, skin and food. 100 g jar. Chemical free." }),
  P({ slug: "32-herbs-hair-oil", name: "32 Herbs Hair Oil", categorySlug: "oils", kind: "photo", image: "/images/products/32-herbs-hair-oil.webp",
    description: "A hair oil made with 32 herbs, for a nourished scalp and stronger roots.",
    story: "Thirty-two herbs in a single bottle, the way hair oil used to be made at home. Warm a little between your palms, massage it into your scalp and let it soak in. Regular oiling is the old-fashioned secret to strong, shiny, healthy-looking hair.",
    ingredients: [
      { name: "32-herb infusion", role: "A blend of traditional herbs for scalp and hair care" },
    ],
    benefits: ["Nourishes the scalp", "Helps strengthen hair from the roots", "Helps reduce hair fall and breakage", "Adds shine and softness"],
    usage: ["Warm a little oil between your palms.", "Massage gently into the scalp and along the hair.", "Leave on for at least an hour, or overnight, then wash with shampoo."],
    goodFor: "All hair types" }),
  P({ slug: "kumkumadi-face-roll-on", name: "Kumkumadi Roll-On", categorySlug: "oils", kind: "photo", image: "/images/products/kumkumadi-face-roll-on.webp",
    description: "An Ayurvedic glow elixir in a 10 ml roll-on, with saffron, manjistha and sandalwood.",
    story: "Kumkumadi Roll-On is an ancient Ayurvedic glow elixir for brighter skin and natural radiance, handcrafted with care and enriched with potent herbs. Roll it on, massage it in, and watch skin tone and texture improve over time. It is natural, toxin free, chemical free, cruelty free and suits all skin types. It comes in a 10 ml bottle.",
    ingredients: [
      { name: "Kumkum (saffron)", role: "Brightens and adds glow" },
      { name: "Manjistha", role: "Purifies and improves skin tone" },
      { name: "Chandan (sandalwood)", role: "Soothes and calms skin" },
      { name: "Tagar", role: "Nourishes and revitalises" },
      { name: "Anantmool", role: "Promotes healthy, clear skin" },
    ],
    benefits: ["Enhances natural glow and radiance", "Helps reduce dark spots, pigmentation and blemishes", "Deeply nourishes and hydrates", "Improves skin tone and texture", "Boosts skin brightness and youthful appearance"],
    usage: ["Cleanse your face.", "Roll a thin line on your face and neck.", "Massage gently until absorbed."],
    goodFor: "All skin types: normal, dry, oily, sensitive and combination. 10 ml. Ayurvedic formula.",
    caution: "Do a small patch test first, as natural oils can suit people differently." }),
  P({ slug: "eyebrow-thicker-oil", name: "Herbal Eyebrow Thicker Oil", categorySlug: "oils", kind: "photo", image: "/images/products/eyebrow-thicker-oil.webp",
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
  P({ slug: "lavender-spf-50-sunscreen", name: "Lavender SPF 50 Sunscreen with Niacinamide", categorySlug: "sun-care", kind: "photo", image: "/images/products/lavender-spf-50-sunscreen.webp",
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
  P({ slug: "hair-colour", name: "Herbal Henna Hair Colour", categorySlug: "hair-care", kind: "photo", image: "/images/products/hair-colour.webp",
    description: "Henna-based herbal hair colour in Natural Black and Natural Brown, 100 g each, with no ammonia and no PPD.",
    story: "GP Herbal Hair Colour is made with pure henna and natural herbs, so you can colour your hair and look after it at the same time. It covers grey naturally with long-lasting, vibrant colour, and has no ammonia and no PPD. Choose Natural Black for a rich, deep black with natural shine, or Natural Brown for a warm, soft look. Each pouch is 100 g, for men and women.",
    ingredients: [
      { name: "Pure henna", role: "Natural colouring herb that covers grey and conditions hair" },
      { name: "Natural herbs", role: "Nourish and strengthen hair and help keep the scalp healthy" },
    ],
    benefits: ["100% herbal and natural", "Covers grey naturally with long-lasting, vibrant colour", "Nourishes and strengthens hair for healthy, shiny hair", "No ammonia and no PPD, safe and gentle for all hair types", "Improves scalp health and helps reduce dandruff and itching", "Two shades: Natural Black and Natural Brown"],
    usage: ["Mix the powder with warm water to make a smooth paste.", "Apply evenly on clean, dry hair.", "Leave on for 30 to 35 minutes.", "Rinse thoroughly with warm water and use a mild shampoo."],
    goodFor: "Men and women, all hair types. Safe for regular use. 100 g pouch. Cruelty free and eco-friendly.",
    caution: "Do a patch test on a small area before use and keep away from the eyes." }),
  shampoo("7-in-1-herbal-shampoo", "7-in-1 Herbal Shampoo", "#F4DDB0", "Our all-rounder, seven herbs in one amber bottle.",
    "Amla, shikakai, bhringraj, hibiscus, fenugreek, neem and aloe vera all in a single bottle. If you only want to try one of our shampoos, start here. It is warm amber in colour and very much the \"everything\" shampoo.",
    [{ name: "Amla", role: "Adds shine" }, { name: "Shikakai", role: "Gently cleanses the scalp" }, { name: "Bhringraj", role: "Strengthens hair" }, { name: "Hibiscus", role: "Conditions" }, { name: "Fenugreek", role: "Nourishes" }, { name: "Neem", role: "Keeps the scalp fresh" }, { name: "Aloe vera", role: "Soothes and hydrates" }],
    ["Cleanses gently", "Nourishes hair and scalp", "Adds shine and softness"]),
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

// --- prices -------------------------------------------------------------------------------------
// MRP (the original price, shown struck through) for every product. The selling price is MRP minus DISCOUNT.
// To change a price, edit one number here. Products not listed fall back to DEFAULT_MRP.
const SOAP = 250, SHAMPOO = 400, KIT = 550;
const DEFAULT_MRP = 300; // TODO confirm: rice-face-pack, anti-aging-cream and mulethi-majesta-face-wash have no price yet
const MRP: Record<string, number> = {
  // soaps
  "neem-soap": SOAP, "rice-soap": SOAP, "avocado-soap": SOAP, "pigmentation-soap": SOAP, "fitkari-soap": SOAP,
  "manicure-pedicure-scrub-soap": SOAP, "moroccan-whitening-soap": SOAP, "kids-special-soap": SOAP, "korean-whitening-soap": SOAP, "d-tan-soap": SOAP,
  // hair care
  "7-in-1-herbal-shampoo": SHAMPOO, "aloe-vera-neem-shampoo": SHAMPOO, "onion-hibiscus-shampoo": SHAMPOO, "flaxseed-shampoo": SHAMPOO,
  "keratin-shampoo": SHAMPOO, "kalonji-shampoo": SHAMPOO, "rice-shampoo": SHAMPOO, "hair-colour": 400,
  // oils
  "pure-coconut-oil": 400, "32-herbs-hair-oil": 400, "kumkumadi-face-roll-on": 400, "eyebrow-thicker-oil": 250,
  // face
  "coffee-scrub": 400,
  // facial kits
  "vitamin-c-facial-kit": KIT, "green-tea-facial-kit": KIT, "red-wine-anti-aging-facial-kit": KIT, "glow-booster-facial-kit": KIT, "pearl-whitening-facial-kit": KIT,
  // creams & bleach
  "skin-whitening-day-cream": 400, "organic-bleach": 300,
  // sun care
  "lavender-spf-50-sunscreen": 400, "peach-spf-moisturizer-lotion": 400,
  // beauty essentials
  "organic-rose-water": 200, "neem-toner": 300, "under-eye-dark-circles-kit": 500, "painless-wax-powder": 300,
};

export const products: Product[] = rawProducts.map((p) => {
  const mrp = MRP[p.slug] ?? DEFAULT_MRP;
  return { ...p, mrp, price: Math.round(mrp * (1 - DISCOUNT)) };
});

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
