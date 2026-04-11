import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Globe, Moon, Sun } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import UserMenu from "./UserMenu";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.products"), to: "/products" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.pricing"), to: "/pricing" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="w-full px-4 md:px-10 flex items-center justify-between h-14 md:h-24">
        {/* Left - Logo */}
        <Link to="/" onClick={handleLogoClick} className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-foreground shrink-0">
          B L O S S O M
        </Link>

        {/* Center - Nav Links (desktop), absolutely centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${
                location.pathname === link.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right - Actions (desktop) */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {!isAuthenticated && (
            <>
              <LanguageToggle />
              <ThemeToggle />
            </>
          )}
          {isAuthenticated && (
            <>
              <LanguageToggle />
              <AnimatedThemeToggler className="p-2 rounded-sm border border-border hover:bg-muted transition-colors" />
            </>
          )}
          <UserMenu />
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-body">
                {totalItems}
              </span>
            )}
          </button>
          <Link
            to="/products"
            className="ml-2 px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            {t("nav.shopNow")}
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden ml-auto">
          <UserMenu />
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-body">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 py-4 border-t border-b border-border">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm text-center"
              >
                {t("nav.shopNow")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
