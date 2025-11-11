import React, { useState } from 'react'
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
 * Kortin kuva on klikattava: sitä painamalla kuva muuttuu pyöreäksi
 * tai suorakulmaiseksi (`rounded`-tila vaihtuu).
 */
const HallitusCard = ({ member }) => {
  const [rounded, setRounded] = useState(false)

  return (
    <div className="hallitus-card">
      <HallitusImage
        src={member.kuva}
        alt={member.nimi}
        rounded={rounded}
        onToggle={() => setRounded(!rounded)}
      />
      <HallitusInfo member={member} />
    </div>
  )
}

HallitusCard.propTypes = {
  member: memberPropType.isRequired,
}

export default HallitusCard
