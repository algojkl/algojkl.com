import React from 'react'
import { memberPropType } from './HallitusPropTypes'

/**
 * HallitusInfo
 *
 * Näyttää yksittäisen hallituksen jäsenen tiedot:
 * - Pestin ja mahdollisen lisäpestin
 * - Nimen
 * - Telegram-tunnuksen (jos on)
 * - Sähköpostiosoitteen linkkinä (jos on)
 *
 * Props:
 *  - member: hallituksen jäsenen tiedot (nimi, pesti, yhteystiedot)
 */
const HallitusInfo = ({ member }) => (
  <div className="hallitus-info">
    <h2>{member.pesti}</h2>
    {member.lispesti && <p>{member.lispesti}</p>}
    <p>
      <strong>{member.nimi}</strong>
    </p>
    {member.telegram && <p>Telegram: {member.telegram}</p>}
    {member.sahkoposti && (
      <p>
        <a href={`mailto:${member.sahkoposti}`}>{member.sahkoposti}</a>
      </p>
    )}
  </div>
)

HallitusInfo.propTypes = {
  member: memberPropType.isRequired,
}

export default HallitusInfo
