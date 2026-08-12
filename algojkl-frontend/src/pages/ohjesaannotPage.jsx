import React from 'react'
import StarterImage from '../common/StarterImage'
import JuhlanauhaMerkit from '../components/ohjesäännöt/JuhlanauhaMerkit'
import Haalarietiketti from '../components/ohjesäännöt/Haalarietiketti'
import Teekkari from '../components/ohjesäännöt/Teekkari'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * Merkit-sivu
 *
 * Tämä komponentti renderöi Merkit-sivun sisällön.
 * Sivulla näytetään:
 * 1. Starter-kuva (desktop ja mobiili)
 * 2. JuhlanauhaMerkit – osio, joka kertoo juhlanauhoista ja niiden merkityksestä
 * 3. Haalarietiketti – osio, joka selittää haalareiden käytön ja etiketin
 * 4. Teekkari – osio, joka esittelee teekkarikulttuuria ja siihen liittyviä käytäntöjä
 *
 */
const Merkit = () => {
  const starterImages = usePageStarterImages('ohjesaannot')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt="Kerhotoiminta"
      />
      <div className="Lakki-container">
        <JuhlanauhaMerkit />
        <Teekkari />
        <Haalarietiketti />
      </div>
    </div>
  )
}

export default Merkit
