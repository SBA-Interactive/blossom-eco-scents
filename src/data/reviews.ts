export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  product: string;
}

export const customerReviews: CustomerReview[] = [
  {
    id: "rev1",
    author: "Maria K.",
    rating: 5,
    comment: "This has become my signature scent. The citrus notes are so refreshing and last all day. I love that it's made from upcycled ingredients!",
    product: "Citrus Bloom",
  },
  {
    id: "rev2",
    author: "Elena P.",
    rating: 5,
    comment: "Perfect for date nights! My boyfriend always compliments this scent. So romantic and elegant.",
    product: "Petal Dew",
  },
  {
    id: "rev3",
    author: "Alex T.",
    rating: 5,
    comment: "Fresh and clean, perfect for the gym or after a workout. Very refreshing!",
    product: "Verde Zest",
  },
  {
    id: "rev4",
    author: "John D.",
    rating: 5,
    comment: "Great scent and I love that it's made from upcycled ingredients. Win-win!",
    product: "Citrus Bloom",
  },
  {
    id: "rev5",
    author: "Sarah M.",
    rating: 4,
    comment: "Beautiful packaging and even better scent. Will definitely repurchase!",
    product: "Petal Dew",
  },
  {
    id: "rev6",
    author: "David L.",
    rating: 5,
    comment: "Best investment I've made. Gets me compliments every time I wear it.",
    product: "Verde Zest",
  },
];

export const getRandomReviews = (count: number): CustomerReview[] => {
  const shuffled = [...customerReviews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};