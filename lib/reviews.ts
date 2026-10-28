// Customer notes for the home page "clothesline".
// `quote` is a short excerpt typed out for easy reading; `shot` is the real WhatsApp message (names, phone status
// bars and chat headers are cropped out). Add ONLY messages the customer is happy to have shown.
export type Review = {
  id: string; quote: string; name: string; place?: string; product?: string; stars?: 1 | 2 | 3 | 4 | 5;
  shot?: { src: string; w: number; h: number };
};

export const reviews: Review[] = [
  { id: "ricewash", quote: "“Both the products were amazing. Rice water face wash gave instant glow and shine to the face. Hair colour made hair shiny and soft in one use.”", name: "Happy customer", product: "Rice face wash & hair colour", shot: { src: "/images/reviews/ricewash.webp", w: 720, h: 282 } },
  { id: "neemsoap", quote: "“Got this neem soap for my daughter — so gentle, natural, and keeps her skin soft & fresh.”", name: "Happy customer", product: "Neem soap", shot: { src: "/images/reviews/neemsoap.webp", w: 720, h: 223 } },
  { id: "sevensilky", quote: "“Your 7 in shampoo result is amazing. After using it my hair become smooth and silky.”", name: "Happy customer", product: "7-in-1 shampoo", shot: { src: "/images/reviews/sevensilky.webp", w: 430, h: 256 } },
  { id: "pigmentation", quote: "“Pigmentation soap bhut bhut amazing hai dii, thnkuu so much… tuhade product bhut amazing a.”", name: "Happy customer", product: "Pigmentation soap", shot: { src: "/images/reviews/pigmentation.webp", w: 587, h: 234 } },
  { id: "kumkumadi", quote: "“All products are awesome in the first use I can see the changes in my skin.. Thanks a lot dear.”", name: "Happy customer", product: "Facial bombs, anti-aging soap & cream, rice shampoo", shot: { src: "/images/reviews/kumkumadi.webp", w: 595, h: 343 } },
  { id: "haircolour", quote: "“Mom says the hair color is excellent and the color turned out really well; her hair has become very silky too.”", name: "Happy customer", product: "Hair colour", shot: { src: "/images/reviews/haircolour.webp", w: 591, h: 385 } },
  { id: "parlour", quote: "“Thank you for recommending such effective and genuinely worthwhile products. Even my parlour aunty was impressed and praised the quality.”", name: "Happy customer", product: "Facial products, rosemary spray & shampoo", shot: { src: "/images/reviews/parlour.webp", w: 590, h: 927 } },
  { id: "riceshampoo", quote: "“Hello dear, your rice shampoo was amazing… Hair becomes smooth and shiny.”", name: "Happy customer", product: "Rice shampoo", shot: { src: "/images/reviews/riceshampoo.webp", w: 720, h: 168 } },
  { id: "sevenrosemary", quote: "“Ma'am, your 7 in one shampoo and oil is amazing… Thank you for recommending this to me.”", name: "Happy customer", product: "7-in-1 shampoo & rosemary hair oil", shot: { src: "/images/reviews/sevenrosemary.webp", w: 580, h: 280 } },
  { id: "sevenmagic", quote: "“Your 7-in one Shampoo is magical.. And your Rosemary hair oil is also too gud.”", name: "Happy customer", product: "7-in-1 shampoo & rosemary hair oil", shot: { src: "/images/reviews/sevenmagic.webp", w: 585, h: 310 } },
  { id: "aloeneem", quote: "“Thank you so much dear for the Neem Aloevera shampoo. The results are amazing.”", name: "Happy customer", product: "Aloe vera neem shampoo", shot: { src: "/images/reviews/aloeneem.webp", w: 446, h: 216 } },
  { id: "underarm", quote: "“I have used your underarm whitening cream. The result is amazing… Now I feel comfortable wearing a cut sleeve dress.”", name: "Happy customer", product: "Underarm whitening cream", shot: { src: "/images/reviews/underarm.webp", w: 587, h: 238 } },
];

export const getReviews = (): Review[] => reviews;
