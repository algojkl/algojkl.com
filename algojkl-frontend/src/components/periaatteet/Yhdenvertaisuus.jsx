import React from 'react'
import { useTranslation } from 'react-i18next'

const Yhdenvertaisuus = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h3>
        <strong>{t('pages.periaatteet.equalityTitle')}</strong>
      </h3>
      <p>{t('pages.periaatteet.equality')}</p>
    </div>
  )
}

export default Yhdenvertaisuus
