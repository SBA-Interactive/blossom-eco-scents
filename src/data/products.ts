export interface Product {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  size: string;
  notes: string;
  ingredients: string;
  image: string;
}

const placeholder = "/placeholder.svg";

export const products: Product[] = [
  {
    slug: "citrus-bloom-50ml",
    name: "Citrus Bloom",
    description: "Bright orange & grapefruit peel notes with a warm amber finish. A vibrant, uplifting scent perfect for everyday wear.",
    longDescription: "Citrus Bloom captures the essence of freshly peeled oranges and grapefruits, blended with a warm amber base that lingers throughout the day. This vibrant fragrance is crafted from upcycled citrus peels, making it both luxurious and sustainable. Perfect for those who want an uplifting, energising scent for everyday wear. The top notes burst with zesty orange and grapefruit, while the heart reveals subtle floral undertones. The amber finish grounds the fragrance, giving it depth and longevity.",
    price: 48,
    size: "50ml",
    notes: "Orange, Grapefruit, Amber",
    ingredients: "Upcycled orange peel oil, grapefruit extract, amber resin, jojoba carrier oil, vitamin E",
    image: placeholder,
  },
  {
    slug: "petal-dew-50ml",
    name: "Petal Dew",
    description: "Soft rose-petal essence blended with peach skin undertones. Delicate and romantic, ideal for evening occasions.",
    longDescription: "Petal Dew is a delicate, romantic fragrance that evokes the feeling of walking through a rose garden at dawn. The soft rose-petal essence is complemented by peach skin undertones and a subtle vanilla warmth. Each bottle captures the beauty of nature's most elegant flower, sustainably sourced and lovingly crafted. The opening is fresh and dewy, transitioning into a heart of rich rose absolute before settling into a creamy vanilla dry-down.",
    price: 52,
    size: "50ml",
    notes: "Rose, Peach, Vanilla",
    ingredients: "Rose petal extract, peach kernel oil, vanilla absolute, coconut oil, rosehip seed oil",
    image: placeholder,
  },
  {
    slug: "verde-zest-50ml",
    name: "Verde Zest",
    description: "Lime peel and crushed herbs for a crisp, invigorating scent. Clean and energising, perfect for an active lifestyle.",
    longDescription: "Verde Zest is a crisp, invigorating fragrance that combines freshly pressed lime peel with aromatic herbs. This clean, green scent is designed for those who lead an active lifestyle and want a fragrance that keeps up. The lime provides an instant burst of freshness, while basil and sage add herbal complexity. It's the perfect companion for morning routines, outdoor adventures, and everyday confidence.",
    price: 48,
    size: "50ml",
    notes: "Lime, Basil, Sage",
    ingredients: "Cold-pressed lime peel oil, basil leaf extract, sage essential oil, sweet almond oil, argan oil",
    image: placeholder,
  },
  {
    slug: "citrus-bloom-100ml",
    name: "Citrus Bloom",
    description: "The full-size experience. Same bright orange & grapefruit peel notes with deeper complexity.",
    longDescription: "The full-size Citrus Bloom delivers the same beloved orange and grapefruit character with added depth and complexity. The larger format allows for a more generous application, and the extended formula features deeper amber notes that evolve beautifully over hours. This is the definitive Citrus Bloom experience — bolder, richer, and designed to make a lasting impression from morning to night.",
    price: 78,
    size: "100ml",
    notes: "Orange, Grapefruit, Amber",
    ingredients: "Upcycled orange peel oil, grapefruit extract, amber resin, jojoba carrier oil, vitamin E, cedarwood oil",
    image: placeholder,
  },
  {
    slug: "petal-dew-100ml",
    name: "Petal Dew",
    description: "The full-size rose-petal essence. Richer, longer-lasting, with an added musk base note.",
    longDescription: "The full-size Petal Dew takes the beloved rose and peach combination to new heights with an added musk base note. This richer formulation offers exceptional longevity, lasting well into the evening. The musk adds a sensual depth that makes this version perfect for special occasions and romantic evenings. Every spray tells a story of sustainable luxury and natural beauty.",
    price: 85,
    size: "100ml",
    notes: "Rose, Peach, Musk",
    ingredients: "Rose petal extract, peach kernel oil, white musk, coconut oil, rosehip seed oil, evening primrose oil",
    image: placeholder,
  },
  {
    slug: "verde-zest-100ml",
    name: "Verde Zest",
    description: "The full-size herbal freshness. Deeper lime and herb layers that evolve throughout the day.",
    longDescription: "The full-size Verde Zest offers a deeper, more complex interpretation of our signature herbal fragrance. The addition of vetiver creates an earthy foundation that grounds the lime and basil top notes. This version evolves beautifully throughout the day — opening bright and fresh, developing into aromatic complexity, and settling into a warm, woody finish. Perfect for those who appreciate fragrances that tell a story.",
    price: 78,
    size: "100ml",
    notes: "Lime, Basil, Vetiver",
    ingredients: "Cold-pressed lime peel oil, basil leaf extract, vetiver root oil, sweet almond oil, argan oil, hemp seed oil",
    image: placeholder,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
