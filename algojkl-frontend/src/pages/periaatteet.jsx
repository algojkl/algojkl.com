import React from 'react'
import StarterImage from '../common/StarterImage'
import ToimintaInfo from '../components/periaatteet/ToimintaInfo'
import TurvallisemmanTilanPeriaatteet from '../components/periaatteet/TTPeriaatteet'
import Yhdenvertaisuus from '../components/periaatteet/Yhdenvertaisuus'
import usePageStarterImages from '../hooks/usePageStarterImages'

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
  const starterImages = usePageStarterImages('periaatteet')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
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
