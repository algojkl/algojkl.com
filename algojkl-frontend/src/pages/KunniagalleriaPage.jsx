import React from 'react'
import StarterImage from '../common/StarterImage'
import halli2022 from '../images/halli_2022.png'

import PersonCard from '../components/PersonCard.jsx'
import Perustajat from '../components/perustajat.jsx'
import VuodenAlgolaiset from '../components/vuodenAlgolaiset.jsx'

import {
  vuodenAlgolaiset,
  kunniajasenet,
  perustajat2022,
} from '../PageData/kunniaData'

import starterDesktop from '../images/Page_starters/12.jpg'
import starterMobile from '../images/mobiili/14.png'

/**
 * KunniagalleriaPage
 *
 * Renderöi sivun kunniajäsenistä, Vuoden Algolaiset -palkinnot
 * ja perustajajäsenet/hallituksen 2022 kuvan kanssa.
 */
const KunniagalleriaPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Kunniagalleria"
      />

      <div className="kunnia-container">
        <h2>Algo ry:n kunniajäsenet</h2>
        <p>
          <i>
            Kunniajäsen on killan toimintaa erityisen ansiokkaasti tukenut
            henkilö. Kunniajäsenyys on Algon korkein kunnianosoitus.
          </i>
        </p>
        <div className="kunniajasenet">
          {kunniajasenet.map((p, idx) => (
            <PersonCard key={idx} name={p.name} year={p.year} list />
          ))}
        </div>
      </div>

      <div className="kunnia-container">
        <h2>Vuoden Algolainen - palkinnon voittajat</h2>
        <p>
          <i>
            Vuoden algolainen on jäsenten äänestyksessä päättämä, joka on
            osoittanut merkittävää kiinnostusta yhdistyksen toimintaa kohtaan ja
            edistänyt jäsenten välistä yhteishenkeä.
          </i>
        </p>
        <VuodenAlgolaiset people={vuodenAlgolaiset} />
      </div>
      <Perustajat image={halli2022} members={perustajat2022} year={2022} />
      <div className="kunnia-container">
        <p>
          Muut edelliset hallitukset näet{' '}
          <a href="/entiset-hallitukset">täältä</a>
        </p>
      </div>
    </div>
  )
}

export default KunniagalleriaPage
