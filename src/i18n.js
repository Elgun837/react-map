import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAz from "./localization/translationAz.json";
import translationEn from "./localization/translationEn.json";
import translationRu from "./localization/translationRu.json";


const resources = {
    en: {
      translation: translationEn,
    },
    az: {
      translation: translationAz,
    },
    ru: {
      translation: translationRu,
    },
  };


  
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  fallbackLng: "en",
  resources,
  detection: {
    caches: ["cookie"],
  },
  lng,
});

export default i18n;