import { createContext, useContext, useState, ReactNode } from "react";

export interface Review {
  id: string;
  productSlug: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
}

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, "id" | "date">) => void;
  getReviewsForProduct: (productSlug: string) => Review[];
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("blossom-reviews");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const addReview = (review: Omit<Review, "id" | "date">) => {
    const newReview: Review = {
      ...review,
      id: `review-${Date.now()}`,
      date: new Date().toISOString(),
    };
    setReviews((prev) => {
      const updated = [newReview, ...prev];
      localStorage.setItem("blossom-reviews", JSON.stringify(updated));
      return updated;
    });
  };

  const getReviewsForProduct = (productSlug: string) => {
    return reviews.filter((r) => r.productSlug === productSlug);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, getReviewsForProduct }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const ctx = useContext(ReviewContext);
  if (!ctx) throw new Error("useReviews must be used within ReviewProvider");
  return ctx;
};