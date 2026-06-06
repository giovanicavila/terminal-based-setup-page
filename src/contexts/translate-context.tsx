import { createContext, type ReactNode, useContext, useState } from "react";
import {
  type SupportedLanguage,
  type TranslationKeys,
  translations,
} from "@/i18n";

interface TranslateContextType {
  t: TranslationKeys;
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
}

const TranslateContext = createContext<TranslateContextType | null>(null);

interface TranslateProviderProps {
  children: ReactNode;
  defaultLanguage?: SupportedLanguage;
}

export function TranslateProvider({
  children,
  defaultLanguage = "pt",
}: TranslateProviderProps) {
  const [language, setLanguage] = useState<SupportedLanguage>(() => {
    const stored = localStorage.getItem("app-language") as SupportedLanguage;
    if (stored && translations[stored]) {
      return stored;
    }
    return defaultLanguage;
  });

  const handleSetLanguage = (lang: SupportedLanguage) => {
    localStorage.setItem("app-language", lang);
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <TranslateContext.Provider
      value={{ t, language, setLanguage: handleSetLanguage }}
    >
      {children}
    </TranslateContext.Provider>
  );
}

export function useTranslate() {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error("useTranslate must be used within a TranslateProvider");
  }
  return context;
}
