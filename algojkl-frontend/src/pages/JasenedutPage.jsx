import React from 'react'
import JasenEdut from '../components/JasenEdutContent/JasenEdut'
import StarterImage from '../common/StarterImage'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * JasenEdutPage-komponentti
 * Tämä komponentti renderöi jäsenedut-sivun sisällön, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. JasenEdut-komponentin, joka renderöi varsinaisen jäsenetujen sisällön.
 */

const JasenEdutPage = () => {
  const starterImages = usePageStarterImages('jasenedut')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt="Jedut"
      />
      <div>
        <JasenEdut />
      </div>
    </div>
  )
}

export default JasenEdutPage
