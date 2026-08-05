import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/8.jpg'
import starterMobile from '../images/mobiili/10.png'
import Section from '../components/Saannot/Section'

/**
 * SäännötPage-komponentti
 * Renderöi Algo ry:n säännöt käyttäen lokalisoitua dataa ja Section-komponenttia.
 */
const RulePage = () => {
  const { t } = useTranslation('common')
  const saannotSections = t('pages.saannot.sections', { returnObjects: true })

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt={t('pages.saannot.alt')}
      />
      <div className="saannot-container">
        <h1>{t('pages.saannot.title')}</h1>
        <div className="saannot-container-items">
          {saannotSections.map((section, idx) => (
            <Section
              key={idx}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RulePage
