import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import usePageStarterImages from '../hooks/usePageStarterImages'

const Calendar_key = import.meta.env.VITE_CALENDAR_API

/**
 *  TapahtumatPage-komponentti
 * Tämä komponentti renderöi Tapahtumat-sivun, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. Tapahtumatiedot ja upotetun Google-kalenterin, josta käyttäjät voivat tarkastella tulevia tapahtumia.
 */
const Events = () => {
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('tapahtumat')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.tapahtumat.alt')}
      />
      <div className="event-container">
        <h2>{t('pages.tapahtumat.title')}</h2>
        <p>{t('pages.tapahtumat.description')}</p>
        <iframe
          title={t('pages.tapahtumat.calendarTitle')}
          src={Calendar_key}
          className="google-calendar"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
}

export default Events
