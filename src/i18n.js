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
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Başlangıç diliniz
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;