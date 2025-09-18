// translations.tsx
import en from "./en.json";
import it from "./it.json";

export const translations = {
  en,
  it,
};

export type Language = "en" | "it";
export type Translations = typeof en;
