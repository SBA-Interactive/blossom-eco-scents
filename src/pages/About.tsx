import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { BlurFade } from "@/components/ui/blur-fade";
import { SlideIn } from "@/components/ui/slide-in";

const placeholder = "/placeholder.jpg";

const About = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<string | null>(null);

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

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
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
            {values.map((v, i) => (
              <SlideIn key={v.title} direction="up" delay={i * 0.1}>
                <div className="border-l-2 border-primary pl-5">
                  <h4 className="font-display text-lg md:text-xl text-foreground mb-2">{v.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </SlideIn>
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
            {timeline.map((tl, i) => (
              <SlideIn key={tl.step} direction="left" delay={i * 0.1}>
                <div className="flex gap-4 md:gap-6 items-start">
                  <span className="font-display text-3xl md:text-4xl text-primary/30 shrink-0">{tl.step}</span>
                  <div>
                    <h4 className="font-display text-xl md:text-2xl text-foreground mb-2">{tl.title}</h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{tl.desc}</p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-primary-foreground mb-4 md:mb-6">{t("about.readyToBloom")}</h2>
          <p className="font-body text-sm text-primary-foreground/70 mb-6 md:mb-8 leading-relaxed">{t("about.readyDesc")}</p>
          <Link to="/products" className="inline-block px-8 py-3.5 bg-primary-foreground text-primary font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
            {t("nav.shopNow")}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
