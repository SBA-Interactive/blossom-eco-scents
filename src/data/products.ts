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
    faqs: [
      {
        question: "What does Ocean Breeze smell like?",
        answer: "Ocean Breeze is like standing on a pristine beach at sunrise — crisp sea air fills your lungs while warm driftwood grounds you to shore. It's not a typical 'ocean' scent (no synthetic aquatic notes here). Instead, it's natural marine essence paired with woody depth.",
      },
      {
        question: "Is this similar to typical 'aquatic' fragrances?",
        answer: "Not at all! Most aquatic fragrances use synthetic calone (artificial watermelon note). Ocean Breeze uses real marine extract from sustainably harvested seaweed and kelp, giving it authenticity and depth that synthetic versions can't match.",
      },
      {
        question: "When is the best time to wear Ocean Breeze?",
        answer: "Ocean Breeze is incredibly versatile. It's perfect for summer days, outdoor adventures, gym workouts, or any time you want to feel refreshed. It also works beautifully in formal settings — the driftwood adds sophistication.",
      },
      {
        question: "How long does the scent last?",
        answer: "Our fragrances are designed to last 6-8 hours on the skin. The marine top notes provide initial freshness, while musk and driftwood create a lasting impression that evolves beautifully throughout the day.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "How is the 100ml version different?",
        answer: "The 100ml Ocean Breeze features enhanced concentrations of driftwood and white musk, creating a longer-lasting fragrance that maintains its complexity throughout the day.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "What does Vanilla Skies smell like?",
        answer: "Vanilla Skies opens with warm vanilla — not synthetic, but real vanilla bean absolute. The coconut adds a creamy, tropical depth without being 'sunscreen-y'. Amber provides a golden warmth that lingers beautifully.",
      },
      {
        question: "Is this too sweet?",
        answer: "Not at all! Vanilla Skies is sophisticated vanilla — think high-end vanilla extract, not birthday cake frosting. Coconut adds creaminess without sweetness, making it suitable for everyday wear.",
      },
      {
        question: "Why is it tagged as BESTSELLER?",
        answer: "Vanilla Skies has became our most popular fragrance within months of launch. Customers love its unique take on vanilla — warm, comforting, but never overwhelming. It's the perfect 'signature scent' for those who want something distinctive.",
      },
      {
        question: "When is the best time to wear Vanilla Skies?",
        answer: "Vanilla Skies is perfect for cooler months, date nights, or any time you want to feel comforted. It's also fantastic for layering with other scents for a personalized signature.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "How is the 100ml version different?",
        answer: "The 100ml features additional vanilla absolute and a touch of Madagascar vanilla, creating a richer, more complex fragrance that lasts all day.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "What does Midnight Jasmine smell like?",
        answer: "Midnight Jasmine is elegance in a bottle. The jasmine is rich and heady — not light or delicate, but deeply floral. Sandalwood provides a creamy, woody base, while tonka adds warmth that's absolutely addictive.",
      },
      {
        question: "Is this too strong?",
        answer: "Midnight Jasmine has excellent sillage — people will notice when you're near, but it'snever overwhelming. It's designed to draw compliments, not dominate a room.",
      },
      {
        question: "When should I wear this?",
        answer: "This is your evening signature — perfect for date nights, dinners, or any occasion where you want to make an impression. It's also wonderful for special events.",
      },
      {
        question: "Is this similar to other jasmine fragrances?",
        answer: "Most jasmine fragrances are light and daytime-appropriate. Midnight Jasmine is deeper, more intense — designed specifically for evening wear.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "How is the 100ml version different?",
        answer: "The 100ml features double jasmine concentration and additional Mysore sandalwood, creating an exceptionally long-lasting and luxurious fragrance.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "What does Amber Woods smell like?",
        answer: "Amber Woods opens with rich amber — warm, resinous, and immediately commanding. Cedarwood emerges as it settles, adding sophistication. Leather provides a subtle edge that makes it uniquely bold.",
      },
      {
        question: "Is this too masculine?",
        answer: "While Amber Woods has traditionally masculine notes, it's designed to be inclusive. Many women wear it for its bold, sophisticated character. Fragrance has no gender.",
      },
      {
        question: "Why is it tagged as BESTSELLER?",
        answer: "Amber Woods has became incredibly popular with our customers who want something bold and distinctive. It's the perfect 'power scent' for important meetings or events.",
      },
      {
        question: "When is the best time to wear Amber Woods?",
        answer: "Amber Woods is perfect for professional settings, evening events, or any time you want to make a strong impression.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes! Our formulas are free from harsh chemicals, parabens, and synthetic fragrances. However, we recommend doing a patch test first if you have very sensitive skin.",
      },
    ],
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
    faqs: [
      {
        question: "How is the 100ml version different?",
        answer: "The 100ml features additional cedarwood and vetiver, creating a longer-lasting, more commanding presence.",
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
