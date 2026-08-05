import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/10.jpg'
import starterMobile from '../images/mobiili/12.png'

/**
 * Yksittäinen osio rekisteriselosteesta
 * @param {Object} props - Komponentin propsit
 * @param {string} props.title - Osion otsikko
 * @param {JSX.Element} props.content - Osion sisältö JSX-muodossa
 */
const Section = ({ title, content }) => (
  <div className="rekisteri-section">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
)

/**
 * RekisteriselostePage-komponentti
 * Tämä komponentti renderöi jäsenrekisteriseloste-sivun, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. Jäsenrekisteriselosteen eri osiot, jotka on määritelty lokalisaatiotiedostossa.
 */
const RekisteriselostePage = () => {
  const { t } = useTranslation('common')
  const sections = t('pages.rekisteriseloste.sections', { returnObjects: true })

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt={t('pages.rekisteriseloste.title')}
      />
      <div className="seloste-container">
        <h1>{t('pages.rekisteriseloste.title')}</h1>
        <div className="seloste-container-items">
          {sections.map((section, idx) => (
            <Section key={idx} title={section.title} content={section.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RekisteriselostePage
