import { WHATSAPP_NUMBER } from "./config";
import { formatPrice, type Category, type Product } from "./data";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const INTRO = "Hi, I came across the GP Herbal Homemade Products website.";

export const generalMessage = () =>
  "Hi, I came across your website. I would like to know more about GP Herbal Homemade Products.";

export const productMessage = (p: Product) =>
  `${INTRO} I would like to order the ${p.name} (${formatPrice(p.price)}).`;

export const categoryMessage = (c: Category) =>
  `${INTRO} I would like to know more about your ${c.enquiryNoun}.`;

export const generalLink = () => waLink(generalMessage());
export const productLink = (p: Product) => waLink(productMessage(p));
export const categoryLink = (c: Category) => waLink(categoryMessage(c));

export const reviewLink = () => waLink("Hi, I would like to share a few words about GP Herbal Homemade Products.");
