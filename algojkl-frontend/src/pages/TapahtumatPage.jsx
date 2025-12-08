import React from 'react'
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
  return (
    <div>
     <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Events"
      />
      <div className="event-container">
        <h2>Tulevat tapahtumat</h2>
        <p>
          Tapahtumien ilmoittautumiset ja tarkemmat tiedot löytyvät Algo ry:n
          ilmoituskanavalta Telegramista. Algon Telegramin viestintäkanaviin
          liittyminen onnistuu sähköpostista löytyvistä jäsenkirjeistä tai
          kysymällä hallituslaisilta.
        </p>
        <iframe
          title="Google calendar"
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
