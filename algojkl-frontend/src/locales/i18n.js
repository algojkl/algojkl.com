import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fiCommon from './fi/common.json'
import enCommon from './en/common.json'

const savedLanguage = localStorage.getItem('algo-language') || 'fi'

const resources = {
  fi: {
    common: fiCommon,
  },
  en: {
    common: enCommon,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'fi',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
