import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Heart, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";
import { BlurFade } from "@/components/ui/blur-fade";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const Products = () => {
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { t } = useLanguage();

  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [scentFilter, setScentFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [showWishlistOnly, setShowWishlistOnly] = useState(searchParams.get("wishlist") === "true");

  const scents = [...new Set(products.map((p) => p.name))];
  const sizes = [...new Set(products.map((p) => p.size))];

  const filtered = useMemo(() => {
    let result = [...products];
    if (sizeFilter !== "all") result = result.filter((p) => p.size === sizeFilter);
    if (scentFilter !== "all") result = result.filter((p) => p.name === scentFilter);
    if (showWishlistOnly) result = result.filter((p) => isWishlisted(`${p.name}-${p.size}`));

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "name-asc": result.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "name-desc": result.sort((a, b) => b.name.localeCompare(a.name)); break;
    }
    return result;
  }, [sizeFilter, scentFilter, sortBy, showWishlistOnly, isWishlisted]);

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: `${product.name}-${product.size}`,
      name: product.name,
      size: product.size,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} (${product.size}) added to cart`);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.1} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("products.collection")}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4">{t("products.title")}</h1>
            <p className="font-body text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              {t("products.desc")}
            </p>
          </BlurFade>

          {/* Filters & Sort Bar */}
          <BlurFade delay={0.2} yOffset={10} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 p-4 bg-card border border-border rounded-sm flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-body text-xs tracking-widest uppercase">{t("products.filter")}</span>
            </div>

            <select
              value={scentFilter}
              onChange={(e) => setScentFilter(e.target.value)}
              className="font-body text-sm bg-background border border-border rounded-sm px-3 py-1.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">{t("products.allScents")}</option>
              {scents.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <select
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="font-body text-sm bg-background border border-border rounded-sm px-3 py-1.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">{t("products.allSizes")}</option>
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <div className="flex items-center gap-2 sm:ml-auto">
              <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="font-body text-sm bg-background border border-border rounded-sm px-3 py-1.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="default">{t("products.default")}</option>
                <option value="price-asc">{t("products.priceLowHigh")}</option>
                <option value="price-desc">{t("products.priceHighLow")}</option>
                <option value="name-asc">{t("products.nameAZ")}</option>
                <option value="name-desc">{t("products.nameZA")}</option>
              </select>
            </div>

            <button
              onClick={() => setShowWishlistOnly(!showWishlistOnly)}
              className={`flex items-center gap-1.5 font-body text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-colors ${
                showWishlistOnly
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              <Heart className="w-3.5 h-3.5" fill={showWishlistOnly ? "currentColor" : "none"} />
              {t("products.wishlist")}
            </button>
          </BlurFade>

          {filtered.length === 0 ? (
            <p className="text-center font-body text-muted-foreground py-16">{t("products.noMatch")}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filtered.map((product, i) => {
                const pid = `${product.name}-${product.size}`;
                const wishlisted = isWishlisted(pid);
                return (
                  <BlurFade key={pid} delay={0.1 + (i % 3) * 0.05} yOffset={30}>
                    <Link to={`/products/${product.slug}`} className="block group">
                      <div className="h-full rounded-xl border border-border bg-card">
                        <div className="relative overflow-hidden rounded-t-xl mb-0 bg-muted">
                          <img src={product.image} alt={product.name} loading="lazy" width={800} height={1000} className="w-full h-auto aspect-[4/5] object-cover" />
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleWishlist(pid);
                              toast(wishlisted ? "Removed from wishlist" : "Added to wishlist");
                            }}
                            className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors"
                            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                          >
                            <Heart className="w-5 h-5" fill={wishlisted ? "currentColor" : "none"} />
                          </button>
                        </div>
                        <div className="p-6 pt-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-display text-2xl text-foreground">{product.name}</h3>
                            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2 bg-muted px-2 py-1 rounded-sm">{product.size}</span>
                          </div>
                          <p className="font-body text-xs text-accent uppercase tracking-wider mb-2">{t("products.notes")}: {product.notes}</p>
                          <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-display text-xl text-foreground">
                              ${product.price}
                            </span>
                            <button
                              onClick={(e) => handleAddToCart(e, product)}
                              className="px-6 py-2.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                            >
                              {t("products.addToCart")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
