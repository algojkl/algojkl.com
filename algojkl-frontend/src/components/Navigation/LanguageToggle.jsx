import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageToggle = () => {
  const { i18n, t } = useTranslation('common')

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem('algo-language', language)
  }

  const activeLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'fi'

  return (
    <div className="language-toggle" aria-label={t('nav.language.toggle')}>
      <button
        type="button"
        className={activeLanguage === 'fi' ? 'active' : ''}
        onClick={() => changeLanguage('fi')}
      >
        {t('nav.language.fi')}
      </button>
      <button
        type="button"
        className={activeLanguage === 'en' ? 'active' : ''}
        onClick={() => changeLanguage('en')}
      >
        {t('nav.language.en')}
      </button>
    </div>
  )
}

export default LanguageToggle
