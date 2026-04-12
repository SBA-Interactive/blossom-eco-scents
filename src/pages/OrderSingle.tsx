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
    notes: product?.notes || "",
    price: product?.price || 0,
    size: product?.size || "50ml"
  };
});

const OrderSingle = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    const frag = fragrances.find((f) => f.name === selected)!;
    addItem({
      id: `${frag.name}-${frag.size}`,
      name: frag.name,
      size: frag.size,
      price: frag.price,
      image: "/placeholder.svg",
    });
    toast.success(`${frag.name} added to cart!`);
    navigate("/checkout");
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("orderSingle.tag")}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">{t("orderSingle.title")}</h1>
            <p className="font-body text-base text-muted-foreground">{t("orderSingle.desc")}</p>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-4">
            <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2">
              {fragrances.map((frag) => (
                <label
                  key={`${frag.name}-${frag.size}`}
                  className={`block cursor-pointer rounded-sm border p-4 transition-colors ${
                    selected === frag.name
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <input type="radio" name="fragrance" value={frag.name} checked={selected === frag.name} onChange={() => setSelected(frag.name)} className="sr-only" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-lg text-foreground">{frag.name}</p>
                      <p className="font-body text-sm text-muted-foreground">{frag.notes}</p>
                    </div>
                    <span className="font-display text-xl text-foreground">${frag.price}</span>
                  </div>
                </label>
              ))}
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex justify-between font-body text-sm text-muted-foreground">
                <span>{t("orderSingle.shipping")}</span>
                <span>{selected && fragrances.find(f => f.name === selected)!.price >= 50 ? "FREE" : "$5.00"}</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <button type="submit" disabled={!selected} className="px-10 py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-40">
                {t("orderSingle.addCheckout")}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default OrderSingle;
