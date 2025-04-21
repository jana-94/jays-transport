// src/app/language/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './fr.json'
import en from './en.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'fr',
  lng: 'fr', // default language
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en
    },
    fr: {
      translation: fr
    }
  }
});

export default i18n;
