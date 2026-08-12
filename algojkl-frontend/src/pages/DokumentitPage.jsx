import React from 'react'
import StarterImage from '../common/StarterImage'
import PytKirja from '../components/pytKirjaFetch'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * Documents-komponentti
 * Tämä komponentti esittää Algon killan dokumenttisivun.
 * Sivulla on aloituskuva ja komponentti PytKirja, joka huolehtii
 * dokumenttien hakemisesta ja esittämisestä.
 */
const Documents = () => {
  const starterImages = usePageStarterImages('dokumentit')

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt="Dokumentit"
      />
      <div>
        <PytKirja />
      </div>
    </div>
  )
}

export default Documents
