import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="relative w-14 h-7 rounded-full bg-muted border border-border flex items-center px-1 transition-colors duration-300"
      >
        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-14 h-7 rounded-full bg-muted border border-border flex items-center px-1 transition-colors duration-300"
    >
      <div
        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs"
        style={{ transform: isDark ? "translateX(24px)" : "translateX(0)" }}
      >
        {isDark ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
      </div>
    </button>
  );
};

export default ThemeToggle;
