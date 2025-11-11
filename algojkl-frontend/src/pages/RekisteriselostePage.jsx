import React from 'react'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/10.jpg'
import starterMobile from '../images/mobiili/12.png'
import { rekisteriselosteSections } from '../PageData/rekisteriselosteData.jsx'

const Section = ({ title, content }) => (
  <div className="rekisteri-section">
    <h2>{title}</h2>
    {content}
  </div>
)

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
