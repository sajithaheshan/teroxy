import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export type ThemeMode = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<ThemeMode>("teroxy-theme", "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return { theme, setTheme, toggle };
}
