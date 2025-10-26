import React from 'react'
import starterDesktop from '../images/Page_starters/14.jpg'
import starterMobile from '../images/mobiili/16.png'
import useDevice from '../hooks/useDevice'
import JasenEdut from '../components/JasenEdutContent/JasenEdut'

const JasenEdutPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop
  return (
    <div>
      <img src={starterImage} alt="starter_image_rules" className="starter" />
      <div>
        <JasenEdut />
      </div>
    </div>
  )
}

export default JasenEdutPage
