import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "RK5WU6P98q8D9Lkvbelhvw";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["uz","ru","en"],
    
    backend: {
      loadPath: loadPath
    }
  })