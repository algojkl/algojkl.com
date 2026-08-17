import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import halli2022 from '../images/halli_2022.png'

import PersonCard from '../components/PersonCard.jsx'
import Perustajat from '../components/perustajat.jsx'
import VuodenAlgolaiset from '../components/vuodenAlgolaiset.jsx'

import {
  vuodenAlgolaiset,
  kunniajasenet,
  perustajat2022,
} from '../PageData/kunniaData'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * KunniagalleriaPage
 *
 * Renderöi sivun kunniajäsenistä, Vuoden Algolaiset -palkinnot
 * ja perustajajäsenet/hallituksen 2022 kuvan kanssa.
 */
const KunniagalleriaPage = () => {
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('kunniagalleria')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.kunniagalleria.alt')}
      />

      <div className="kunnia-container">
        <h2>{t('pages.kunniagalleria.honoraryTitle')}</h2>
        <p>
          <i>{t('pages.kunniagalleria.honoraryDescription')}</i>
        </p>
        <div className="kunniajasenet">
          {kunniajasenet.map((p, idx) => (
            <PersonCard key={idx} name={p.name} year={p.year} list />
          ))}
        </div>
      </div>

      <div className="kunnia-container">
        <h2>{t('pages.kunniagalleria.yearlyTitle')}</h2>
        <p>
          <i>{t('pages.kunniagalleria.yearlyDescription')}</i>
        </p>
        <VuodenAlgolaiset people={vuodenAlgolaiset} />
      </div>
      <Perustajat image={halli2022} members={perustajat2022} year={2022} />
      <div className="kunnia-container">
        <p>
          {t('pages.kunniagalleria.previousBoards')}{' '}
          <a href="/entiset-hallitukset">{t('pages.kunniagalleria.here')}</a>
        </p>
      </div>
    </div>
  )
}

export default KunniagalleriaPage
