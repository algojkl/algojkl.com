import React from 'react'
import ReactMarkdown from 'react-markdown'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/vujut.jpg'
import starterMobile from '../images/mobiili/vujut_m.jpg'
import { vujuContent } from '../PageData/vujuData'
/**
 *  Vujut-sivu
 * Tämä komponentti renderöi Vujut-sivun sisällön.
 * Sivulla näytetään:
 * 1. Starter-kuva (desktop ja mobiili)
 * 2. Vuosijuhlaetiketti-osio, joka kertoo vuosijuhlien käytänteistä, pukeutumisesta,
 *    arvokkaasta juhlakäyttäytymisestä, juhlan kulusta sekä akateemisesta silliaamiaisesta.
 * refraktorointi kesken
 */

const Vujut = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Events"
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
