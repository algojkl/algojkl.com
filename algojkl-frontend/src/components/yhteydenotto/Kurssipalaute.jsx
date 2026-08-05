import React from 'react'
import { useTranslation } from 'react-i18next'
import YhteydenottoSection from './YhteydenottoSection'

const Kurssipalaute = () => {
  const { t } = useTranslation('common')

  return (
    <YhteydenottoSection title={t('pages.yhteydenotto.course.title')}>
      <p>
        {t('pages.yhteydenotto.course.description')}{' '}
        <strong>{t('pages.yhteydenotto.course.warning')}</strong>
      </p>

      <p>{t('pages.yhteydenotto.course.description2')}</p>
      <p>
        {t('pages.yhteydenotto.course.linkPrefix')}{' '}
        <a href="https://forms.gle/eXQokL9ukeJNgKoAA">
          {t('pages.yhteydenotto.course.linkLabel')}
        </a>
      </p>
    </YhteydenottoSection>
  )
}

export default Kurssipalaute
