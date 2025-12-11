import React from 'react'
import starterDesktop from '../images/Page_starters/17.jpg'
import starterMobile from '../images/mobiili/19.png'
import StarterImage from '../common/StarterImage'
import YhteydenottoSection from '../components/yhteydenotto/YhteydenottoSection'
import Kurssipalaute from '../components/yhteydenotto/Kurssipalaute'
import SopoKopoLomake from '../components/yhteydenotto/SopoKopo'
import YleinenPalaute from '../components/yhteydenotto/YleinenPalaute'

/**
 *  YhteydenottoPage-komponentti
 * Tämä komponentti renderöi Yhteydenotto-sivun sisällön.
 * Sivulla näytetään:
 * 1. Starter-kuva (desktop ja mobiili)
 * 2. Kurssipalaute-osio, jossa on linkki kurssipalautelomakkeeseen
 * 3. Sopo-Kopo Yhteydenottolomake-osio, jossa on linkki sopo-kopo-lomakkeeseen
 * 4. Yleinen palautelomake-osio, jossa on linkki yleiseen palautelomakkeeseen
 */
const YhteydenottoPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Yhteydenotto"
      />
      <div className="yhteydenotto-container">
        <Kurssipalaute />
        <SopoKopoLomake />
        <YleinenPalaute />
      </div>
    </div>
  )
}

export default YhteydenottoPage
