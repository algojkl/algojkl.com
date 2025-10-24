import React from 'react'

import starterDesktop from '../images/Page_starters/12.jpg'
import starterMobile from '../images/mobiili/14.png'
import halli2022 from '../images/halli_2022.png'
import olli from '../images/olli.png'
import niko from '../images/Niko.jpg'
import leevi from '../images/leevi.jpeg'

import VuodenAlgolaiset from '../components/vuodenAlgolaiset.jsx'
import Perustajat from '../components/perustajat.jsx'
import useDevice from '../hooks/useDevice.jsx'

const vuodenAlgolaiset = [
  { year: 2025, name: 'Leevi Kopakkala', image: leevi },
  { year: 2024, name: 'Olli Terävä', image: olli },
  { year: 2023, name: 'Niko Iljin', image: niko },
]

const perustajat2022 = [
  { name: 'Eemil Hukkanen', role: 'Puheenjohtaja' },
  { name: 'Annarella Manninen', role: 'Varapuheenjohtaja & Kopo' },
  { name: 'Topias Liljegren', role: 'Sihteeri' },
  { name: 'Anna-Sofia Paavonen', role: 'Rahastonhoitaja' },
  { name: 'Juuso Vuorela', role: 'Yrityssuhdevastaava' },
  {
    name: 'Minea Nupponen & Jesse Haimi',
    role: 'Tapahtuma- ja somevastaava(t)',
  },
  {
    name: 'Lassi Laitinen',
    role: 'Fuksivastaava ja sosiaalipoliittinen vastaava',
  },
]

const KunniagalleriaPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop
  return (
    <div>
      <img src={starterImage} alt="starter_image_rules" className="starter" />
      <div className="kunnia-container">
        <h2>Algo ry:n kunniajäsenet</h2>
        <p>
          <i>
            Kunniajäsen on killan toimintaa erityisen ansiokkaasti tukenut
            henkilö. Kunniajäsenyys on Algon korkein kunnianosoitus.
          </i>
        </p>
        <ul className="kunniajasenet">
          <li>
            Jari Haapasaari <i>(Nimetty 2023)</i>
          </li>
          <li>
            Eemil Hukkanen <i>(Nimetty 2025)</i>
          </li>
          <li>
            Minea Nupponen <i>(Nimetty 2025)</i>
          </li>
          <li>
            Lassi Laitinen <i>(Nimetty 2025)</i>
          </li>
        </ul>
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
