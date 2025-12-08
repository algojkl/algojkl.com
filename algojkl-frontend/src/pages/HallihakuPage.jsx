import React from 'react'
import starterDesktop from '../images/Page_starters/16.jpg'
import starterMobile from '../images/mobiili/18.png'
import StarterImage from '../common/StarterImage'
import HallitusHaku from '../components/Hallihaku/HallitusHaku.jsx'

/**
 * HallihakuPage-komponentti
 * Tämä komponentti renderöi Hallitushaku-sivun, joka sisältää:
 * 1. StarterImage-komponentin sivun yläosan kuvalle (desktop ja mobiili).
 * 2. Johdantotekstin hallitushakuprosessista vuodelle 2026.
 * 3. HallitusHaku-komponentin, joka näyttää hakijat ja hallitukseen liittyvän sisällön (Contentfulista data).
 */
const HallihakuPage = () => {

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Hallihaku"
      />
      <div className="hallihaku-container-start">
        <h1>Hallitushaku 2027</h1>
        <p>
          Hallitushaku vuodelle 2027 on alkanut! Täältä pääset tutustumaan
          hakijoihin. Ohjeistus hallitukseen hakemiseen löytyy Algon
          ilmoituskanavalta.
        </p>
      </div>
      <HallitusHaku />
    </div>
  )
}

export default HallihakuPage
