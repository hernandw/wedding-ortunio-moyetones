import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = import.meta.env.VITE_NEXUS_APIKEY;
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["es", "de", "en"],

    backend: {
      loadPath: loadPath,
    },
    returnObjects: true,
  });
