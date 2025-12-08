import React from 'react'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/10.jpg'
import starterMobile from '../images/mobiili/12.png'
import { rekisteriselosteSections } from '../PageData/rekisteriselosteData.jsx'

/**
 * Yksittäinen osio rekisteriselosteesta
 * @param {Object} props - Komponentin propsit
 * @param {string} props.title - Osion otsikko
 * @param {JSX.Element} props.content - Osion sisältö JSX-muodossa 
 */
const Section = ({ title, content }) => (
  <div className="rekisteri-section">
    <h2>{title}</h2>
    {content}
  </div>
)

/**
 * RekisteriselostePage-komponentti
 * Tämä komponentti renderöi jäsenrekisteriseloste-sivun, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. Jäsenrekisteriselosteen eri osiot, jotka on määritelty rekisteriselosteData.js-tiedostossa. 
 */
const RekisteriselostePage = () => (
  <div>
    <StarterImage
      desktopImage={starterDesktop}
      mobileImage={starterMobile}
      alt="Seloste"
    />
    <div className="seloste-container">
      <div className='seloste-container-items'>
      <h1>Jäsenrekisteriseloste</h1>
      {rekisteriselosteSections.map((section, idx) => (
        <Section key={idx} title={section.title} content={section.content} />
      ))}
      </div>
    </div>
  </div>
)

export default RekisteriselostePage
