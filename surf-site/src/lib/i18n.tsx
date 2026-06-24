import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "bg" | "en";
export type Pair = { bg: string; en: string };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };

const LangContext = createContext<Ctx>({ lang: "bg", setLang: () => {}, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof localStorage !== "undefined") {
      const s = localStorage.getItem("surf-lang");
      if (s === "bg" || s === "en") return s;
    }
    return "bg"; // Bulgarian is the primary language
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("surf-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "bg" ? "en" : "bg"));

  return <LangContext.Provider value={{ lang, setLang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/* t({bg, en}) → the string for the active language */
export function useT() {
  const { lang } = useLang();
  return (p: Pair) => p[lang];
}
