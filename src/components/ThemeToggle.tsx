import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="relative w-14 h-7 rounded-full bg-muted border border-border flex items-center px-1 transition-colors duration-300"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs"
        animate={{ x: dark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {dark ? "🌙" : "☀️"}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
