import React from 'react'

/**
 * PersonCard
 *
 * Uudelleenkäytettävä komponentti henkilölle:
 * - Jos props.list === true, renderöi listan <ul> <li> -muodossa
 * - name: henkilön nimi
 * - year: vuosi (esim. palkinto tai hallitusvuosi)
 * - image: kuvatiedosto (valinnainen)
 */
const PersonCard = ({ name, year, image, list }) => {
  if (list) {
    return (
      <ul className="kunniajasenet">
        <li>
          {name} {year && <i>(Nimetty {year})</i>}
        </li>
      </ul>
    )
  }

  return (
    <div className="person-card">
      {image && <img src={image} alt={name} />}
      <div>
        <p>{name}</p>
        {year && <small>{year}</small>}
      </div>
    </div>
  )
}

export default PersonCard
