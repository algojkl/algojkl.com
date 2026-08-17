import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import Vaihtovuosi from '../components/kansainvalisyys/Vaihtovuosi'
import Vaihtovinkit from '../components/kansainvalisyys/Vaihtovinkit'
import VaihtoOhjelmat from '../components/kansainvalisyys/VaihtoOhjelmat'
import Sivustot from '../components/kansainvalisyys/Sivustot'
import Kielitodistukset from '../components/kansainvalisyys/Kielitodistukset'
import usePageStarterImages from '../hooks/usePageStarterImages'

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
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('kansainvalisyys')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.kansainvalisyys.alt')}
      />
      <div className="kansainvalisyys-container">
        <h1>{t('pages.kansainvalisyys.title')}</h1>
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
