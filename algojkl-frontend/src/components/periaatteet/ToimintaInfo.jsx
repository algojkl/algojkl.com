import React from 'react'
import { useTranslation } from 'react-i18next'

const ToimintaInfo = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>{t('pages.periaatteet.title')}</h1>
      <p>
        {t('pages.periaatteet.intro')}{' '}
        <strong>
          <a href="https://forms.gle/zEB8omZsu8MbgTK38">
            {t('pages.periaatteet.formLink')}
          </a>
        </strong>
        . {t('pages.periaatteet.support')}
      </p>
      <p>
        <strong>{t('pages.periaatteet.summaryTitle')}</strong> <br />
        {t('pages.periaatteet.summary')}
      </p>
    </div>
  )
}

export default ToimintaInfo
