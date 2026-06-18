import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang } from "../locales";

type T = (typeof translations)["el"];
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: T };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("el");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("mast-lang") as Lang | null) : null;
    if (saved === "el" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("mast-lang", l);
  };

  return (
    <LangCtx.Provider value={{ lang, setLang, t: translations[lang] as T }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
