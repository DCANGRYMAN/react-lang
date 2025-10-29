import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeEn from "./pages/Home/lang/en.json";
import homePt from "./pages/Home/lang/pt-BR.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: homeEn,
    },
    "pt-BR": {
      home: homePt,
    },
  },
  lng: "pt-BR",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
