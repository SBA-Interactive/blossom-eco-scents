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
  images?: string[];
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

export const products: Product[] = [
  // Citrus Bloom
  {
    slug: "citrus-bloom-50ml",
    name: "Citrus Bloom",
    description: "Bright orange & grapefruit peel notes with a warm amber finish. A vibrant, uplifting scent perfect for everyday wear.",
    longDescription: "Citrus Bloom captures the essence of freshly peeled oranges and grapefruits, blended with a warm amber base that lingers throughout the day. This vibrant fragrance is crafted from upcycled citrus peels, making it both luxurious and sustainable. Perfect for those who want an uplifting, energising scent for everyday wear. The top notes burst with zesty orange and grapefruit, while the heart reveals subtle floral undertones. The amber finish grounds the fragrance, giving it depth and longevity.",
    price: 48,
    size: "50ml",
    notes: "Orange, Grapefruit, Amber",
    ingredients: "Upcycled orange peel oil, grapefruit extract, amber resin, jojoba carrier oil, vitamin E",
    image: "perfume_citrus_bloom.webp",
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
    slug: "citrus-bloom-100ml",
    name: "Citrus Bloom",
    description: "The full-size experience. Same bright orange & grapefruit peel notes with deeper complexity.",
    longDescription: "The full-size Citrus Bloom delivers the same beloved orange and grapefruit character with added depth and complexity. The larger format allows for a more generous application, and the extended formula features deeper amber notes that evolve beautifully over hours. This is the definitive Citrus Bloom experience — bolder, richer, and designed to make a lasting impression from morning to night.",
    price: 78,
    size: "100ml",
    notes: "Orange, Grapefruit, Amber",
    ingredients: "Upcycled orange peel oil, grapefruit extract, amber resin, jojoba carrier oil, vitamin E, cedarwood oil",
    image: "perfume_citrus_bloom.webp",
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
    slug: "citrus-bloom-150ml",
    name: "Citrus Bloom",
    description: "The ultimate citrus experience. Maximum intensity with longest-lasting projection.",
    longDescription: "The 150ml Citrus Bloom is the ultimate expression of citrus luxury. This generous format features our most concentrated formula, with enhanced citrus oil and extended amber dry-down. Perfect for those who never want to run out of their favorite scent. The bottle is designed to make a statement on any vanity.",
    price: 108,
    size: "150ml",
    notes: "Orange, Grapefruit, Amber, Cedarwood",
    ingredients: "Upcycled orange peel oil, grapefruit extract, amber resin, cedarwood oil, jojoba carrier oil, vitamin E, bergamot oil",
    image: "perfume_citrus_bloom.webp",
    specifications: {
      volume: "150ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  // Tropical Sun
  {
    slug: "tropical-sun-50ml",
    name: "Tropical Sun",
    description: "Exotic mango and passion fruit with a golden amber base. Warm, summery bliss.",
    longDescription: "Tropical Sun captures the essence of a perfect summer day — sun-ripened mangoes, passion fruit pulp, and a hint of coconut, all warmed by golden amber. This exotic fragrance transports you to tropical paradises with every spray. The mango provides sweet, juicy top notes, while the amber creates a lingering warmth that reminds you of beach sunsets.",
    price: 52,
    size: "50ml",
    notes: "Mango, Passion Fruit, Amber",
    ingredients: "Mango extract, passion fruit oil, amber resin, coconut oil, jojoba carrier oil, vitamin E",
    image: "perfume_tropical_sun.webp",
    images: ["perfume_tropical_sun.webp", "product_poster_tropical_sun.webp"],
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
    slug: "tropical-sun-100ml",
    name: "Tropical Sun",
    description: "The full-size tropical escape. Deeper mango with enhanced longevity.",
    longDescription: "The full-size Tropical Sun delivers the same beloved island character with enhanced depth and longevity. Additional mango concentration and coconut oil create a richer, more indulgent experience. This is the definitive Tropical Sun for those who want to carry a piece of paradise with them all day.",
    price: 85,
    size: "100ml",
    notes: "Mango, Passion Fruit, Coconut, Amber",
    ingredients: "Mango extract, passion fruit oil, coconut oil, amber resin, vanilla absolute, jojoba oil",
    image: "perfume_tropical_sun.webp",
    images: ["perfume_tropical_sun.webp", "product_poster_tropical_sun.webp"],
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
    slug: "tropical-sun-150ml",
    name: "Tropical Sun",
    description: "The ultimate tropical luxury. Maximum projection with exotic depth.",
    longDescription: "The 150ml Tropical Sun is the ultimate tropical fragrance experience. Our most concentrated formula features double mango extract, additional passion fruit oil, and an enhanced amber base. Perfect for those who want to bask in tropical luxury all day long.",
    price: 115,
    size: "150ml",
    notes: "Mango, Passion Fruit, Coconut, Vanilla, Amber",
    ingredients: "Mango extract, passion fruit oil, coconut oil, vanilla absolute, amber resin, jojoba oil, vitamin E",
    image: "perfume_tropical_sun.webp",
    images: ["perfume_tropical_sun.webp", "product_poster_tropical_sun.webp"],
    specifications: {
      volume: "150ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  // Berry Mist
  {
    slug: "berry-mist-50ml",
    name: "Berry Mist",
    description: "Wild berries and soft musk. A playful, romantic fragrance.",
    longDescription: "Berry Mist captures the essence of wandering through a sun-drenched berry patch — wild strawberries, ripe blackberries, and a whisper of crushed lavender. This playful, romantic fragrance balances sweet fruit with soft musk for a sophisticated finish. Perfect for date nights and summer adventures.",
    price: 45,
    size: "50ml",
    notes: "Strawberry, Blackberry, Musk",
    ingredients: "Wild strawberry extract, blackberry oil, white musk, lavender essence, jojoba oil",
    image: "perfume_berry_mist.webp",
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
    slug: "berry-mist-100ml",
    name: "Berry Mist",
    description: "The full-size berry adventure. Richer fruit with extended wear.",
    longDescription: "The full-size Berry Mist offers the same delightful berry character with enhanced concentration and longevity. Additional strawberry and blackberry extracts create a more indulgent experience that lasts from morning to night. Perfect for those who can't get enough of nature's sweetest fruits.",
    price: 72,
    size: "100ml",
    notes: "Strawberry, Blackberry, Raspberry, Musk",
    ingredients: "Wild strawberry extract, blackberry oil, raspberry extract, white musk, jojoba oil, argan oil",
    image: "perfume_berry_mist.webp",
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
    slug: "berry-mist-150ml",
    name: "Berry Mist",
    description: "Maximum berry indulgence. Intense sweetness with all-day projection.",
    longDescription: "The 150ml Berry Mist is the ultimate berry fragrance experience. Our most concentrated formula features triple berry extraction and an enhanced musk base for exceptional longevity. Perfect for those who want to immerse themselves in nature's sweetest bounty.",
    price: 98,
    size: "150ml",
    notes: "Strawberry, Blackberry, Raspberry, Vanilla, Musk",
    ingredients: "Wild strawberry extract, blackberry oil, raspberry extract, vanilla absolute, white musk, jojoba oil",
    image: "perfume_berry_mist.webp",
    specifications: {
      volume: "150ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  // Forest Dew
  {
    slug: "forest-dew-50ml",
    name: "Forest Dew",
    description: "Fresh pine and cedarwood with a cool mint finish. Nature's morning embrace.",
    longDescription: "Forest Dew captures the pristine essence of a forest at dawn — towering pines, ancient cedars, and the cool, refreshing mist that blankets the woodland floor. This grounding fragrance brings the serenity of nature to your everyday routine. Perfect for those who seek a connection to the natural world.",
    price: 48,
    size: "50ml",
    notes: "Pine, Cedarwood, Mint",
    ingredients: "Pine essential oil, cedarwood oil, mint extract, eucalyptus oil, jojoba carrier oil",
    image: "perfume_forest_dew.webp",
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
    slug: "forest-dew-100ml",
    name: "Forest Dew",
    description: "The full-size forest journey. Deeper woods with enhanced complexity.",
    longDescription: "The full-size Forest Dew delivers the same beloved woodland character with enhanced depth and complexity. Additional cedarwood and a touch of vetiver create a richer, more sophisticated fragrance that evolves beautifully throughout the day. Perfect for those who appreciate the subtle complexities of nature.",
    price: 78,
    size: "100ml",
    notes: "Pine, Cedarwood, Vetiver, Mint",
    ingredients: "Pine essential oil, cedarwood oil, vetiver root oil, mint extract, jojoba oil, hemp seed oil",
    image: "perfume_forest_dew.webp",
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
    slug: "forest-dew-150ml",
    name: "Forest Dew",
    description: "Ultimate forest immersion. Maximum depth with all-day grounding presence.",
    longDescription: "The 150ml Forest Dew is the ultimate woodland fragrance experience. Our most concentrated formula features triple pine extraction, enhanced cedarwood, and an extended vetiver base for exceptional longevity. Perfect for those who want to carry the forest with them wherever they go.",
    price: 105,
    size: "150ml",
    notes: "Pine, Cedarwood, Vetiver, Eucalyptus, Mint",
    ingredients: "Pine essential oil, cedarwood oil, vetiver root oil, eucalyptus oil, mint extract, jojoba oil, hemp seed oil",
    image: "perfume_forest_dew.webp",
    specifications: {
      volume: "150ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  // Garden Peel
  {
    slug: "garden-peel-50ml",
    name: "Garden Peel",
    description: "Crisp cucumber and fresh herbs with a green tea finish. Clean and energising.",
    longDescription: "Garden Peel captures the essence of a thriving kitchen garden — crisp cucumbers, aromatic basil, and the subtle warmth of green tea. This clean, energising fragrance is perfect for those who lead an active lifestyle and want a scent that keeps up. The green tea base provides a calming finish that grounds the fragrance.",
    price: 48,
    size: "50ml",
    notes: "Cucumber, Basil, Green Tea",
    ingredients: "Cucumber extract, basil essential oil, green tea extract, aloe vera oil, sweet almond oil",
    image: "perfume_garden_peel.webp",
    tag: "BESTSELLER",
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
    slug: "garden-peel-100ml",
    name: "Garden Peel",
    description: "The full-size garden refresh. Deeper herbs with extended clarity.",
    longDescription: "The full-size Garden Peel delivers the same beloved garden character with enhanced depth and longevity. Additional basil and a touch of sage create a more complex fragrance that evolves beautifully throughout the day. Perfect for those who appreciate the subtle complexities of an herb garden.",
    price: 78,
    size: "100ml",
    notes: "Cucumber, Basil, Sage, Green Tea",
    ingredients: "Cucumber extract, basil essential oil, sage oil, green tea extract, aloe vera oil, sweet almond oil",
    image: "perfume_garden_peel.webp",
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
    slug: "garden-peel-150ml",
    name: "Garden Peel",
    description: "Ultimate garden immersion. Maximum freshness with all-day clarity.",
    longDescription: "The 150ml Garden Peel is the ultimate garden fragrance experience. Our most concentrated formula features triple cucumber extraction, enhanced basil, and an extended green tea base for exceptional clarity and longevity. Perfect for those who want to immerse themselves in nature's freshest bounty.",
    price: 105,
    size: "150ml",
    notes: "Cucumber, Basil, Sage, Green Tea, Aloe",
    ingredients: "Cucumber extract, basil essential oil, sage oil, green tea extract, aloe vera oil, sweet almond oil, mint extract",
    image: "perfume_garden_peel.webp",
    specifications: {
      volume: "150ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [],
  },
  // Rose Petal
  {
    slug: "rose-petal-50ml",
    name: "Rose Petal",
    description: "Soft rose-petal essence blended with peachy undertones. Delicate and romantic.",
    longDescription: "Rose Petal is a delicate, romantic fragrance that evokes the feeling of walking through a rose garden at dawn. The soft rose-petal essence is complemented by peach undertones and a subtle vanilla warmth. Each bottle captures the beauty of nature's most elegant flower, sustainably sourced and lovingly crafted.",
    price: 52,
    size: "50ml",
    notes: "Rose, Peach, Vanilla",
    ingredients: "Rose petal extract, peach kernel oil, vanilla absolute, coconut oil, rosehip seed oil",
    image: "perfume_rose_petal.webp",
    images: ["perfume_rose_petal.webp", "product_poster_rose_petal.webp"],
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    reviews: [
      {
        id: "rp1",
        author: "Elena P.",
        rating: 5,
        date: "2025-12-20",
        title: "Romantic and elegant",
        comment: "Perfect for date nights! My boyfriend always compliments this scent.",
      },
    ],
  },
  {
    slug: "rose-petal-100ml",
    name: "Rose Petal",
    description: "The full-size rose experience. Richer, longer-lasting with a musk base.",
    longDescription: "The full-size Rose Petal takes the beloved rose and peach combination to new heights with an added musk base note. This richer formulation offers exceptional longevity, lasting well into the evening. The musk adds a sensual depth that makes this version perfect for special occasions and romantic evenings.",
    price: 85,
    size: "100ml",
    notes: "Rose, Peach, Musk",
    ingredients: "Rose petal extract, peach kernel oil, white musk, coconut oil, rosehip seed oil, evening primrose oil",
    image: "perfume_rose_petal.webp",
    images: ["perfume_rose_petal.webp", "product_poster_rose_petal.webp"],
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
    slug: "rose-petal-150ml",
    name: "Rose Petal",
    description: "Ultimate rose luxury. Maximum romance with all-day elegance.",
    longDescription: "The 150ml Rose Petal is the ultimate romantic fragrance experience. Our most concentrated formula features double rose extract, enhanced peach oil, and an extended musk base for exceptional longevity. Perfect for those who want to immerse themselves in timeless elegance.",
    price: 115,
    size: "150ml",
    notes: "Rose, Peach, Musk, Vanilla",
    ingredients: "Rose petal extract, peach kernel oil, white musk, vanilla absolute, coconut oil, rosehip seed oil, evening primrose oil",
    image: "perfume_rose_petal.webp",
    images: ["perfume_rose_petal.webp", "product_poster_rose_petal.webp"],
    specifications: {
      volume: "150ml",
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