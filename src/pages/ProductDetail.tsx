import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowLeft, ShoppingCart, Star, Droplets, Calendar, Warehouse, Heart as HeartIcon, Leaf, Package, Truck, RotateCcw, CreditCard, HelpCircle } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Tabs from "@radix-ui/react-tabs";
import Layout from "@/components/Layout";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { useReviews } from "@/context/ReviewContext";
import { toast } from "sonner";
import { BlurFade } from "@/components/ui/blur-fade";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const { addReview, getReviewsForProduct } = useReviews();

  const [reviewRating, setReviewRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center py-32">
          <h1 className="font-display text-3xl text-foreground mb-4">Product not found</h1>
          <button onClick={() => navigate("/products")} className="text-primary underline font-body">
            Back to Products
          </button>
        </div>
      </Layout>
    );
  }

  const pid = `${product.name}-${product.size}`;
  const wishlisted = isWishlisted(pid);

  const handleAddToCart = () => {
    addItem({
      id: pid,
      name: product.name,
      size: product.size,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} (${product.size}) added to cart`);
  };

  const notesList = product.notes.split(", ");
  const ingredientsList = product.ingredients.split(", ");
  const userReviews = slug ? getReviewsForProduct(slug) : [];
  const productReviewsWithKeys = product.reviews.map((r) => ({ ...r, key: `prod-${r.id}` }));
  const userReviewsWithKeys = userReviews.map((r) => ({ ...r, key: `user-${r.id}` }));
  const allReviews = [...userReviewsWithKeys, ...productReviewsWithKeys];
  const avgRating = allReviews.length > 0
    ? allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
    : 0;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated || !user) {
      toast.error("Please log in to leave a review");
      return;
    }
    if (reviewRating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (!reviewTitle.trim() || !reviewComment.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    addReview({
      productSlug: slug!,
      author: user.name || user.email,
      rating: reviewRating,
      title: reviewTitle.trim(),
      comment: reviewComment.trim(),
    });
    toast.success("Review submitted successfully!");
    setReviewRating(0);
    setReviewTitle("");
    setReviewComment("");
    setShowForm(false);
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("products.backToProducts")}
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-sm bg-muted"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              <button
                onClick={() => {
                  toggleWishlist(pid);
                  toast(wishlisted ? "Removed from wishlist" : "Added to wishlist");
                }}
                className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors"
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className="w-6 h-6" fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col justify-center"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {product.size}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-display text-3xl text-foreground mb-6">${product.price}</p>

              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* Notes */}
              <div className="mb-6">
                <h3 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-3">
                  {t("products.notes")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {notesList.map((note) => (
                    <span
                      key={note}
                      className="font-body text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-3">
                  {t("products.ingredients")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ingredientsList.map((ing) => (
                    <span
                      key={ing}
                      className="font-body text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {t("products.addToCart")}
                </button>
                <button
                  onClick={() => {
                    toggleWishlist(pid);
                    toast(wishlisted ? "Removed from wishlist" : "Added to wishlist");
                  }}
                  className={`p-3.5 border rounded-sm transition-colors ${
                    wishlisted
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  <Heart className="w-5 h-5" fill={wishlisted ? "currentColor" : "none"} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Specifications Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="relative overflow-hidden rounded-xl border border-border shadow-lg bg-background">
              {/* Header gradient */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
                  <Package className="w-6 h-6 text-primary" />
                  {t("products.specifications")}
                </h2>
                
                <div className="grid gap-4">
                  {/* Volume */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Droplets className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">{t("products.volume")}</p>
                      <p className="font-display text-lg text-foreground">{product.specifications.volume}</p>
                    </div>
                  </div>
                  
                  {/* Shelf Life */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">{t("products.shelfLife")}</p>
                      <p className="font-display text-lg text-foreground">{product.specifications.shelfLife}</p>
                    </div>
                  </div>
                  
                  {/* Storage */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Warehouse className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">{t("products.storage")}</p>
                      <p className="font-display text-lg text-foreground">{product.specifications.storage}</p>
                    </div>
                  </div>
                  
                  {/* Cruelty Free */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <HeartIcon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">{t("products.crueltyFree")}</p>
                      <p className="font-display text-lg text-foreground">
                        {product.specifications.crueltyFree ? t("products.yes") : t("products.no")}
                      </p>
                    </div>
                  </div>
                  
                  {/* Vegan */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Leaf className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">{t("products.vegan")}</p>
                      <p className="font-display text-lg text-foreground">
                        {product.specifications.vegan ? t("products.yes") : t("products.no")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section with Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="relative overflow-hidden rounded-xl border border-border shadow-lg bg-background">
              {/* Header gradient */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  {t("products.faq")}
                </h2>
                
                <Tabs.Root defaultValue="product" className="w-full">
                  {/* Tab List */}
                  <Tabs.List className="flex gap-2 mb-8">
                    <Tabs.Trigger
                      value="product"
                      className="px-6 py-3 font-body text-base tracking-widest uppercase rounded-md transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-muted"
                    >
                      {t("products.faq.product")}
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      value="shipping"
                      className="px-6 py-3 font-body text-base tracking-widest uppercase rounded-md transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-muted"
                    >
                      {t("products.faq.shipping")}
                    </Tabs.Trigger>
                  </Tabs.List>

              {/* Product Tab */}
              <Tabs.Content value="product" className="outline-none">
                {product.faqs.length > 0 ? (
                  <Accordion.Root type="single" collapsible className="space-y-3">
                    {product.faqs.map((faq, index) => (
                      <Accordion.Item
                        key={index}
                        value={`product-faq-${index}`}
                        className="border border-border rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <Accordion.Header>
                          <Accordion.Trigger className="flex w-full items-center justify-between p-4 font-body text-base text-left group">
                            <span className="pr-4">{faq.question}</span>
                            <span className="shrink-0 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform">▼</span>
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content asChild>
                          <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="p-4 pt-0 font-body text-base text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {faq.answer}
                          </motion.div>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                ) : (
                  <p className="text-muted-foreground text-center py-8">No product-specific FAQs available.</p>
                )}
              </Tabs.Content>

              {/* Shipping Tab */}
              <Tabs.Content value="shipping" className="outline-none">
                <Accordion.Root type="single" collapsible className="space-y-3">
                  <Accordion.Item value="shipping-1" className="border border-border rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between p-4 font-body text-base text-left group">
                        <span className="pr-4 flex items-center gap-2"><Truck className="w-4 h-4 text-primary" />{t("faq.shipping.options")}</span>
                        <span className="shrink-0 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform">▼</span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                        <Accordion.Content asChild>
                          <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="p-4 pt-0 font-body text-base text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {t("faq.shipping.optionsAnswer")}
                          </motion.div>
                        </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item value="shipping-2" className="border border-border rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between p-4 font-body text-base text-left group">
                        <span className="pr-4 flex items-center gap-2"><Package className="w-4 h-4 text-primary" />{t("faq.shipping.deliveryTime")}</span>
                        <span className="shrink-0 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform">▼</span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                        <Accordion.Content asChild>
                          <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="p-4 pt-0 font-body text-base text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {t("faq.shipping.deliveryTimeAnswer")}
                          </motion.div>
                        </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item value="shipping-3" className="border border-border rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between p-4 font-body text-base text-left group">
                        <span className="pr-4 flex items-center gap-2"><Truck className="w-4 h-4 text-primary" />{t("faq.shipping.freeShipping")}</span>
                        <span className="shrink-0 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform">▼</span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                        <Accordion.Content asChild>
                          <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="p-4 pt-0 font-body text-base text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {t("faq.shipping.freeShippingAnswer")}
                          </motion.div>
                        </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item value="shipping-4" className="border border-border rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between p-4 font-body text-base text-left group">
                        <span className="pr-4 flex items-center gap-2"><Package className="w-4 h-4 text-primary" />{t("faq.shipping.tracking")}</span>
                        <span className="shrink-0 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform">▼</span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                        <Accordion.Content asChild>
                          <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="p-4 pt-0 font-body text-base text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {t("faq.shipping.trackingAnswer")}
                          </motion.div>
                        </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item value="shipping-5" className="border border-border rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between p-4 font-body text-base text-left group">
                        <span className="pr-4 flex items-center gap-2"><RotateCcw className="w-4 h-4 text-primary" />{t("faq.shipping.returns")}</span>
                        <span className="shrink-0 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform">▼</span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                        <Accordion.Content asChild>
                          <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="p-4 pt-0 font-body text-base text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {t("faq.shipping.returnsAnswer")}
                          </motion.div>
                        </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </Tabs.Content>
            </Tabs.Root>
              </div>
            </div>
          </motion.div>

          {/* Write Review Form */}
          {isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              {!showForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="px-6 py-3 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                >
                  {t("products.writeReview")}
                </button>
              ) : (
                <form onSubmit={handleSubmitReview} className="bg-muted/50 rounded-sm p-6 space-y-4">
                  <h3 className="font-display text-xl text-foreground mb-4">
                    {t("products.writeReview")}
                  </h3>
                  
                  {/* Star Rating */}
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                      {t("products.rating")}
                    </label>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setReviewRating(i + 1)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${
                              i < reviewRating
                                ? "fill-accent text-accent"
                                : "fill-muted text-muted hover:fill-accent/50"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                      {t("products.reviewTitle")}
                    </label>
                    <input
                      type="text"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors"
                      placeholder={t("products.reviewTitlePlaceholder")}
                    />
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                      {t("products.reviewComment")}
                    </label>
                    <textarea
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                      placeholder={t("products.reviewCommentPlaceholder")}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {t("products.submitReview")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 border border-border text-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:bg-muted transition-colors"
                    >
                      {t("products.cancel")}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}

          {/* Not logged in prompt */}
          {!isAuthenticated && (
            <div className="mt-16 p-6 bg-muted/50 rounded-sm text-center">
              <p className="font-body text-muted-foreground mb-4">
                {t("products.loginToReview")}
              </p>
              <Link
                to="/login"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                {t("auth.login")}
              </Link>
            </div>
          )}

          {/* Reviews Section */}
          {allReviews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  {t("products.customerReviews")}
                </h2>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(avgRating) ? "fill-accent text-accent" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                  <span className="font-body text-sm text-muted-foreground ml-1">
                    ({allReviews.length})
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allReviews.map((review) => (
                  <div key={review.key} className="p-4 bg-muted/50 rounded-sm">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < review.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-display text-sm text-foreground mb-2">{review.title}</p>
                    <p className="font-body text-sm text-muted-foreground mb-2">{review.comment}</p>
                    <p className="font-body text-xs text-muted-foreground">
                      {review.author} • {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;