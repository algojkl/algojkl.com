import React from 'react'
import { useTranslation } from 'react-i18next'
import YhteydenottoSection from './YhteydenottoSection'

const YleinenPalaute = () => {
  const { t } = useTranslation('common')

  return (
    <YhteydenottoSection title={t('pages.yhteydenotto.general.title')}>
      <p>{t('pages.yhteydenotto.general.description')}</p>
      <p>
        <a href="https://forms.gle/fje29tPTM4PQCtws9">
          {t('pages.yhteydenotto.general.linkLabel')}
        </a>
      </p>
    </YhteydenottoSection>
  )
}

export default YleinenPalaute
