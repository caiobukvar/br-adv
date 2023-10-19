import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: require("../../translations/en-specializations.json"),
    pt: require("../../translations/pt-specializations.json"),
    es: require("../../translations/es-specializations.json"),
    fr: require("../../translations/fr-specializations.json"),
    de: require("../../translations/de-specializations.json"),
    en: require("../../translations/en-services.json"),
    pt: require("../../translations/pt-services.json"),
    es: require("../../translations/es-services.json"),
    fr: require("../../translations/fr-services.json"),
    de: require("../../translations/de-services.json"),
    en: require("../../translations/en-advice.json"),
    pt: require("../../translations/pt-advice.json"),
    es: require("../../translations/es-advice.json"),
    fr: require("../../translations/fr-advice.json"),
    de: require("../../translations/de-advice.json"),
  },
  lng: "pt",
  interpolation: {
    escapeValue: false,
  },
});
