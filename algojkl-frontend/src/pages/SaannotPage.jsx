import React from 'react'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/8.jpg'
import starterMobile from '../images/mobiili/10.png'
import Section from '../components/Saannot/Section'
import { saannotSections } from '../PageData/saannotData.jsx'

/**
 * SäännötPage-komponentti
 * Renderöi Algo ry:n säännöt käyttäen dataa ja Section-komponenttia.
 */
const RulePage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Säännöt"
      />
      <div className="saannot-container">
        <h1>Algo ry:n säännöt</h1>
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
