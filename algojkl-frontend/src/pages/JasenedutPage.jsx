import React from 'react'
import starterDesktop from '../images/Page_starters/14.jpg'
import starterMobile from '../images/mobiili/16.png'
import JasenEdut from '../components/JasenEdutContent/JasenEdut'
import StarterImage from '../common/StarterImage'

/**
 * JasenEdutPage-komponentti
 * Tämä komponentti renderöi jäsenedut-sivun sisällön, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. JasenEdut-komponentin, joka renderöi varsinaisen jäsenetujen sisällön.
 */

const JasenEdutPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Jedut"
      />
      <div>
        <JasenEdut />
      </div>
    </div>
  )
}

export default JasenEdutPage
