import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const match = typeof window !== 'undefined' ? window.location.pathname.match(/^\/(en|es)/) : null;
const initialLang = match ? match[1] : 'es';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: initialLang,
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: true },
  });

export default i18n;
