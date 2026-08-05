import React from 'react'
import { useTranslation } from 'react-i18next'
import lakki from '../../images/lakki.jpg'

export const Teekkari = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <img
        src={lakki}
        alt={t('pages.ohjesaannot.teekkari.imageAlt')}
        className="lakki"
      />
      <h1>{t('pages.ohjesaannot.teekkari.title')}</h1>
      <p>
        {t('pages.ohjesaannot.teekkari.description')}
        <br />
        <br />
        <a href="https://jytyjkl.fi/">{t('pages.ohjesaannot.teekkari.linkText')}</a>{' '}
        {t('pages.ohjesaannot.teekkari.linkText2')}
      </p>
    </div>
  )
}

export default Teekkari
