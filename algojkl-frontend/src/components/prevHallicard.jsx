import React from 'react'

/**
 * HallitusCard
 *
 * Tämä komponentti renderöi yhden hallituksen kuvan ja jäsenet.
 * Props:
 * - year: hallitusvuosi (number)
 * - image: hallituksen kuva (string)
 * - members: array, jossa jokaisella jäsenellä on role ja name
 */
const HallitusCard = ({ year, image, members }) => {
  return (
    <div className="prev-hallitus-info">
      <img src={image} alt={`halli_${year}.png`} />
      <div>
        {members.map((member, idx) => (
          <p key={idx}>
            <strong>{member.role}: </strong> {member.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default HallitusCard
