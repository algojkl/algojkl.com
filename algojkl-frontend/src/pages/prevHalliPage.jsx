import React from 'react'
import { hallitukset } from '../PageData/prevHallitusData'
import HallitusCard from '../components/prevHallicard'

/**
 * PrevHalli
 *
 * Tämä komponentti renderöi listan aiemmista hallituksista.
 * Käyttää HallitusCard-komponenttia jokaisen hallituksen esittämiseen.
 */
const PrevHalli = () => {
  return (
    <div className="prev-hallitus">
      {hallitukset.map((hallitus) => (
        <div key={hallitus.year}>
          <h3>Hallitus {hallitus.year}</h3>
          <HallitusCard
            year={hallitus.year}
            image={hallitus.image}
            members={hallitus.members}
          />
        </div>
      ))}
    </div>
  )
}

export default PrevHalli
