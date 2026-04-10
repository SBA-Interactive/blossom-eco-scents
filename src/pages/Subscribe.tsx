import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Subscribe = () => {
  const [form, setForm] = useState({ name: "", email: "", card: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding min-h-[60vh] flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t("subscribe.welcome")}</h1>
            <p className="font-body text-sm text-muted-foreground mb-8">{t("subscribe.welcomeDesc")}</p>
            <Link to="/" className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
              {t("subscribe.backHome")}
            </Link>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-lg mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("subscribe.tag")}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">{t("subscribe.title")}</h1>
            <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              {t("subscribe.desc")}
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-sm p-6 mb-8">
            <h3 className="font-display text-lg text-foreground mb-3">{t("subscribe.whatsIncluded")}</h3>
            <ul className="space-y-2">
              {[t("pricing.feature.seasonal"), t("pricing.feature.exclusive"), t("pricing.feature.freeAlways"), t("pricing.feature.cancel"), t("pricing.feature.membersOnly")].map((f) => (
                <li key={f} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-0.5">✦</span> {f}
                </li>
              ))}
            </ul>
          </div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder={t("subscribe.fullName")} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors" />
            <input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors" />
            <input type="text" placeholder={t("subscribe.cardPlaceholder")} required value={form.card} onChange={(e) => setForm({ ...form, card: e.target.value })} className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground font-body text-sm rounded-sm focus:outline-none focus:border-primary transition-colors" />

            <div className="pt-2 space-y-2">
              <div className="flex justify-between font-body text-sm text-muted-foreground">
                <span>{t("subscribe.monthly")}</span>
                <span className="text-foreground font-display">$38/{t("pricing.perMonth").replace("/", "")}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-muted-foreground">
                <span>{t("subscribe.shipping")}</span>
                <span className="text-accent font-semibold">FREE</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="px-10 py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
                {t("subscribe.cta")}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Subscribe;
