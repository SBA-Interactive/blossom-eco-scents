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
  specifications: {
    volume: string;
    shelfLife: string;
    storage: string;
    crueltyFree: boolean;
    vegan: boolean;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  reviews: {
    id: string;
    author: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
  }[];
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
    specifications: {
      volume: "50ml",
      shelfLife: "2 years from manufacture date",
      storage: "Store in a cool, dry place away from direct sunlight",
      crueltyFree: true,
      vegan: true,
    },
    faqs: [
      {
        question: "What does Citrus Bloom smell like?",
        answer: "Citrus Bloom opens with an invigorating burst of fresh orange and grapefruit, delivering that instant 'morning refresh' feeling. As it settles, you'll notice subtle floral undertones that add elegance, while the warm amber base provides a cozy, lingering finish that stays with you throughout the day.",
      },
      {
        question: "What ingredients create this scent?",
        answer: "We craft Citrus Bloom from upcycled citrus peels — orange peel oil extracted through cold-pressing, natural grapefruit extract, and rich amber resin. These are blended with jojoba carrier oil and vitamin E for a nourishing, skin-friendly formula that's 100% vegan and cruelty-free.",
      },
      {
        question: "How does the upcycling process work?",
        answer: "We partner with local markets and juice bars to collect fruit peels that would otherwise be discarded. These peels undergo a cold-press extraction process to capture their natural oils, creating premium fragrance ingredients while reducing waste. Each bottle represents a commitment to circular economy.",
      },
      {
        question: "What makes the amber note special?",
        answer: "The amber in Citrus Bloom isn't just any amber — it's warm amber resin that adds depth and longevity without being heavy. It grounds the bright citrus notes, preventing the scent from becoming too sharp, and creates that beautiful dry-down experience that keeps you smelling great for hours.",
      },
      {
        question: "When is the best time to wear Citrus Bloom?",
        answer: "Citrus Bloom is perfect for everyday wear, especially mornings when you need an energising boost. It's ideal for work, weekend errands, or any time you want to feel refreshed and uplifting. The bright citrus notes are particularly wonderful in spring and summer, but work beautifully year-round.",
      },
      {
        question: "How do I apply this fragrance?",
        answer: "Spray 2-3 times on pulse points such as wrists, neck, and behind ears. For best results, apply to dry skin after showering when your skin is clean and pores are open. Avoid rubbing — let the fragrance settle naturally.",
      },
      {
        question: "How long does the scent last?",
        answer: "Our fragrances are designed to last 6-8 hours on the skin. The amber base note helps anchor the scent, while the citrus top notes provide that initial burst. Longevity may vary based on skin type and environmental factors.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "What does Petal Dew smell like?",
        answer: "Petal Dew is a delicate, romantic journey through a rose garden at dawn. The opening is fresh and dewy, like morning mist on petals. The heart reveals rich rose absolute — not synthetic, but real petals captured in time. Peach kernel adds a soft, velvety sweetness that complements the rose without overpowering it, while subtle vanilla creates a warm, lingering embrace.",
      },
      {
        question: "Where do the rose petals come from?",
        answer: "Our rose petals are sustainably sourced from organic rose farms in Bulgaria and Turkey, known for producing the world's finest rose oil. We work directly with farmers who practice ethical harvesting — roses are hand-picked at dawn when their scent is most potent, ensuring the highest quality extraction.",
      },
      {
        question: "What makes Petal Dew romantic and elegant?",
        answer: "There's something timeless about rose — it's been the symbol of romance for centuries. Petal Dew captures this essence perfectly: it's not heavy or cloying, but instead light and sophisticated. The peach adds a modern, feminine touch while vanilla provides warmth without sweetness. It's the kind of fragrance that makes someone lean in closer.",
      },
      {
        question: "Is the vanilla note overwhelming?",
        answer: "Not at all! The vanilla in Petal Dew is a carefully measured absolute — not the sweet, cookie-like vanilla you might expect. It provides a creamy, sensual warmth that grounds the more volatile rose notes, creating a balanced fragrance that evolves beautifully. Think of it as a whisper, not a shout.",
      },
      {
        question: "How does peach complement the rose?",
        answer: "Peach kernel oil brings a soft, velvety quality that mirrors the texture of rose petals. It's not a fruity peach — it's a subtle, skin-like warmth that makes the rose feel more intimate and personal. Together, they create that 'your skin but better' effect that makes Petal Dew so special.",
      },
      {
        question: "How do I apply this fragrance?",
        answer: "Spray 2-3 times on pulse points such as wrists, neck, and behind ears. For best results, apply to dry skin after showering when your skin is clean and pores are open. Avoid rubbing — let the fragrance settle naturally.",
      },
      {
        question: "How long does the scent last?",
        answer: "Our fragrances are designed to last 6-8 hours on the skin. The vanilla and rose heart notes provide excellent longevity, while the initial dewy top notes fade to reveal a beautiful dry-down. Longevity may vary based on skin type and environmental factors.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "What does Verde Zest smell like?",
        answer: "Verde Zest is an instant burst of freshness — imagine freshly pressed lime juice on a summer afternoon. But it goes deeper: basil adds an aromatic, slightly peppery green note that gives complexity, while sage provides an earthy, calming undertone. It's clean, crisp, and undeniably energising.",
      },
      {
        question: "How does it feel so energising?",
        answer: "Lime is one of the most energising scents in existence — it's been used for centuries to boost mood and mental clarity. Combined with basil (known for its revitalising properties), Verde Zest creates an instant pick-me-up. It's like a deep breath of fresh air in fragrance form.",
      },
      {
        question: "Why is it good for active lifestyles?",
        answer: "Verde Zest was designed for those who move — from morning workouts to outdoor adventures. The crisp lime cuts through gym sweat, the basil keeps things sophisticated, and the overall effect is clean and confident. It's the perfect post-workout fragrance or morning wake-up call.",
      },
      {
        question: "What makes it different from other citrus scents?",
        answer: "Most citrus fragrances are just 'citrus' — bright and simple. Verde Zest has herbal depth from basil and sage that most competitor scents lack. It's not just lime — it's a whole green landscape. This complexity makes it suitable for both casual and polished settings.",
      },
      {
        question: "How do the herbs affect the fragrance?",
        answer: "Basil brings a slightly sweet, peppery quality that cuts through the lime's sharpness, while sage adds an earthy, grounding element. Together, they transform a simple lime scent into something sophisticated. The herbs also help the fragrance last longer by providing middle notes that stick around after the citrus fades.",
      },
      {
        question: "How do I apply this fragrance?",
        answer: "Spray 2-3 times on pulse points such as wrists, neck, and behind ears. For best results, apply to dry skin after showering when your skin is clean and pores are open. Avoid rubbing — let the fragrance settle naturally.",
      },
      {
        question: "How long does the scent last?",
        answer: "Our fragrances are designed to last 6-8 hours on the skin. The lime provides an immediate burst of freshness, while basil and sage provide lasting depth. Longevity may vary based on skin type and environmental factors.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "How is the 100ml version different?",
        answer: "The 100ml Citrus Bloom is our definitive, full-expression version. It features deeper amber notes and the addition of cedarwood, which adds woody warmth and exceptional longevity. This isn't just more liquid — it's a richer, more complex formulation designed to make a lasting impression from morning well into the night.",
      },
      {
        question: "What does the cedarwood add?",
        answer: "Cedarwood brings an earthy, grounding quality that complements the bright citrus beautifully. It doesn't change the core scent — instead, it adds a sophisticated base that makes the fragrance evolve throughout the day. You'll notice it especially in the dry-down, where it provides warmth and depth.",
      },
      {
        question: "Why does it last longer?",
        answer: "The 100ml version contains a higher concentration of base notes (amber and cedarwood) that stick to the skin longer than top notes. While the 50ml version is perfect for everyday, the 100ml is designed for those who want exceptional staying power — ideal for long workdays or evening events.",
      },
      {
        question: "Is it more intense than the 50ml?",
        answer: "Yes, but in a sophisticated way — not overwhelming. The additional cedarwood adds depth without making it heavy. If you loved the 50ml, the 100ml will feel like the 'director's cut' version — same DNA, but with more character and complexity.",
      },
      {
        question: "What does Citrus Bloom smell like?",
        answer: "Citrus Bloom opens with an invigorating burst of fresh orange and grapefruit, delivering that instant 'morning refresh' feeling. As it settles, you'll notice subtle floral undertones that add elegance, while the warm amber base provides a cozy, lingering finish that stays with you throughout the day.",
      },
      {
        question: "What ingredients create this scent?",
        answer: "We craft Citrus Bloom from upcycled citrus peels — orange peel oil extracted through cold-pressing, natural grapefruit extract, rich amber resin, and cedarwood oil. These are blended with jojoba carrier oil and vitamin E for a nourishing, skin-friendly formula that's 100% vegan and cruelty-free.",
      },
      {
        question: "When is the best time to wear this?",
        answer: "The 100ml Citrus Bloom is perfect for special occasions, long workdays, or whenever you want to make a statement. The enhanced longevity means you can apply in the morning and still smell great through dinner. It's equally appropriate for professional settings and evening events.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "How is the 100ml version different?",
        answer: "The 100ml Petal Dew is our most luxurious expression of this beloved fragrance. It features the addition of white musk — a clean, sensual note that adds exceptional depth and longevity. This version is designed for special occasions, romantic evenings, and anyone who wants their scent to make a lasting impression.",
      },
      {
        question: "What does white musk add?",
        answer: "White musk brings a clean, skin-like quality that's both modern and timeless. It amplifies the rose without making it heavy, and creates that intimate 'your skin but better' effect. It's the secret ingredient that makes the 100ml version perfect for evening wear — sophisticated, sensual, and unforgettable.",
      },
      {
        question: "Why does it last longer?",
        answer: "The white musk base note is incredibly long-lasting on the skin — it can stay for 12+ hours. Combined with the richer formulation, this makes the 100ml Petal Dew perfect for all-day wear or evening events where you want your scent to linger long after the night begins.",
      },
      {
        question: "Is it better for evening or daytime?",
        answer: "While the 50ml Petal Dew works beautifully for any time, the 100ml version truly shines in evening settings. The added musk gives it a sensual, sophisticated edge that's perfect for date nights, dinners, or any occasion where you want to feel extra special. It's your secret weapon for making memories.",
      },
      {
        question: "What does Petal Dew smell like?",
        answer: "Petal Dew is a delicate, romantic journey through a rose garden at dawn. The opening is fresh and dewy, like morning mist on petals. The heart reveals rich rose absolute — not synthetic, but real petals captured in time. Peach kernel adds a soft, velvety sweetness that complements the rose without overpowering it, while subtle vanilla creates a warm, lingering embrace.",
      },
      {
        question: "Where do the rose petals come from?",
        answer: "Our rose petals are sustainably sourced from organic rose farms in Bulgaria and Turkey, known for producing the world's finest rose oil. We work directly with farmers who practice ethical harvesting — roses are hand-picked at dawn when their scent is most potent.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "How is the 100ml version different?",
        answer: "The 100ml Verde Zest takes our signature herbal fragrance to new heights with the addition of vetiver root oil. This earthy, smoky note grounds the bright lime and creates a fragrance that evolves beautifully throughout the day — from morning freshness to evening sophistication.",
      },
      {
        question: "What does vetiver add to the scent?",
        answer: "Vetiver is known as 'the oil of tranquility' — it's earthy, smoky, and incredibly grounding. In Verde Zest, it provides a woody base that transforms the fragrance from 'fresh and fun' to 'sophisticated and layered'. You'll notice it especially in the dry-down, where it adds warmth and complexity.",
      },
      {
        question: "How does the fragrance evolve throughout the day?",
        answer: "The 100ml Verde Zest tells a story: it opens with an invigorating lime burst, develops into aromatic basil complexity, and settles into a warm, woody vetiver finish. Each stage is beautiful, making it perfect for those who appreciate fragrances that change and grow over hours.",
      },
      {
        question: "Why does it last longer?",
        answer: "Vetiver is one of the longest-lasting natural ingredients in perfumery. It can remain on the skin for 12+ hours, providing a beautiful base that keeps the lime and basil notes present throughout the day. This makes the 100ml version perfect for long workdays or outdoor adventures.",
      },
      {
        question: "What does Verde Zest smell like?",
        answer: "Verde Zest is an instant burst of freshness — imagine freshly pressed lime juice on a summer afternoon. But it goes deeper: basil adds an aromatic, slightly peppery green note that gives complexity, while sage and vetiver provide earthy, grounding undertones. It's clean, crisp, and undeniably energising.",
      },
      {
        question: "How does it feel so energising?",
        answer: "Lime is one of the most energising scents in existence — it's been used for centuries to boost mood and mental clarity. Combined with basil (known for its revitalising properties), Verde Zest creates an instant pick-me-up. It's like a deep breath of fresh air in fragrance form.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
    reviews: [],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
