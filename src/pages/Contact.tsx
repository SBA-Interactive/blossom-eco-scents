import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { BlurFade } from "@/components/ui/blur-fade";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("contact.getInTouch")}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">{t("contact.title")}</h1>
            <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              {t("contact.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Section - Above Contact Form */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="space-y-6 text-muted-foreground text-center">
              <p className="font-body text-base leading-relaxed">
                Blossom is a sustainable fragrance brand that transforms discarded fruit peels into premium, eco-friendly perfumes. Our mission is to create beautiful scents while reducing waste and protecting the environment. We believe luxury fragrance should never come at the planet's expense.
              </p>
              <p className="font-body text-base leading-relaxed">
                Our products are 100% sustainable. We upcycle fruit peels that would otherwise go to waste, use cold-press extraction to preserve natural oils, package in recyclable glass bottles, and ship in carbon-neutral packaging. Every purchase supports our zero-waste mission.
              </p>
              <p className="font-body text-base leading-relaxed">
                Our fragrances are made from 100% natural ingredients with no synthetic chemicals, parabens, or phthalates. They're cruelty-free, vegan, and suitable for ages 10+. Each batch is carefully crafted and quality-tested to ensure the highest standards.
              </p>
              <p className="font-body text-base leading-relaxed">
                To order, simply browse our collection, select your desired fragrance and size, add to cart, and proceed to checkout. We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay, with all transactions secure and encrypted.
              </p>
              <p className="font-body text-base leading-relaxed">
                Shipping is free on orders over $50, with standard delivery taking 5-7 business days. Express and overnight options are available at checkout. We offer a 30-day return policy for unopened items in original condition - contact our customer service team to initiate a return.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
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

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
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