import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { t } = useLanguage();

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
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
