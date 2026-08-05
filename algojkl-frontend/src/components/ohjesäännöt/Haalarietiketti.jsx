import React from 'react'
import { useTranslation } from 'react-i18next'

const Haalarietiketti = () => {
  const { t } = useTranslation('common')
  const paragraphs = t('pages.ohjesaannot.haalarietiketti.paragraphs', {
    returnObjects: true,
  })

  return (
    <div>
      <h1>{t('pages.ohjesaannot.haalarietiketti.title')}</h1>
      <p>
        {paragraphs.map((paragraph, idx) => (
          <span key={idx}>
            {paragraph}
            <br />
            <br />
          </span>
        ))}
      </p>
    </div>
  )
}

export default Haalarietiketti
