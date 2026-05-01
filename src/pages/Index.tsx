import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { BlurFade } from "@/components/ui/blur-fade";
import { SlideIn } from "@/components/ui/slide-in";
import { useLanguage } from "@/context/LanguageContext";

const placeholder = "placeholder.jpg";

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
          <BlurFade delay={0.1} yOffset={30} blur="6px" className="order-2 lg:order-1">
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
          </BlurFade>
          <BlurFade delay={0.2} yOffset={20} className="order-1 lg:order-2">
            <img src={placeholder} alt="Blossom perfume bottle surrounded by fresh citrus fruit peels" className="w-full h-auto rounded-sm" width={1280} height={960} />
          </BlurFade>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <SlideIn delay={0.1} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("index.collection")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">{t("index.collectionTitle")}</h2>
          </SlideIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product, i) => (
              <BlurFade key={product.name} delay={0.1 + i * 0.1} yOffset={30}>
                <Link to="/products" className="group block">
                  <div className="h-full rounded-xl border border-border bg-card group-hover:scale-[1.03] group-hover:shadow-2xl transition-all duration-300">
                    <div className="overflow-hidden rounded-t-xl mb-0 bg-muted">
                      <img src={product.image} alt={product.name} loading="lazy" width={800} height={1000} className="w-full h-auto aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl text-foreground mb-2">{product.name}</h3>
                      <p className="font-body text-sm text-muted-foreground mb-4">{product.description}</p>
                      <span className="font-display text-xl text-foreground">{product.price}</span>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
          <SlideIn delay={0.3} className="text-center mt-12">
            <Link to="/products" className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
              {t("index.viewAll")}
            </Link>
          </SlideIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SlideIn delay={0.1} direction="left">
            <img src={placeholder} alt="Fresh fruit peels used as natural fragrance ingredients" loading="lazy" width={1200} height={800} className="w-full h-auto rounded-sm" />
          </SlideIn>
          <SlideIn delay={0.2} direction="right">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("about.ourStory")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">{t("index.fromPeel")}</h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              {t("index.peelDesc")}
            </p>
            <Link to="/about" className="px-8 py-3.5 border border-foreground text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-foreground hover:text-background transition-colors">
              {t("index.learnMore")}
            </Link>
          </SlideIn>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <SlideIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground mb-4">{t("index.stayInBloom")}</h2>
            <p className="font-body text-sm text-primary-foreground/70 mb-8 leading-relaxed">
              {t("index.newsletterDesc")}
            </p>
          </SlideIn>
          <SlideIn delay={0.2}>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" required className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70 font-body text-sm rounded-sm focus:outline-none focus:border-primary-foreground/50 transition-colors" />
              <button type="submit" className="px-8 py-3 bg-primary-foreground text-primary font-body text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">{t("index.subscribe")}</button>
            </form>
          </SlideIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
