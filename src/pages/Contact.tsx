import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { BlurFade } from "@/components/ui/blur-fade";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* FAQ Section */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="space-y-3">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                {t("contact.faq.title")}
              </h2>
              
              {[
                { id: "about", question: t("contact.faq.about"), answer: t("contact.faq.aboutAnswer") },
                { id: "sustainability", question: t("contact.faq.sustainability"), answer: t("contact.faq.sustainabilityAnswer") },
                { id: "ingredients", question: t("contact.faq.ingredients"), answer: t("contact.faq.ingredientsAnswer") },
                { id: "ordering", question: t("contact.faq.ordering"), answer: t("contact.faq.orderingAnswer") },
                { id: "shipping-returns", question: t("contact.faq.shippingReturns"), answer: t("contact.faq.shippingReturnsAnswer") },
              ].map((item) => {
                const isOpen = openFaq === item.id;
                
                return (
                  <div key={item.id} className="border border-border rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between p-4 font-body text-base text-left group"
                    >
                      <span className="pr-4">{item.question}</span>
                      <span className={`shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    <AnimatePresence mode="wait">
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="p-4 pt-0 font-body text-base text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Hero + Form Section - Merged */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("contact.getInTouch")}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">{t("contact.title")}</h1>
            <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              {t("contact.desc")}
            </p>
          </motion.div>

          {sent ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="font-display text-3xl text-foreground mb-4">{t("contact.thankYou")}</p>
              <p className="font-body text-muted-foreground">{t("contact.thankYouDesc")}</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder={t("contact.name")} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder={t("contact.email")} required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <textarea placeholder={t("contact.message")} required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors resize-none" />
              <div className="text-center">
                <button type="submit" className="px-10 py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">{t("contact.send")}</button>
              </div>
            </motion.form>
)}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-16">
            <div>
              <h4 className="font-display text-lg text-foreground mb-1">{t("contact.emailLabel")}</h4>
              <p className="font-body text-sm text-muted-foreground">info@example.com</p>
            </div>
            <div>
              <h4 className="font-display text-lg text-foreground mb-1">{t("contact.location")}</h4>
              <p className="font-body text-sm text-muted-foreground">Athens, Greece</p>
            </div>
            <div>
              <h4 className="font-display text-lg text-foreground mb-1">{t("contact.social")}</h4>
              <p className="font-body text-sm text-muted-foreground">@yourbrand</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;