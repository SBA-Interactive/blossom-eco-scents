import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.products"), to: "/products" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.pricing"), to: "/pricing" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  return (
    <footer className="px-6 md:px-12 py-10 md:py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <Link to="/" className="font-display text-2xl font-semibold tracking-wide text-foreground">
          Blossom
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="font-body text-xs text-muted-foreground">
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
