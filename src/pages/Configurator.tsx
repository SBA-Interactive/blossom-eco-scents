import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { BlurFade } from "@/components/ui/blur-fade";
import { SlideIn } from "@/components/ui/slide-in";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  BOTTLE_OPTIONS,
  SIZE_OPTIONS,
  SCENT_OPTIONS,
  PACKAGING_OPTIONS,
  BASE_PRICE,
  type BottleOption,
  type SizeOption,
  type PackagingOption,
} from "@/constants/configurator";

export default function Configurator() {
  const { addItem } = useCart();
  const { t } = useLanguage();

  const [selectedBottle, setSelectedBottle] = useState<BottleOption>(BOTTLE_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(SIZE_OPTIONS[1]);
  const [selectedScents, setSelectedScents] = useState<{ top: string[]; heart: string[]; base: string[] }>({
    top: [],
    heart: [],
    base: [],
  });
  const [selectedPackaging, setSelectedPackaging] = useState<PackagingOption>(PACKAGING_OPTIONS[0]);
  const [customMessage, setCustomMessage] = useState("");

  const totalPrice = useMemo(() => {
    const base = BASE_PRICE * selectedSize.multiplier;
    const bottlePrice = selectedBottle.price;
    const packagingPrice = selectedPackaging.price;
    return base + bottlePrice + packagingPrice;
  }, [selectedSize, selectedBottle, selectedPackaging]);

  const toggleScent = (category: "top" | "heart" | "base", note: string) => {
    setSelectedScents((prev) => {
      const current = prev[category];
      if (current.includes(note)) {
        return { ...prev, [category]: current.filter((n) => n !== note) };
      }
      if (current.length >= 3) return prev;
      return { ...prev, [category]: [...current, note] };
    });
  };

  const handleAddToCart = () => {
    const scentDescription = [...selectedScents.top, ...selectedScents.heart, ...selectedScents.base].join(", ");
    
    addItem({
      id: `custom-${selectedBottle.id}-${selectedSize.id}-${Date.now()}`,
      name: `Custom Perfume (${selectedBottle.name}, ${selectedSize.id})`,
      size: selectedSize.id,
      price: totalPrice,
      image: selectedBottle.image,
    });

    toast.success(`Custom perfume added to cart! - $${totalPrice.toFixed(2)}`);
  };

  const hasAnyScents = selectedScents.top.length > 0 || selectedScents.heart.length > 0 || selectedScents.base.length > 0;

  return (
    <Layout>
      <section className="section-padding pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side: Visuals */}
            <div className="lg:sticky lg:top-24 lg:self-start order-2 lg:order-1">
              <BlurFade delay={0.1}>
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <div className="aspect-square lg:aspect-[4/5] bg-muted flex items-center justify-center p-4 lg:p-8 relative">
                      <img
                        src={selectedPackaging.image}
                        alt={selectedPackaging.name}
                        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300"
                        key={`${selectedPackaging.id}-bg`}
                      />
                      <img
                        src={selectedBottle.image}
                        alt={selectedBottle.name}
                        className="relative z-10 h-2/3 lg:h-3/4 max-h-[200px] lg:max-h-[400px] transition-transform duration-300"
                        key={selectedBottle.id}
                      />
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2}>
                <div className="mt-6 lg:mt-8 text-left bg-card border border-border rounded-sm p-6">
                  <h3 className="font-display text-xl text-foreground mb-4">{t("configurator.yourConfig") || "Your Configuration"}</h3>
                  <ul className="font-body text-sm text-muted-foreground space-y-2">
                    <li className="flex justify-between">
                      <span>Bottle:</span>
                      <span className="font-medium text-foreground">{selectedBottle.name}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Size:</span>
                      <span className="font-medium text-foreground">{selectedSize.id}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Scent:</span>
                      <span className="font-medium text-foreground truncate max-w-[180px]">
                        {hasAnyScents
                          ? [...selectedScents.top, ...selectedScents.heart, ...selectedScents.base].join(", ")
                          : "Not selected"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Packaging:</span>
                      <span className="font-medium text-foreground">{selectedPackaging.name}</span>
                    </li>
                    {customMessage && (
                      <li className="flex justify-between items-start">
                        <span>Message:</span>
                        <span className="font-medium text-foreground text-right pl-4 max-w-[180px]">"{customMessage}"</span>
                      </li>
                    )}
                  </ul>
                  <p className="font-display text-4xl text-foreground mt-6 text-right">${totalPrice.toFixed(2)}</p>
                </div>
              </BlurFade>

              <BlurFade delay={0.3}>
                <div className="mt-6">
                  <Button
                    size="lg"
                    className="w-full py-6 font-body text-sm tracking-widest uppercase"
                    onClick={handleAddToCart}
                  >
                    {t("configurator.addToCart") || "Add to Cart"}
                  </Button>
                </div>
              </BlurFade>
            </div>

            {/* Right Side: Options */}
            <div className="order-1 lg:order-2">
              <BlurFade delay={0.1}>
                <div className="text-center mb-8 lg:mb-12">
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                    {t("configurator.tag") || "Custom Blend"}
                  </p>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
                    {t("configurator.title") || "Create Your Scent"}
                  </h1>
                </div>
              </BlurFade>

              <SlideIn delay={0.1} direction="up">
                <div className="mb-6 lg:mb-8">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">
                    1. {t("configurator.chooseBottle") || "Choose Your Bottle"}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 lg:gap-4">
                    {BOTTLE_OPTIONS.map((bottle) => (
                      <Button
                        key={bottle.id}
                        variant={selectedBottle.id === bottle.id ? "default" : "outline"}
                        className={cn(
                          "h-auto p-2 lg:p-4 flex flex-col items-center justify-center gap-1 lg:gap-2 transition-all duration-200",
                          "border-2 min-h-[80px] lg:min-h-[100px]",
                          selectedBottle.id === bottle.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => setSelectedBottle(bottle)}
                      >
                        <img
                          src={bottle.image}
                          alt={bottle.name}
                          className="h-10 lg:h-16 w-auto max-w-full object-contain"
                        />
                        <span className="text-xs lg:text-sm text-foreground font-body">{bottle.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.15} direction="up">
                <div className="mb-6 lg:mb-8">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">
                    2. {t("configurator.selectSize") || "Select Size"}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 lg:gap-4">
                    {SIZE_OPTIONS.map((size) => (
                      <Button
                        key={size.id}
                        variant={selectedSize.id === size.id ? "default" : "outline"}
                        className={cn(
                          "h-auto p-2 lg:p-4 flex flex-col items-center justify-center gap-1 lg:gap-2 transition-all duration-200",
                          "border-2 min-h-[60px]",
                          selectedSize.id === size.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => setSelectedSize(size)}
                      >
                        <span className="text-lg lg:text-2xl font-semibold text-foreground font-display">
                          {size.id}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.2} direction="up">
                <div className="mb-6 lg:mb-8">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">
                    3. {t("configurator.composeScent") || "Compose Your Scent"}
                  </h3>
                  <div className="space-y-4 lg:space-y-6">
                    <div>
                      <h4 className="font-body text-base lg:text-lg font-semibold mb-2 lg:mb-3 text-foreground">
                        {t("configurator.topNote") || "Top Note"} (up to 3)
                      </h4>
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {SCENT_OPTIONS.top.map((note) => (
                          <Button
                            key={note}
                            size="sm"
                            variant={selectedScents.top.includes(note) ? "default" : "outline"}
                            className="text-xs lg:text-sm"
                            onClick={() => toggleScent("top", note)}
                          >
                            {note}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-body text-base lg:text-lg font-semibold mb-2 lg:mb-3 text-foreground">
                        {t("configurator.heartNote") || "Heart Note"} (up to 3)
                      </h4>
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {SCENT_OPTIONS.heart.map((note) => (
                          <Button
                            key={note}
                            size="sm"
                            variant={selectedScents.heart.includes(note) ? "default" : "outline"}
                            className="text-xs lg:text-sm"
                            onClick={() => toggleScent("heart", note)}
                          >
                            {note}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-body text-base lg:text-lg font-semibold mb-2 lg:mb-3 text-foreground">
                        {t("configurator.baseNote") || "Base Note"} (up to 3)
                      </h4>
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {SCENT_OPTIONS.base.map((note) => (
                          <Button
                            key={note}
                            size="sm"
                            variant={selectedScents.base.includes(note) ? "default" : "outline"}
                            className="text-xs lg:text-sm"
                            onClick={() => toggleScent("base", note)}
                          >
                            {note}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.25} direction="up">
                <div className="mb-6 lg:mb-8">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">
                    4. {t("configurator.selectPackaging") || "Select Packaging"}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 lg:gap-4">
                    {PACKAGING_OPTIONS.map((pack) => (
                      <Button
                        key={pack.id}
                        variant={selectedPackaging.id === pack.id ? "default" : "outline"}
                        className={cn(
                          "h-auto p-2 lg:p-4 flex flex-col items-center justify-center gap-1 lg:gap-2 transition-all duration-200",
                          "border-2 min-h-[80px] lg:min-h-[100px]",
                          selectedPackaging.id === pack.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => setSelectedPackaging(pack)}
                      >
                        <img
                          src={pack.image}
                          alt={pack.name}
                          className="h-10 lg:h-16 w-auto max-w-full object-contain"
                        />
                        <span className="text-xs lg:text-sm text-foreground font-body text-center">
                          {pack.name}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.3} direction="up">
                <div className="mb-6 lg:mb-8">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">
                    5. {t("configurator.customMessage") || "Add a Custom Message"}
                  </h3>
                  <Textarea
                    placeholder={t("configurator.messagePlaceholder") || "Happy Birthday, Sarah!"}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="font-body text-base bg-background"
                    rows={3}
                  />
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}