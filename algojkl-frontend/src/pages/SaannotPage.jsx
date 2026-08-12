import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import Section from '../components/Saannot/Section'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * SäännötPage-komponentti
 * Renderöi Algo ry:n säännöt käyttäen lokalisoitua dataa ja Section-komponenttia.
 */
const RulePage = () => {
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('saannot')
  const saannotSections = t('pages.saannot.sections', { returnObjects: true })

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
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
