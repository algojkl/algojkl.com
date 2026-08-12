import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import StarterImage from '../common/StarterImage'
import usePageStarterImages from '../hooks/usePageStarterImages'
/**
 *  Vujut-sivu
 * Tämä komponentti renderöi Vujut-sivun sisällön.
 * Sivulla näytetään:
 * 1. Starter-kuva (desktop ja mobiili)
 * 2. Vuosijuhlaetiketti-osio, joka kertoo vuosijuhlien käytänteistä, pukeutumisesta,
 *    arvokkaasta juhlakäyttäytymisestä, juhlan kulusta sekä akateemisesta silliaamiaisesta.
 */

const Vujut = () => {
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('vuju')
  const vujuContent = {
    title: t('pages.vuju.title'),
    intro: t('pages.vuju.intro'),
    sections: t('pages.vuju.sections', { returnObjects: true }),
  }

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.vuju.alt')}
      />
      <div className="vuju-container-start">
        <h1>{vujuContent.title}</h1>
        <ReactMarkdown>{vujuContent.intro}</ReactMarkdown>
      </div>
      <div className="vuju-container">
        {vujuContent.sections.map((section, idx) => (
          <div key={idx} className="vuju-section">
            <h2>{section.heading}</h2>
            <ReactMarkdown>{section.text}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vujut
