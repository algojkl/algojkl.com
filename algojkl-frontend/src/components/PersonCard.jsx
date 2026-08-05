import React from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation('common')

  if (list) {
    return (
      <ul className="kunniajasenet">
        <li>
          {name} {year && <i>({t('pages.personCard.named', { year })})</i>}
        </li>
      </ul>
    )
  }

  return (
    <div className="person-card">
      {image && <img src={image} alt={name} />}
      <div>
        <p className="person-card-name">{name}</p>
        {year && <small className="person-card-year">{year}</small>}
      </div>
    </div>
  )
}

export default PersonCard
