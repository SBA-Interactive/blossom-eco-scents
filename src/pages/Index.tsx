import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";

const placeholder = "/placeholder.svg";

const Index = () => {
  const { t } = useLanguage();

  const products = [
    { name: "Citrus Bloom", description: "Bright orange & grapefruit peel notes with a warm amber finish.", price: "$48", image: placeholder },
    { name: "Petal Dew", description: "Soft rose-petal essence blended with peach skin undertones.", price: "$52", image: placeholder },
    { name: "Verde Zest", description: "Lime peel and crushed herbs for a crisp, invigorating scent.", price: "$48", image: placeholder },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[60vh] md:min-h-[80vh] flex items-center py-8 md:py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 md:mb-4">{t("index.tagline")}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground mb-4 md:mb-6">
              {t("index.heroTitle1")}<br /><span className="italic font-normal text-accent">{t("index.heroTitle2")}</span> {t("index.heroTitle3")}
            </h1>
            <p className="font-body text-sm md:text-base lg:text-lg text-muted-foreground max-w-md mb-6 md:mb-8 leading-relaxed">
              {t("index.heroDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity text-center">
                {t("index.exploreScents")}
              </Link>
              <Link to="/about" className="px-8 py-3.5 border border-foreground text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-foreground hover:text-background transition-colors text-center">
                {t("index.ourStory")}
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="order-1 lg:order-2">
            <img src={placeholder} alt="Blossom perfume bottle surrounded by fresh citrus fruit peels" className="w-full h-auto rounded-sm" width={1280} height={960} />
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("index.collection")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">{t("index.collectionTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <Link to="/products" key={product.name} className="group">
                <div className="overflow-hidden rounded-sm mb-6 bg-muted">
                  <img src={product.image} alt={product.name} loading="lazy" width={800} height={1000} className="w-full h-auto aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-1">{product.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">{product.description}</p>
                <span className="font-display text-xl text-foreground">{product.price}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
              {t("index.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={placeholder} alt="Fresh fruit peels used as natural fragrance ingredients" loading="lazy" width={1200} height={800} className="w-full h-auto rounded-sm" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("about.ourStory")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">{t("index.fromPeel")}</h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              {t("index.peelDesc")}
            </p>
            <Link to="/about" className="px-8 py-3.5 border border-foreground text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-foreground hover:text-background transition-colors">
              {t("index.learnMore")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground mb-4">{t("index.stayInBloom")}</h2>
          <p className="font-body text-sm text-primary-foreground/70 mb-8 leading-relaxed">
            {t("index.newsletterDesc")}
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" required className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70 font-body text-sm rounded-sm focus:outline-none focus:border-primary-foreground/50 transition-colors" />
            <button type="submit" className="px-8 py-3 bg-primary-foreground text-primary font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">{t("index.subscribe")}</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
