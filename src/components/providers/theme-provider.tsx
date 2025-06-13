
"use client"

import type { FC, ReactNode } from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "system", // Default for context, actual initial value is derived from props.defaultTheme
  setTheme: () => null,
});

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) => {
  // Initialize state with defaultTheme. This is SSR-safe.
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Effect to load theme from localStorage on mount (client-side only)
  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]); // This effect runs once on the client after hydration.
                   // storageKey is typically constant after component mount.

  // Effect to apply the theme to the DOM. Runs on client after theme state changes.
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme); // theme is 'light' or 'dark'
    }
  }, [theme]); // Re-apply theme whenever the theme state changes.

  const value = {
    theme, // The 'logical' theme ('light', 'dark', or 'system')
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme); // Persist to localStorage
      setTheme(newTheme); // Update state
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
