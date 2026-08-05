import React from 'react'
import { useTranslation } from 'react-i18next'
import starterDesktop from '../images/Page_starters/3.jpg'
import starterMobile from '../images/mobiili/4.png'
import StarterImage from '../common/StarterImage'

const Calendar_key = import.meta.env.VITE_CALENDAR_API

/**
 *  TapahtumatPage-komponentti
 * Tämä komponentti renderöi Tapahtumat-sivun, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. Tapahtumatiedot ja upotetun Google-kalenterin, josta käyttäjät voivat tarkastella tulevia tapahtumia.
 */
const Events = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
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
