import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { Leaf, Heart, Shield, ShoppingBag, CreditCard, Truck, RotateCcw, Sparkles } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const placeholder = "/placeholder.svg";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { title: t("about.natural"), desc: t("about.naturalDesc") },
    { title: t("about.zeroWaste"), desc: t("about.zeroWasteDesc") },
    { title: t("about.safeForAll"), desc: t("about.safeForAllDesc") },
    { title: t("about.ecoFriendly"), desc: t("about.ecoFriendlyDesc") },
  ];

  const timeline = [
    { step: "01", title: t("about.sourcing"), desc: t("about.sourcingDesc") },
    { step: "02", title: t("about.extraction"), desc: t("about.extractionDesc") },
    { step: "03", title: t("about.blending"), desc: t("about.blendingDesc") },
    { step: "04", title: t("about.bottling"), desc: t("about.bottlingDesc") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <img src={placeholder} alt="Natural fruit peel ingredients" width={1200} height={800} className="w-full h-auto rounded-sm" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("about.ourStory")}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4 md:mb-6">{t("about.title")}</h1>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
              {t("about.desc1")}
            </p>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              {t("about.desc2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("about.values")}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground">{t("about.valuesTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((v) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border-l-2 border-primary pl-5">
                <h4 className="font-display text-lg md:text-xl text-foreground mb-2">{v.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("about.howItWorks")}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground">{t("about.process")}</h2>
          </div>
          <div className="space-y-8 md:space-y-12">
            {timeline.map((tl) => (
              <motion.div key={tl.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex gap-4 md:gap-6 items-start">
                <span className="font-display text-3xl md:text-4xl text-primary/30 shrink-0">{tl.step}</span>
                <div>
                  <h4 className="font-display text-xl md:text-2xl text-foreground mb-2">{tl.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{tl.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto">
          <BlurFade delay={0.1} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground">{t("about.faq.title")}</h2>
          </BlurFade>

          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg bg-background">
            {/* Header gradient */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                {[
                  { id: "faq-1", icon: <Sparkles className="w-5 h-5 text-primary shrink-0" />, question: t("about.faq.brandStory"), answer: t("about.faq.brandStoryAnswer") },
                  { id: "faq-2", icon: <Leaf className="w-5 h-5 text-primary shrink-0" />, question: t("about.faq.sustainability"), answer: t("about.faq.sustainabilityAnswer") },
                  { id: "faq-3", icon: <Shield className="w-5 h-5 text-primary shrink-0" />, question: t("about.faq.quality"), answer: t("about.faq.qualityAnswer") },
                  { id: "faq-4", icon: <ShoppingBag className="w-5 h-5 text-primary shrink-0" />, question: t("about.faq.ordering"), answer: t("about.faq.orderingAnswer") },
                  { id: "faq-5", icon: <CreditCard className="w-5 h-5 text-primary shrink-0" />, question: t("about.faq.payment"), answer: t("about.faq.paymentAnswer") },
                  { id: "faq-6", icon: <Truck className="w-5 h-5 text-primary shrink-0" />, question: t("about.faq.shippingReturns"), answer: t("about.faq.shippingReturnsAnswer") },
                ].map((item) => {
                  const [openFaq, setOpenFaq] = useState<string | null>(null);
                  const isOpen = openFaq === item.id;
                  
                  return (
                    <div
                      key={item.id}
                      className="border border-border rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : item.id)}
                        className="flex w-full items-center justify-between p-5 font-body text-sm text-left group"
                      >
                        <span className="pr-4 flex items-center gap-3">{item.icon}{item.question}</span>
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
                            <p className="p-5 pt-0 font-body text-sm text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-primary-foreground mb-4 md:mb-6">{t("about.readyToBloom")}</h2>
          <p className="font-body text-sm text-primary-foreground/70 mb-6 md:mb-8 leading-relaxed">{t("about.readyDesc")}</p>
          <a href="/products" className="inline-block px-8 py-3.5 bg-primary-foreground text-primary font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
            {t("nav.shopNow")}
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
