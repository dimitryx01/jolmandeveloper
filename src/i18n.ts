
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'es',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // React already safes from xss
    },
    detection: {
      order: ['navigator', 'htmlTag', 'cookie', 'localStorage'],
      caches: ['localStorage', 'cookie']
    },
    react: {
      useSuspense: false // To prevent issues with Suspense component
    }
  });

// Force load all translations to ensure they are available
i18n.loadNamespaces(['translation']);

export default i18n;
