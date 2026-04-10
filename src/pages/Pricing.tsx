import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";

const Pricing = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.singleScent"),
      price: "$48",
      period: t("pricing.oneTime"),
      description: t("pricing.singleDesc"),
      features: [t("pricing.feature.1frag"), t("pricing.feature.recyclable"), t("pricing.feature.freeOver50"), t("pricing.feature.giftReady")],
      cta: t("pricing.shopNow"),
      highlighted: false,
      route: "/order/single",
    },
    {
      name: t("pricing.scentTrio"),
      price: "$125",
      period: t("pricing.oneTime"),
      description: t("pricing.trioDesc"),
      features: [t("pricing.feature.3frags"), t("pricing.feature.recyclables"), t("pricing.feature.freeShipping"), t("pricing.feature.premiumBox"), t("pricing.feature.save19")],
      cta: t("pricing.getTrio"),
      highlighted: true,
      route: "/order/trio",
    },
    {
      name: t("pricing.bloomClub"),
      price: "$38",
      period: t("pricing.perMonth"),
      description: t("pricing.clubDesc"),
      features: [t("pricing.feature.seasonal"), t("pricing.feature.exclusive"), t("pricing.feature.freeAlways"), t("pricing.feature.cancel"), t("pricing.feature.membersOnly")],
      cta: t("pricing.joinClub"),
      highlighted: false,
      route: "/subscribe",
    },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("pricing.title")}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4">{t("pricing.heading")}</h1>
            <p className="font-body text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              {t("pricing.desc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-sm p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground ring-2 ring-primary"
                    : "bg-card border border-border"
                }`}
              >
                <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display text-4xl">{plan.price}</span>
                  <span className={`font-body text-sm ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{plan.period}</span>
                </div>
                <p className={`font-body text-sm mb-6 leading-relaxed ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`font-body text-sm flex items-start gap-2 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      <span className="mt-0.5">✦</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(plan.route)}
                  className={`block w-full text-center px-6 py-3 font-body text-xs tracking-widest uppercase rounded-sm transition-opacity hover:opacity-90 ${
                    plan.highlighted
                      ? "bg-primary-foreground text-primary"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
