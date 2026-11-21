import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "he";

interface LanguageContextValue {
  lang: Lang;
  isRtl: boolean;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "dulce-mio-lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "he" ? "he" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === "en" ? "he" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, isRtl: lang === "he", setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
