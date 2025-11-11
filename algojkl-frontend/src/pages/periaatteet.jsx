import React from 'react'
import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/13.jpg'
import starterMobile from '../images/mobiili/15.png'
import ToimintaInfo from '../periaatteet/ToimintaInfo'
import TurvallisemmanTilanPeriaatteet from '../periaatteet/TTPeriaatteet'
import Yhdenvertaisuus from '../periaatteet/Yhdenvertaisuus'

const PeriaatteetPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Periaatteet"
      />
      <div className="periaate-container">
        <ToimintaInfo />
        <TurvallisemmanTilanPeriaatteet />
        <Yhdenvertaisuus />
      </div>
    </div>
  )
}

export default PeriaatteetPage
