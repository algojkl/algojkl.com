import React from 'react'
import starterDesktop from '../images/Page_starters/3.jpg'
import starterMobile from '../images/mobiili/4.png'
import useDevice from '../hooks/useDevice'

const Calendar_key = import.meta.env.VITE_CALENDAR_API

const Events = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop
  return (
    <div>
      <img src={starterImage} alt="page_stater_events" className="starter" />
      <div className="event-container">
        <h2>Tulevat tapahtumat</h2>
        <p>
          Tapahtumien ilmoittautumiset ja tarkemmat tiedot löytyvät Algo ry:n
          ilmoituskanavalta Telegramista. Algon Telegramin viestintäkanaviin
          liittyminen onnistuu sähköpostista löytyvistä jäsenkirjeistä tai
          kysymällä hallituslaisilta
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
