import React from 'react'
import { useTranslation } from 'react-i18next'
import starterDesktop from '../images/Page_starters/15.jpg'
import starterMobile from '../images/mobiili/17.png'
import StarterImage from '../common/StarterImage'

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
  const { t } = useTranslation('common')
  const kerhot = Object.values(
    t('pages.kerhotoiminta.kerhot', { returnObjects: true }),
  )
  const newClub = t('pages.kerhotoiminta.newClub', { returnObjects: true })
  const support = t('pages.kerhotoiminta.support', { returnObjects: true })

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt={t('pages.kerhotoiminta.title')}
      />
      <div className="kerhotoiminta-container">
        <h1>{t('pages.kerhotoiminta.title')}</h1>
        <p>{t('pages.kerhotoiminta.intro')}</p>

        <KerhotSection kerhot={kerhot} />
        <NewClubSection newClub={newClub} />
        <SupportSection support={support} />
      </div>
    </div>
  )
}

export default KerhotoimintaPage
