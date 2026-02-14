import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import kk from './locales/kk.json';
import tr from './locales/tr.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      kk: { translation: kk },
      tr: { translation: tr },
      en: { translation: en },
    },
    lng: 'kk', // Бастапқы тіл - қазақша
    fallbackLng: 'kk',
    interpolation: {
      escapeValue: false,
    },
  });
// Force default language to English for now
i18n.changeLanguage('en');
i18n.options.fallbackLng = 'en';

export default i18n;
