// import React from 'react';
import i18next from 'i18next';
import english from './en.json';
import vietnamse from './vi.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: english,
    vi: vietnamse,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
