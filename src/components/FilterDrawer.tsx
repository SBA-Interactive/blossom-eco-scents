import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Check, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

interface FilterDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scentFilters: string[];
  setScentFilters: (filters: string[]) => void;
  sizeFilters: string[];
  setSizeFilters: (filters: string[]) => void;
  priceFilter: string;
  setPriceFilter: (filter: string) => void;
  featuresFilters: string[];
  setFeaturesFilters: (filters: string[]) => void;
  onClearAll: () => void;
}

const FilterDrawer = ({
  open,
  onOpenChange,
  scentFilters,
  setScentFilters,
  sizeFilters,
  setSizeFilters,
  priceFilter,
  setPriceFilter,
  featuresFilters,
  setFeaturesFilters,
  onClearAll,
}: FilterDrawerProps) => {
  const { t } = useLanguage();

  const scents = [...new Set(products.map((p) => p.name))];
  const sizes = [...new Set(products.map((p) => p.size))];
  const features = [
    { key: "vegan", label: "Vegan" },
    { key: "crueltyFree", label: "Cruelty Free" },
  ];

  const priceRanges = [
    { key: "0-50", label: "$0 - $50", min: 0, max: 50 },
    { key: "50-100", label: "$50 - $100", min: 50, max: 100 },
    { key: "100+", label: "$100+", min: 100, max: Infinity },
  ];

  const toggleScent = (scent: string) => {
    if (scentFilters.includes(scent)) {
      setScentFilters(scentFilters.filter((s) => s !== scent));
    } else {
      setScentFilters([...scentFilters, scent]);
    }
  };

  const toggleSize = (size: string) => {
    if (sizeFilters.includes(size)) {
      setSizeFilters(sizeFilters.filter((s) => s !== size));
    } else {
      setSizeFilters([...sizeFilters, size]);
    }
  };

  const toggleFeature = (feature: string) => {
    if (featuresFilters.includes(feature)) {
      setFeaturesFilters(featuresFilters.filter((f) => f !== feature));
    } else {
      setFeaturesFilters([...featuresFilters, feature]);
    }
  };

  const hasActiveFilters =
    scentFilters.length > 0 ||
    sizeFilters.length > 0 ||
    priceFilter !== "all" ||
    featuresFilters.length > 0;

  return (
    <div
      className={`fixed top-14 md:top-24 inset-y-0 left-0 z-30 w-80 max-w-[85vw] bg-background border-r border-border transform transition-transform duration-300 ease-in-out overflow-hidden ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-xl text-foreground">{t("products.filter")}</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 rounded-sm hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 p-4">
          <Accordion.Root type="multiple" defaultValue={["scent", "size", "price", "features"]} className="space-y-4">
            <Accordion.Item value="scent" className="border border-border rounded-sm">
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex-1 flex items-center justify-between px-4 py-3 font-body text-sm text-foreground hover:bg-muted transition-colors [&[data-state=open]>svg:rotate-180">
                  <span className="font-body text-xs tracking-wider uppercase">{t("products.scentFamily")}</span>
                  <ChevronDown className="w-4 h-4 transition-transform" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-3 space-y-2">
                {scents.map((scent) => (
                  <button
                    key={scent}
                    onClick={() => toggleScent(scent)}
                    className="flex items-center gap-3 w-full px-2 py-2 rounded-sm hover:bg-muted transition-colors"
                  >
                    <div
                      className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                        scentFilters.includes(scent)
                          ? "bg-primary border-primary"
                          : "border-border"
                      }`}
                    >
                      {scentFilters.includes(scent) && <Check className="w-3 h-3 text-primary-foreground" />}
                    </div>
                    <span className="font-body text-sm text-foreground">{scent}</span>
                  </button>
                ))}
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="size" className="border border-border rounded-sm">
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex-1 flex items-center justify-between px-4 py-3 font-body text-sm text-foreground hover:bg-muted transition-colors [&[data-state=open]>svg:rotate-180">
                  <span className="font-body text-xs tracking-wider uppercase">{t("products.sizeLabel")}</span>
                  <ChevronDown className="w-4 h-4 transition-transform" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-3 space-y-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className="flex items-center gap-3 w-full px-2 py-2 rounded-sm hover:bg-muted transition-colors"
                  >
                    <div
                      className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                        sizeFilters.includes(size)
                          ? "bg-primary border-primary"
                          : "border-border"
                      }`}
                    >
                      {sizeFilters.includes(size) && <Check className="w-3 h-3 text-primary-foreground" />}
                    </div>
                    <span className="font-body text-sm text-foreground">{size}</span>
                  </button>
                ))}
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="price" className="border border-border rounded-sm">
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex-1 flex items-center justify-between px-4 py-3 font-body text-sm text-foreground hover:bg-muted transition-colors [&[data-state=open]>svg:rotate-180">
                  <span className="font-body text-xs tracking-wider uppercase">{t("products.price")}</span>
                  <ChevronDown className="w-4 h-4 transition-transform" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-3 space-y-2">
                <button
                  onClick={() => setPriceFilter("all")}
                  className="flex items-center gap-3 w-full px-2 py-2 rounded-sm hover:bg-muted transition-colors"
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      priceFilter === "all"
                        ? "bg-primary border-primary"
                        : "border-border"
                    }`}
                  >
                    {priceFilter === "all" && <Check className="w-3 h-3 text-primary-foreground" />}
                  </div>
                  <span className="font-body text-sm text-foreground">{t("products.allPrice")}</span>
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.key}
                    onClick={() => setPriceFilter(range.key)}
                    className="flex items-center gap-3 w-full px-2 py-2 rounded-sm hover:bg-muted transition-colors"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        priceFilter === range.key
                          ? "bg-primary border-primary"
                          : "border-border"
                      }`}
                    >
                      {priceFilter === range.key && <Check className="w-3 h-3 text-primary-foreground" />}
                    </div>
                    <span className="font-body text-sm text-foreground">{range.label}</span>
                  </button>
                ))}
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="features" className="border border-border rounded-sm">
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex-1 flex items-center justify-between px-4 py-3 font-body text-sm text-foreground hover:bg-muted transition-colors [&[data-state=open]>svg:rotate-180">
                  <span className="font-body text-xs tracking-wider uppercase">{t("products.features")}</span>
                  <ChevronDown className="w-4 h-4 transition-transform" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-3 space-y-2">
                {features.map((feature) => (
                  <button
                    key={feature.key}
                    onClick={() => toggleFeature(feature.key)}
                    className="flex items-center gap-3 w-full px-2 py-2 rounded-sm hover:bg-muted transition-colors"
                  >
                    <div
                      className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                        featuresFilters.includes(feature.key)
                          ? "bg-primary border-primary"
                          : "border-border"
                      }`}
                    >
                      {featuresFilters.includes(feature.key) && <Check className="w-3 h-3 text-primary-foreground" />}
                    </div>
                    <span className="font-body text-sm text-foreground">{feature.label}</span>
                  </button>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>

        <div className="flex-shrink-0 p-4 border-t border-border flex gap-2">
          {hasActiveFilters && (
            <button
              onClick={onClearAll}
              className="flex-1 px-4 py-2.5 border border-border text-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:bg-muted transition-colors"
            >
              {t("products.clearAll")}
            </button>
          )}
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            {t("products.apply")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;