'use client';

import { createContext, useContext, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const LanguageContext = createContext({
  language: 'fr',
  changeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || 'fr');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </LanguageContext.Provider>
  );
};
