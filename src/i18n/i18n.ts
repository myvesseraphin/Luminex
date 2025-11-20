import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Correct paths (same folder)
import en from "./en.json";
import fr from "./fr.json";
import rw from "./rw.json";
import sw from "./sw.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      rw: { translation: rw },
      sw: { translation: sw },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
