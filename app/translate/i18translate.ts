import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import it from "./it.json";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, it: { translation: it } },
  lng: "en", // lingua di default
  fallbackLng: "en",
  interpolation: { escapeValue: false }, // React già fa escaping
});

export default i18n;
