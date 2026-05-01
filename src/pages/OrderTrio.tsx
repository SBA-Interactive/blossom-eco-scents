import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";

const uniqueFragrances = [...new Set(products.map(p => p.name))];
const fragrances = uniqueFragrances.map(name => {
  const product = products.find(p => p.name === name);
  return {
    name,
    notes: product?.notes || ""
  };
});

const TRIO_PRICE = 125;

const OrderTrio = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const toggleSelection = (name: string) => {
    setSelected((prev) => {
      if (prev.includes(name)) {
        return prev.filter((n) => n !== name);
      } else if (prev.length < 3) {
        return [...prev, name];
      } else {
        toast.error("You can only select 3 scents for the trio pack");
        return prev;
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length !== 3) return;
    addItem({
      id: `trio-${selected.sort().join("-")}`,
      name: `Scent Trio (${selected.join(", ")})`,
      size: "3 × 50ml",
      price: TRIO_PRICE,
      image: "placeholder.jpg",
    });
    toast.success("Scent Trio added to cart!");
    navigate("/checkout");
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("orderTrio.tag")}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">{t("orderTrio.title")}</h1>
            <p className="font-body text-base text-muted-foreground">{t("orderTrio.desc")} ${TRIO_PRICE}.</p>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-4">
            <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
              {fragrances.map((frag) => (
                <label
                  key={frag.name}
                  className={`block cursor-pointer rounded-sm border p-4 transition-colors ${
                    selected.includes(frag.name)
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <input type="checkbox" checked={selected.includes(frag.name)} onChange={() => toggleSelection(frag.name)} className="sr-only" />
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-display text-lg text-foreground">{frag.name}</p>
                      <p className="font-body text-sm text-muted-foreground">{frag.notes}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex justify-between font-body text-sm text-muted-foreground">
                <span>{t("orderTrio.bundlePrice")}</span>
                <span className="text-foreground font-display">${TRIO_PRICE}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-muted-foreground">
                <span>{t("orderTrio.shipping")}</span>
                <span className="text-accent font-semibold">FREE</span>
              </div>
              <div className="flex justify-between font-body text-sm text-muted-foreground">
                <span>{t("orderTrio.youSave")}</span>
                <span className="text-accent font-semibold">$19</span>
              </div>
            </div>

            <p className="text-center font-body text-sm text-muted-foreground">{selected.length}/3 {t("orderTrio.selected")}</p>

            <div className="text-center pt-2">
              <button type="submit" disabled={selected.length !== 3} className="px-10 py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-40">
                {t("orderTrio.addCheckout")}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default OrderTrio;
