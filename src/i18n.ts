import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEn from "./locales/en/common.json";
import commonPt from "./locales/pt-BR/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: commonEn,
    },
    "pt-BR": {
      common: commonPt,
    },
  },
  lng: "pt-BR",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
  react: {
    useSuspense: true,
  },
  debug: false,
});

export default i18n;
