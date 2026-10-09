import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export const THEME_STORAGE_KEY = "cts-theme";
export type ThemeName = "day" | "night";

export function applyTheme(theme: ThemeName) {
  const root = document.documentElement;
  root.classList.remove("dark");
  root.classList.toggle("night", theme === "night");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — theme simply won't persist */
  }
}

export function readStoredTheme(): ThemeName {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "night" ? "night" : "day";
  } catch {
    return "day";
  }
}

/** Day/night toggle icon — sits at the far-right corner of the header. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>("day");

  useEffect(() => {
    setTheme(readStoredTheme());
  }, []);

  const toggle = useCallback(() => {
    const next: ThemeName = theme === "day" ? "night" : "day";
    applyTheme(next);
    setTheme(next);
  }, [theme]);

  return (
    <button
      onClick={toggle}
      aria-label={theme === "day" ? "Switch to night mode" : "Switch to day mode"}
      title={theme === "day" ? "Switch to night mode" : "Switch to day mode"}
      className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-xl border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      {theme === "day" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
