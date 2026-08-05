import React from 'react'
import { useTranslation } from 'react-i18next'

const JasenEdutIntro = () => {
  const { t } = useTranslation('common')

  return (
    <p className="jasenedut-text">
      {t('pages.jasenedut.intro')}{' '}
      <strong>
        {t('pages.jasenedut.passwords')}{' '}
        <a href="/salaisuudet">{t('pages.jasenedut.secretsLink')}</a>.
      </strong>{' '}
      {t('pages.jasenedut.ask')}
    </p>
  )
}

export default JasenEdutIntro
