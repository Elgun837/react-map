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
.use(Backend)
.use(initReactI18next)
.init({
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;