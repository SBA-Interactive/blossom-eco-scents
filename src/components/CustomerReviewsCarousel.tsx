import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { CustomerReview } from "@/data/reviews";
import { useLanguage } from "@/context/LanguageContext";

interface CustomerReviewsCarouselProps {
  reviews: CustomerReview[];
  autoPlayInterval?: number;
}

const CustomerReviewsCarousel = ({ reviews, autoPlayInterval = 5000 }: CustomerReviewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (!autoPlayInterval || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  if (reviews.length === 0) return null;

  const currentReview = reviews[currentIndex];

  return (
    <div className="relative">
      {/* Featured Review */}
      <div className="relative overflow-hidden bg-card rounded-sm p-6 md:p-8 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < currentReview.rating
                      ? "fill-accent text-accent"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>
            <blockquote className="font-body text-lg text-foreground mb-4 max-w-2xl">
              "{currentReview.comment}"
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-display text-lg text-foreground">
                {currentReview.author}
              </p>
              <p className="font-body text-xs text-muted-foreground">
                {currentReview.product}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {reviews.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {reviews.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? "bg-accent" : "bg-muted"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerReviewsCarousel;