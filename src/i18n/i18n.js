import transEN from 'assets/locales/en.translate.json';
import transVN from 'assets/locales/vn.translate.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const i18nInstance = i18n.createInstance();

const resources = {
  en: {
    translation: transEN,
  },
  vn: {
    translation: transVN,
  },
};

i18nInstance.use(initReactI18next).init({
  // lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'vn',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  resources,
});

export default i18nInstance;
