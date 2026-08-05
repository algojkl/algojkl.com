import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/**
 *  Palauttaa 404 Not Found -sivun, jos etsitään sivua, jota ei ole olemassa.
 */
const NotFound = () => {
  const { t } = useTranslation('common')

  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p className="notfound-title">{t('pages.notFound.title')}</p>
      <p>
        {t('pages.notFound.description')}
      </p>
      <Link to="/" className="notfound-link">
        {t('pages.notFound.backHome')}
      </Link>
    </div>
  )
}

export default NotFound
