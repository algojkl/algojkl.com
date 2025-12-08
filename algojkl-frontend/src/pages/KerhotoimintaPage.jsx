import React from 'react'
import starterDesktop from '../images/Page_starters/15.jpg'
import starterMobile from '../images/mobiili/17.png'
import StarterImage from '../common/StarterImage'

import { kerhotoimintaData } from '../PageData/kerhotoimintaData'
import KerhotSection from '../components/Kerhotoiminta/KerhotSection'
import NewClubSection from '../components/Kerhotoiminta/NewClubSection'
import SupportSection from '../components/Kerhotoiminta/SupportSection'

/**
 * KerhotoimintaPage
 *
 * Pääkomponentti, joka kokoaa kerhotoimintaa koskevan sisällön.
 * Renderöi:
 * - StarterImage ylhäällä
 * - KerhotSection: olemassa olevat kerhot
 * - NewClubSection: ohjeet uuden kerhon perustamiseen
 * - SupportSection: kerhoille tarjottava tuki
 */
const KerhotoimintaPage = () => {
  const { title, intro, kerhot, newClub, support } = kerhotoimintaData

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt={title}
      />
      <div className="kerhotoiminta-container">
        <h1>{title}</h1>
        <p>{intro}</p>

        <KerhotSection kerhot={kerhot} />
        <NewClubSection newClub={newClub} />
        <SupportSection support={support} />
      </div>
    </div>
  )
}

export default KerhotoimintaPage
