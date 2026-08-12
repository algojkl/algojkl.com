import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import HallitusHaku from '../components/Hallihaku/HallitusHaku.jsx'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * HallihakuPage-komponentti
 * Tämä komponentti renderöi Hallitushaku-sivun, joka sisältää:
 * 1. StarterImage-komponentin sivun yläosan kuvalle (desktop ja mobiili).
 * 2. Johdantotekstin hallitushakuprosessista vuodelle 2026.
 * 3. HallitusHaku-komponentin, joka näyttää hakijat ja hallitukseen liittyvän sisällön (Contentfulista data).
 */
const HallihakuPage = () => {
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('hallihaku')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.hallihaku.alt')}
      />
      <div className="hallihaku-container-start">
        <h1>{t('pages.hallihaku.title')}</h1>
        <p>{t('pages.hallihaku.description')}</p>
      </div>
      <HallitusHaku />
    </div>
  )
}

export default HallihakuPage
