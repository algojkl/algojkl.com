import React from 'react'
import { useTranslation } from 'react-i18next'
import { hallitukset } from '../PageData/prevHallitusData'
import HallitusCard from '../components/prevHallicard'

/**
 * PrevHalli
 *
 * Tämä komponentti renderöi listan aiemmista hallituksista.
 * Käyttää HallitusCard-komponenttia jokaisen hallituksen esittämiseen.
 */
const PrevHalli = () => {
  const { t } = useTranslation('common')

  return (
    <div className="prev-hallitus">
      {hallitukset.map((hallitus) => (
        <div key={hallitus.year}>
          <h3>{t('pages.prevHalli.boardTitle', { year: hallitus.year })}</h3>
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
