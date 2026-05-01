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
  tag?: "BESTSELLER" | "NEW" | "LIMITED" | "SALE";
  priority?: number;
  specifications: {
    volume: string;
    shelfLife: string;
    storage: string;
    crueltyFree: boolean;
    vegan: boolean;
  };
  reviews: {
    id: string;
    author: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
  }[];
}

const placeholder = "/placeholder.jpg";

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
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [
      {
        id: "cb1",
        author: "Maria K.",
        rating: 5,
        date: "2025-12-15",
        title: "My everyday go-to!",
        comment: "This has become my signature scent. The citrus notes are so refreshing and last all day.",
      },
      {
        id: "cb2",
        author: "John D.",
        rating: 5,
        date: "2025-11-28",
        title: "Love the sustainability angle",
        comment: "Great scent and I love that it's made from upcycled ingredients. Win-win!",
      },
    ],
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
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [
      {
        id: "pd1",
        author: "Elena P.",
        rating: 5,
        date: "2025-12-20",
        title: "Romantic and elegant",
        comment: "Perfect for date nights! My boyfriend always compliments this scent.",
      },
    ],
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
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [
      {
        id: "vz1",
        author: "Alex T.",
        rating: 4,
        date: "2025-12-10",
        title: "Fresh and clean",
        comment: "Perfect for the gym or after a workout. Very refreshing!",
      },
    ],
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
    specifications: {
      volume: "100ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
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
    specifications: {
      volume: "100ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
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
    specifications: {
      volume: "100ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
},
    reviews: [],
  },
  {
    slug: "ocean-breeze-50ml",
    name: "Ocean Breeze",
    description: "Crisp sea salt and driftwood evoke endless horizons. A refreshing, aquatic scent for the free-spirited.",
    longDescription: "Ocean Breeze captures the essence of coastal mornings — the salt-kissed air, driftwood logs washed ashore, and the endless expanse of the open sea. This aquatic fragrance blends marine notes with driftwood warmth for a sophisticated take on classic beach scents. Perfect for those who long for the ocean, whether they're near or far. The sea salt provides an immediate burst of freshness, while driftwood and musk create a lingering warmth that reminds you of bonfires on the beach.",
    price: 45,
    size: "50ml",
    notes: "Sea Salt, Driftwood, Musk",
    ingredients: "Marine extract, driftwood oil, white musk, seaweed essence, jojoba oil",
    image: placeholder,
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  {
    slug: "ocean-breeze-100ml",
    name: "Ocean Breeze",
    description: "Crisp sea salt and driftwood evoke endless horizons. A refreshing, aquatic scent for the free-spirited.",
    longDescription: "The full-size Ocean Breeze delivers the same coastal elegance with enhanced longevity. Made with additional driftwood and white musk concentrations, this version is designed for those who want the ocean to stay with them all day and night. Same authentic marine essence, now in its most concentrated form.",
    price: 72,
    size: "100ml",
    notes: "Sea Salt, Driftwood, Musk",
    ingredients: "Marine extract, driftwood oil, white musk, seaweed essence, cedarwood oil, jojoba oil",
    image: placeholder,
    specifications: {
      volume: "100ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  {
    slug: "vanilla-skies-50ml",
    name: "Vanilla Skies",
    description: "Warm vanilla bean blended with creamy coconut and golden amber. Comfort in a bottle.",
    longDescription: "Vanilla Skies is a warm embrace — the comforting scent of fresh vanilla bean paired with tropical coconut and golden amber. This is not your typical sweet vanilla fragrance. It's sophisticated, warm, and addictive. Perfect for cooler weather or anyone who wants to feel wrapped in comfort. The vanilla provides warmth, coconut adds a subtle tropical creaminess, and amber anchors it all.",
    price: 50,
    size: "50ml",
    notes: "Vanilla Bean, Coconut, Amber",
    ingredients: "Vanilla absolute, coconut oil, amber resin, jojoba carrier oil, vitamin E",
    image: placeholder,
    tag: "BESTSELLER",
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [
      {
        id: "vs1",
        author: "Sophie M.",
        rating: 5,
        date: "2025-12-18",
        title: "My new signature scent",
        comment: "I was hesitant about vanilla but this is incredible. Not sweet at all, just warm and sophisticated.",
      },
      {
        id: "vs2",
        author: "David L.",
        rating: 5,
        date: "2025-11-15",
        title: "Best purchase ever",
        comment: "Got this for my wife and she loved it so much she ordered another one for herself!",
      },
    ],
  },
  {
    slug: "vanilla-skies-100ml",
    name: "Vanilla Skies",
    description: "Warm vanilla bean blended with creamy coconut and golden amber. Comfort in a bottle.",
    longDescription: "The full-size Vanilla Skies offers the same beloved warm embrace in a more generous format. Enhanced with additional vanilla absolute and a touch of Madagascar vanilla for added depth. This is the definitive Vanilla Skies experience.",
    price: 82,
    size: "100ml",
    notes: "Vanilla Bean, Coconut, Amber",
    ingredients: "Vanilla absolute, coconut oil, amber resin, Madagascar vanilla extract, jojoba oil",
    image: placeholder,
    specifications: {
      volume: "100ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  {
    slug: "midnight-jasmine-50ml",
    name: "Midnight Jasmine",
    description: "Intoxicating jasmine paired with creamy sandalwood and tonka bean. For evening elegance.",
    longDescription: "Midnight Jasmine is an invitation to the night — intoxicating jasmine blooms at midnight, paired with creamy sandalwood and the warm richness of tonka bean. This is a fragrance for evenings, romance, and making memories. Not subtle, but elegant. The jasmine provides floral depth, sandalwood adds warmth, and tonka creates an addictive sweetness that draws people closer.",
    price: 55,
    size: "50ml",
    notes: "Jasmine, Sandalwood, Tonka",
    ingredients: "Jasmine absolute, sandalwood oil, tonka bean extract, coconut oil, vitamin E",
    image: placeholder,
    tag: "NEW",
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  {
    slug: "midnight-jasmine-100ml",
    name: "Midnight Jasmine",
    description: "Intoxicating jasmine paired with creamy sandalwood and tonka bean. For evening elegance.",
    longDescription: "The full-size Midnight Jasmine is our most luxurious evening fragrance. Enhanced with double jasmine concentration and additional sandalwood for exceptional longevity. This is the ultimate expression of evening elegance.",
    price: 90,
    size: "100ml",
    notes: "Jasmine, Sandalwood, Tonka",
    ingredients: "Jasmine absolute, sandalwood oil, tonka bean extract, Mysore sandalwood, coconut oil",
    image: placeholder,
    specifications: {
      volume: "100ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  {
    slug: "amber-woods-50ml",
    name: "Amber Woods",
    description: "Rich amber meets cedarwood in a bold, masculine statement. Power and sophistication.",
    longDescription: "Amber Woods is confidence in a bottle — rich amber resin meets aged cedarwood for a bold, sophisticated fragrance. This is designed for those who lead, not follow. Not aggressively masculine, but undeniably strong. The amber provides warmth and depth, while cedarwood adds sophistication and longevity.",
    price: 52,
    size: "50ml",
    notes: "Amber, Cedarwood, Leather",
    ingredients: "Amber resin, cedarwood oil, leather extract, vetiver, jojoba oil",
    image: placeholder,
    tag: "BESTSELLER",
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [
      {
        id: "aw1",
        author: "Michael R.",
        rating: 5,
        date: "2025-12-08",
        title: "My signature scent",
        comment: "I get compliments every time I wear this. Absolute game changer.",
      },
    ],
  },
  {
    slug: "amber-woods-100ml",
    name: "Amber Woods",
    description: "Rich amber meets cedarwood in a bold, masculine statement. Power and sophistication.",
    longDescription: "The full-size Amber Woods offers the same commanding presence in extended form. Enhanced with additional cedarwood and a touch of vetiver for those who want their presence to be remembered.",
    price: 85,
    size: "100ml",
    notes: "Amber, Cedarwood, Leather",
    ingredients: "Amber resin, cedarwood oil, leather extract, vetiver, patchouli, jojoba oil",
    image: placeholder,
    specifications: {
      volume: "100ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
