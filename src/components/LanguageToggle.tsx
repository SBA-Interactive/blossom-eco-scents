import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "gr" : "en")}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-border text-xs font-body tracking-wider uppercase text-foreground hover:bg-muted transition-colors"
      aria-label="Toggle language"
    >
      <span className="text-sm leading-none">{language === "en" ? "🇺🇸" : "🇬🇷"}</span>
      {language === "en" ? "EN" : "GR"}
    </button>
  );
};

export default LanguageToggle;
