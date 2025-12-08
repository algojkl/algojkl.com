import React from 'react'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/11.jpg'
import starterMobile from '../images/mobiili/13.png'
import PytKirja from '../components/pytKirjaFetch'

/**
 * Documents-komponentti
 * Tämä komponentti esittää Algon killan dokumenttisivun.
 * Sivulla on aloituskuva ja komponentti PytKirja, joka huolehtii
 * dokumenttien hakemisesta ja esittämisestä.
 */
const Documents = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Dokumentit"
      />
      <div>
        <PytKirja />
      </div>
    </div>
  )
}

export default Documents
