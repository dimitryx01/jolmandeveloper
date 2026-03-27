import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

const match = typeof window !== 'undefined' ? window.location.pathname.match(/^\/(en|es)/) : null;
const initialLang = match ? match[1] : 'es';

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: initialLang,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;