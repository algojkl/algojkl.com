import React from 'react'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/13.jpg'
import starterMobile from '../images/mobiili/15.png'
import ToimintaInfo from '../components/periaatteet/ToimintaInfo'
import TurvallisemmanTilanPeriaatteet from '../components/periaatteet/TTPeriaatteet'
import Yhdenvertaisuus from '../components/periaatteet/Yhdenvertaisuus'

/**
 * PeriaatteetPage-komponentti
 * Tämä komponentti renderöi Algon periaatteet -sivun sisällön, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. Kolme alikomponenttia periaatteiden esittämiseen:
 *    - ToimintaInfo: tietoa Algon toiminnasta ja ohjeistuksista.
 *    - TurvallisemmanTilanPeriaatteet: säännöt turvallisen ja inklusiivisen ympäristön ylläpitämiseksi.
 *    - Yhdenvertaisuus: ohjeistukset yhdenvertaisuuden ja syrjimättömyyden edistämiseksi.
 */

const PeriaatteetPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Periaatteet"
      />
      <div className="periaate-container">
        <ToimintaInfo />
        <TurvallisemmanTilanPeriaatteet />
        <Yhdenvertaisuus />
      </div>
    </div>
  )
}

export default PeriaatteetPage
