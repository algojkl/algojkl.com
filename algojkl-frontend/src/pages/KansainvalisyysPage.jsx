import React from 'react'
import StarterImage from '../common/StarterImage'
import Vaihtovuosi from '../components/kansainvalisyys/Vaihtovuosi'
import Vaihtovinkit from '../components/kansainvalisyys/Vaihtovinkit'
import VaihtoOhjelmat from '../components/kansainvalisyys/VaihtoOhjelmat'
import Sivustot from '../components/kansainvalisyys/Sivustot'
import Kielitodistukset from '../components/kansainvalisyys/Kielitodistukset'
import starterDesktop from '../images/Page_starters/18.jpg'
import starterMobile from '../images/mobiili/20.png'

/**
 * KansainvalisyysPage-komponentti
 * Tämä komponentti renderöi kansainvälisyys-sivun sisällön, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. Useita alikomponentteja kansainvälisyyteen liittyvän tiedon renderöintiin:
 *    - Vaihtovuosi: tietoa vaihto-opiskelusta.
 *    - Vaihtovinkit: hyödyllisiä vinkkejä vaihto-opiskeluun.
 *    - VaihtoOhjelmat: tiedot eri vaihto-ohjelmista.
 *    - Sivustot: linkkejä hyödyllisiin sivustoihin.
 *    - Kielitodistukset: tietoa vaadituista kielitodistuksista.
 */

const KansainvalisyysPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Kansainvälisyys"
      />
      <div className="kansainvalisyys-container">
        <h1>Algolaisen vaihtovinkit ja linkit</h1>
        <Vaihtovuosi />
        <Vaihtovinkit />
        <VaihtoOhjelmat />
        <Sivustot />
        <Kielitodistukset />
      </div>
    </div>
  )
}

export default KansainvalisyysPage
