import React from 'react'

import starterDesktop from '../images/Page_starters/6.jpg'
import starterMobile from '../images/mobiili/8.png'
import StarterImage from '../common/StarterImage'

import { useContentfulData } from '../services/useContentfulData'

import HallitusCard from '../components/HallitusCard/HallitusCard'
import PestitDescription from '../components/Pestit/PestitDescription'
import { hallitusOrder } from '../utils/hallitusOrder'


/**
 * HallitusPage-komponentti
 * Tämä komponentti renderöi Algo ry:n hallitus-sivun, joka sisältää:
 * 1. StarterImage-komponentin sivun yläosan kuvalle (desktop ja mobiili).
 * 2. Hallitus-jäsenet Contentful-datan perusteella.
 *    - Data ladataan useContentfulData-hookilla.
 *    - Jos data on latauksessa, näytetään "Ladataan..."-teksti.
 *    - Jos virhe, näytetään virheilmoitus.
 *    - Jäsenet järjestetään pestiOrderin mukaisesti ennen renderöintiä.
 *    - Kukin jäsen renderöidään HallitusCard-komponentilla.
 * 3. PestitDescription-komponentti, joka renderöi kuvauksen hallituksen pesteistä. Näitä voi muokata pestitdescription tiedostosssa.
 */

const HallitusPage = () => {
  const { data, isLoading, error } = useContentfulData()
  if (isLoading) return <p>Ladataan...</p>
  if (error) return <p>Virhe ladattaessa tietoja.</p>

  const sortedHallitus = [...data.hallitus].sort((a, b) => {
    const orderA = hallitusOrder[a.pesti] ?? 99
    const orderB = hallitusOrder[b.pesti] ?? 99
    return orderA - orderB
  })

  const date = new Date().getFullYear()

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Hallitus"
      />
      <div className="hallitus">
        <h1>Algo ry:n hallitus {date}</h1>
        <div className="hallitus-grid">
          {sortedHallitus.map((member) => (
            <HallitusCard key={member.id} member={member} />
          ))}
        </div>
      </div>
      <PestitDescription />
    </div>
  )
}

export default HallitusPage
