import React from 'react'
import { useTranslation } from 'react-i18next'

const TurvallisemmanTilanPeriaatteet = () => {
  const { t } = useTranslation('common')
  const values = t('pages.periaatteet.values', { returnObjects: true })
  const safety = t('pages.periaatteet.safety', { returnObjects: true })

  return (
    <div>
      <h3>
        <strong>{t('pages.periaatteet.valuesTitle')}</strong>
      </h3>
      <ul>
        {values.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>

      <h3>
        <strong>{t('pages.periaatteet.safetyTitle')}</strong>
      </h3>
      <ul>
        {safety.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default TurvallisemmanTilanPeriaatteet
