import React from 'react'
import HallitusImage from './HallitusImage'
import HallitusInfo from './HallitusInfo'
import { memberPropType } from './HallitusPropTypes'

/**
 * HallitusCard
 *
 * Yksittäinen hallituksen jäsenen kortti, joka koostuu:
 *  - kuvasta (HallitusImage)
 *  - tiedoista (HallitusInfo)
 *
 */
const HallitusCard = ({ member }) => {
  return (
    <article className="hallitus-card">
      <HallitusImage src={member.kuva} alt={member.nimi} />
      <HallitusInfo member={member} />
    </article>
  )
}

HallitusCard.propTypes = {
  member: memberPropType.isRequired,
}

export default HallitusCard
