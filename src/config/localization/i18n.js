import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import * as esL from "./translations/es.json";
import * as enL from "./translations/en.json";
import LanguageDetector from "i18next-browser-languagedetector";
i18n.use(LanguageDetector).use(initReactI18next).init({
    resources:{
        en:{
            translation:enL,
        },
        es:{
            translation:esL,
        },
    },
    //lng: "es",
    fallbackLng: "en",
    interpolation:{
        escapeValue: false,
    },
});

export {default} from "i18next"