import React from 'react'
import { useTranslation } from 'react-i18next'

const JuhlanauhaMerkit = () => {
  const { t } = useTranslation('common')
  const rules = t('pages.ohjesaannot.rules', { returnObjects: true })

  return (
    <div>
      <p>{t('pages.ohjesaannot.intro')}</p>
      <h1>{t('pages.ohjesaannot.title')}</h1>
      <p>
        {rules.map((rule, idx) => (
          <span key={idx}>
            {rule}
            <br />
            <br />
          </span>
        ))}
      </p>
    </div>
  )
}

export default JuhlanauhaMerkit
