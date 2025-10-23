import React from 'react'
import starterDesktop from '../images/Page_starters/16.jpg'
import starterMobile from '../images/mobiili/18.png'
import useDevice from '../hooks/useDevice'
import HallitusHaku from '../components/hallihaku.jsx'

const HallihakuPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop

  return (
    <div>
      <img src={starterImage} alt="starter_image_rekryt" className="starter" />
      <div className="hallihaku-container-start">
        <h1>Hallitushaku 2026</h1>
        <p>
          Hallitushaku vuodelle 2026 on alkanut! Täältä pääset tutustumaan
          hakijoihin. Ohjeistus hallitukseen hakemiseen löytyy Algon
          ilmoituskanavalta.
        </p>
      </div>
        <HallitusHaku />
    </div>
  )
}

export default HallihakuPage
