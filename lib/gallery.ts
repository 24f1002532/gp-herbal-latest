// Photos of real packed orders. Add a new photo to /public/images/gallery and one line here.
export type Shot = {
  id: string; src: string; w: number; h: number; caption: string; alt: string;
  tape: "blush" | "olive" | "sun" | "coral";
  video?: string; // if set, this print plays a clip
};

export const shots: Shot[] = [
  { id: "soap-box", src: "/images/gallery/soap-box.webp", w: 1500, h: 1014, tape: "blush",
    caption: "A box of soaps, wrapped one by one", alt: "A cardboard box full of pink and blue handmade soaps, each wrapped in cling film" },
  { id: "bottles", src: "/images/gallery/bottles.webp", w: 1023, h: 1500, tape: "olive",
    caption: "Fresh shampoo, lined up and ready", alt: "Rows of amber and honey-coloured shampoo bottles with white pumps" },
  { id: "full-spread", src: "/images/gallery/full-spread.webp", w: 1200, h: 1500, tape: "sun",
    caption: "Shampoos, creams, soaps and packs, all in one go", alt: "A spread of shampoos, creams, soaps and foil-pouch packs on a chair" },
  { id: "packing-soaps", src: "/images/gallery/packing-soaps-poster.webp", w: 478, h: 850, tape: "coral", video: "/videos/packing-soaps.mp4",
    caption: "Press play: soaps, wrapped and boxed", alt: "A short video of hand-wrapped soaps packed in a box" },
  { id: "day-creams", src: "/images/gallery/day-creams.webp", w: 1250, h: 1500, tape: "blush",
    caption: "Day cream sets, sealed by hand", alt: "Day cream jars packed with soaps in clear foil pouches" },
  { id: "table-orders", src: "/images/gallery/table-orders.webp", w: 1500, h: 808, tape: "olive",
    caption: "A table full of orders in the making", alt: "A table covered with facial kit jars in pouches, soaps and bottles" },
  { id: "face-wash-making", src: "/images/gallery/face-wash-making-poster.webp", w: 478, h: 860, tape: "sun", video: "/videos/face-wash-making.mp4",
    caption: "Press play: mulethi face wash with flaxseed", alt: "A short video of mulethi and flaxseed face wash being stirred in a steel pot" },
  { id: "gp-shampoos", src: "/images/gallery/gp-shampoos.webp", w: 1007, h: 1500, tape: "sun",
    caption: "Shampoos wearing the GP Herbal label", alt: "Shampoo bottles with GP Herbal labels, wax powder pouches and soaps" },
  { id: "wax-and-kits", src: "/images/gallery/wax-and-kits.webp", w: 1353, h: 1500, tape: "coral",
    caption: "Wax powder, facial kits and soaps", alt: "Numbered facial kit jars in pouches, a wax powder pouch and soaps on a table" },
  { id: "packing-table", src: "/images/gallery/packing-table.webp", w: 1333, h: 1500, tape: "olive",
    caption: "At the packing table, filling and sealing", alt: "A bottle of lotion on the packing table beside the sealing machine" },
  { id: "shampoo-bottles-pump", src: "/images/gallery/shampoo-bottles-pump-poster.webp", w: 478, h: 850, tape: "blush", video: "/videos/shampoo-bottles-pump.mp4",
    caption: "Press play: bottles, bottles and more bottles", alt: "A short video looking down on rows of filled shampoo bottles with white pumps" },
  { id: "fresh-batch", src: "/images/gallery/fresh-batch.webp", w: 1067, h: 1500, tape: "blush",
    caption: "A new batch, filled and capped", alt: "A pump bottle filled with creamy white lotion" },
];
