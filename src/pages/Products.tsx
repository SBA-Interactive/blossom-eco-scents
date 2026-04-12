import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Heart, SlidersHorizontal, ArrowUpDown, X } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";
import { BlurFade } from "@/components/ui/blur-fade";
import { SlideIn } from "@/components/ui/slide-in";
import FilterDrawer from "@/components/FilterDrawer";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const Products = () => {
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { t } = useLanguage();

  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [showWishlistOnly, setShowWishlistOnly] = useState(searchParams.get("wishlist") === "true");
  const [displayedCount, setDisplayedCount] = useState(3);

  const [scentFilters, setScentFilters] = useState<string[]>([]);
  const [sizeFilters, setSizeFilters] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [featuresFilters, setFeaturesFilters] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (scentFilters.length > 0) {
      result = result.filter((p) => scentFilters.includes(p.name));
    }

    if (sizeFilters.length > 0) {
      result = result.filter((p) => sizeFilters.includes(p.size));
    }

    if (priceFilter !== "all") {
      const priceRanges: Record<string, [number, number]> = {
        "0-50": [0, 50],
        "50-100": [50, 100],
        "100+": [100, Infinity],
      };
      const [min, max] = priceRanges[priceFilter];
      result = result.filter((p) => p.price >= min && p.price < max);
    }

    if (featuresFilters.length > 0) {
      result = result.filter((p) => {
        if (featuresFilters.includes("vegan") && !p.specifications.vegan) return false;
        if (featuresFilters.includes("crueltyFree") && !p.specifications.crueltyFree) return false;
        return true;
      });
    }

    if (showWishlistOnly) {
      result = result.filter((p) => isWishlisted(`${p.name}-${p.size}`));
    }

    // Priority sorting logic - tagged products appear first, with randomization within each group
    const tagPriority: Record<string, number> = {
      BESTSELLER: 1,
      NEW: 2,
      LIMITED: 3,
      SALE: 4,
    };

    const getPriority = (p: (typeof products)[0]) => {
      if (p.tag && tagPriority[p.tag]) return tagPriority[p.tag];
      return 5;
    };

    // Sort by priority, then within same priority group: alternate sizes for visual variety
    result.sort((a, b) => {
      const priorityA = getPriority(a);
      const priorityB = getPriority(b);
      
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      
      // Same priority - alternate between 50ml/100ml of same scent and randomize different scents
      if (a.name === b.name) {
        return a.size === "50ml" ? -1 : 1;
      }
      
      // Randomize order for different products in same priority group
      return Math.random() < 0.5 ? -1 : 1;
    });

    // Apply user's sort option while maintaining priority groupings
    const sortedByUser = [...result];
    const grouped: Record<number, typeof products[]> = {};
    
    sortedByUser.forEach((p) => {
      const priority = getPriority(p);
      if (!grouped[priority]) grouped[priority] = [];
      grouped[priority].push(p);
    });

    Object.keys(grouped).forEach((key) => {
      const group = grouped[Number(key)];
      switch (sortBy) {
        case "price-asc":
          group.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          group.sort((a, b) => b.price - a.price);
          break;
        case "name-asc":
          group.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          group.sort((a, b) => b.name.localeCompare(a.name));
          break;
      }
    });

    result = Object.values(grouped).flat();

    return result;
  }, [scentFilters, sizeFilters, priceFilter, featuresFilters, showWishlistOnly, sortBy, isWishlisted]);

  const activeFilterCount =
    scentFilters.length +
    sizeFilters.length +
    (priceFilter !== "all" ? 1 : 0) +
    featuresFilters.length +
    (showWishlistOnly ? 1 : 0);

  const clearAllFilters = () => {
    setScentFilters([]);
    setSizeFilters([]);
    setPriceFilter("all");
    setFeaturesFilters([]);
    setShowWishlistOnly(false);
  };

  const removeFilter = (type: string, value: string) => {
    switch (type) {
      case "scent":
        setScentFilters(scentFilters.filter((s) => s !== value));
        break;
      case "size":
        setSizeFilters(sizeFilters.filter((s) => s !== value));
        break;
      case "price":
        setPriceFilter("all");
        break;
      case "features":
        setFeaturesFilters(featuresFilters.filter((f) => f !== value));
        break;
      case "wishlist":
        setShowWishlistOnly(false);
        break;
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: (typeof products)[0]) => {
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
      <FilterDrawer
        open={filterDrawerOpen}
        onOpenChange={setFilterDrawerOpen}
        scentFilters={scentFilters}
        setScentFilters={setScentFilters}
        sizeFilters={sizeFilters}
        setSizeFilters={setSizeFilters}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        featuresFilters={featuresFilters}
        setFeaturesFilters={setFeaturesFilters}
        onClearAll={clearAllFilters}
      />

      {filterDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setFilterDrawerOpen(false)}
        />
      )}

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.1} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              {t("products.collection")}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4">
              {t("products.title")}
            </h1>
            <p className="font-body text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              {t("products.desc")}
            </p>
          </BlurFade>

          <BlurFade delay={0.2} yOffset={10}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 p-4 bg-card border border-border rounded-sm flex-wrap">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFilterDrawerOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  {t("products.filter")}
                  {activeFilterCount > 0 && (
                    <span className="ml-1 w-5 h-5 bg-primary-foreground text-primary text-xs rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setShowWishlistOnly(!showWishlistOnly)}
                  className={`flex items-center gap-2 px-4 py-2 font-body text-xs tracking-widest uppercase rounded-sm border transition-colors ${
                    showWishlistOnly
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  <Heart className="w-4 h-4" fill={showWishlistOnly ? "currentColor" : "none"} />
                  {t("products.wishlist")}
                </button>

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
              </div>
            </div>

            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="font-body text-xs text-muted-foreground mr-2">
                  {t("products.showing")} {filtered.length} {t("products.of")} {products.length} {t("products.products")}:
                </span>

                {scentFilters.map((scent) => (
                  <button
                    key={scent}
                    onClick={() => removeFilter("scent", scent)}
                    className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary font-body text-xs rounded-sm hover:bg-primary/20 transition-colors"
                  >
                    {scent}
                    <X className="w-3 h-3" />
                  </button>
                ))}

                {sizeFilters.map((size) => (
                  <button
                    key={size}
                    onClick={() => removeFilter("size", size)}
                    className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary font-body text-xs rounded-sm hover:bg-primary/20 transition-colors"
                  >
                    {size}
                    <X className="w-3 h-3" />
                  </button>
                ))}

                {priceFilter !== "all" && (
                  <button
                    onClick={() => removeFilter("price", priceFilter)}
                    className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary font-body text-xs rounded-sm hover:bg-primary/20 transition-colors"
                  >
                    {priceFilter === "0-50" && "$0-$50"}
                    {priceFilter === "50-100" && "$50-$100"}
                    {priceFilter === "100+" && "$100+"}
                    <X className="w-3 h-3" />
                  </button>
                )}

                {featuresFilters.map((feature) => (
                  <button
                    key={feature}
                    onClick={() => removeFilter("features", feature)}
                    className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary font-body text-xs rounded-sm hover:bg-primary/20 transition-colors"
                  >
                    {feature === "vegan" && "Vegan"}
                    {feature === "crueltyFree" && "Cruelty Free"}
                    <X className="w-3 h-3" />
                  </button>
                ))}

                {showWishlistOnly && (
                  <button
                    onClick={() => removeFilter("wishlist", "true")}
                    className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary font-body text-xs rounded-sm hover:bg-primary/20 transition-colors"
                  >
                    {t("products.wishlist")}
                    <X className="w-3 h-3" />
                  </button>
                )}

                <button
                  onClick={clearAllFilters}
                  className="font-body text-xs text-muted-foreground underline hover:text-foreground transition-colors"
                >
                  {t("products.clearAll")}
                </button>
              </div>
            )}

            {activeFilterCount === 0 && (
              <p className="font-body text-xs text-muted-foreground mb-6">
                {t("products.showing")} {filtered.length} {t("products.of")} {products.length}{" "}
                {t("products.products")}
              </p>
            )}
          </BlurFade>

          {filtered.length === 0 ? (
            <p className="text-center font-body text-muted-foreground py-16">
              {t("products.noMatch")}
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {filtered.slice(0, displayedCount).map((product, index) => {
                  const pid = `${product.name}-${product.size}`;
                  const wishlisted = isWishlisted(pid);
                  return (
                    <SlideIn key={pid} direction="up" delay={index * 0.05}>
                      <Link
                        to={`/products/${product.slug}`}
                        className="block group"
                      >
                        <div className="h-full rounded-xl border border-border bg-card group-hover:scale-[1.03] group-hover:shadow-2xl transition-all duration-300">
                          <div className="relative overflow-hidden rounded-t-xl mb-0 bg-muted">
                            <img
                              src={product.image}
                              alt={product.name}
                              loading="lazy"
                              width={800}
                              height={1000}
                              className="w-full h-auto aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {product.tag && (
                              <span
                                className={`absolute top-3 left-3 px-2 py-1 text-xs font-body tracking-widest uppercase rounded-sm ${
                                  product.tag === "BESTSELLER"
                                    ? "bg-primary text-primary-foreground"
                                    : product.tag === "NEW"
                                    ? "bg-accent text-accent-foreground"
                                    : product.tag === "LIMITED"
                                    ? "bg-destructive text-destructive-foreground"
                                    : "bg-muted text-foreground"
                                }`}
                              >
                                {product.tag}
                              </span>
                            )}
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
                              <Heart
                                className="w-5 h-5"
                                fill={wishlisted ? "currentColor" : "none"}
                              />
                            </button>
                          </div>
                          <div className="p-6 pt-4">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-display text-2xl text-foreground">
                                {product.name}
                              </h3>
                              <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2 bg-muted px-2 py-1 rounded-sm">
                                {product.size}
                              </span>
                            </div>
                            <p className="font-body text-xs text-accent uppercase tracking-wider mb-2">
                              {t("products.notes")}: {product.notes}
                            </p>
                            <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                              {product.description}
                            </p>
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
                    </SlideIn>
                  );
                })}
              </div>
              {filtered.length > displayedCount && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setDisplayedCount((prev) => prev + 3)}
                    className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                  >
                    {t("products.loadMore")}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;