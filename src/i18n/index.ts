import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export type TranslationKeys = typeof pt;

export const translations: Record<string, TranslationKeys> = {
  pt,
  en,
  es,
};

export type SupportedLanguage = "pt" | "en" | "es";

export const supportedLanguages: SupportedLanguage[] = ["pt", "en", "es"];

export const languageNames: Record<SupportedLanguage, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};
