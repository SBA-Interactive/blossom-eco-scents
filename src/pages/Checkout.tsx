import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { CreditCard, Lock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding min-h-[60vh] flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t("checkout.orderConfirmed")}</h1>
            <p className="font-body text-sm text-muted-foreground mb-8">{t("checkout.placeholderMsg")}</p>
            <Link to="/products" className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
              {t("checkout.continueShopping")}
            </Link>
          </motion.div>
        </section>
      </Layout>
    );
  }

  if (items.length === 0) {
    return (
      <Layout>
        <section className="section-padding min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl text-foreground mb-4">{t("checkout.emptyCart")}</h1>
            <Link to="/products" className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
              {t("checkout.browseProducts")}
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 md:mb-12">{t("checkout.title")}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-3 space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{t("checkout.secureCheckout")}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">{t("contact.email")}</label>
                    <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">{t("checkout.firstName")}</label>
                      <input type="text" placeholder="John" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                    </div>
                    <div>
                      <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">{t("checkout.lastName")}</label>
                      <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">{t("checkout.address")}</label>
                    <input type="text" placeholder="123 Bloom Street" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">{t("checkout.city")}</label>
                      <input type="text" placeholder="Athens" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                    </div>
                    <div>
                      <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">{t("checkout.postalCode")}</label>
                      <input type="text" placeholder="10431" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{t("checkout.paymentDetails")}</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">{t("checkout.cardNumber")}</label>
                        <input type="text" placeholder="4242 4242 4242 4242" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">{t("checkout.expiry")}</label>
                          <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                        </div>
                        <div>
                          <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-2">CVC</label>
                          <input type="text" placeholder="123" className="w-full px-4 py-3 bg-muted border border-border text-foreground font-body text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => { clearCart(); setSubmitted(true); }}
                  className="w-full py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity mt-4"
                >
                  {t("checkout.placeOrder")} — ${totalPrice.toFixed(2)}
                </button>
                <p className="font-body text-xs text-muted-foreground text-center">{t("checkout.demo")}</p>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-muted/50 rounded-sm p-6 sticky top-24">
                  <h3 className="font-display text-lg text-foreground mb-4">{t("checkout.orderSummary")}</h3>
                  <div className="space-y-3 mb-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-body text-sm text-foreground">{item.name} <span className="text-muted-foreground">× {item.quantity}</span></p>
                          <p className="font-body text-xs text-muted-foreground">{item.size}</p>
                        </div>
                        <span className="font-body text-sm text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{t("checkout.subtotal")}</span>
                      <span className="font-body text-sm text-foreground">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{t("checkout.shipping")}</span>
                      <span className="font-body text-sm text-foreground">{t("checkout.free")}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="font-body text-sm text-foreground uppercase tracking-wider">{t("checkout.total")}</span>
                      <span className="font-display text-xl text-foreground">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
