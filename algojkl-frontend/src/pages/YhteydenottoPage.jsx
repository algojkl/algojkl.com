import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import YhteydenottoSection from '../components/yhteydenotto/YhteydenottoSection'
import Kurssipalaute from '../components/yhteydenotto/Kurssipalaute'
import SopoKopoLomake from '../components/yhteydenotto/SopoKopo'
import YleinenPalaute from '../components/yhteydenotto/YleinenPalaute'
import usePageStarterImages from '../hooks/usePageStarterImages'

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
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('yhteydenotto')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.yhteydenotto.alt')}
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
