import React from 'react'
import { useTranslation } from 'react-i18next'

function Toimari({ member }) {
  const { t } = useTranslation('common')

  return (
    <div className="toimari-card">
      <div className="toimari-image">
        {member.kuva ? (
          <img src={member.kuva} alt={member.nimi} />
        ) : (
          <div className="placeholder-image">{t('pages.toimari.noImage')}</div>
        )}
      </div>
      <div className="toimari-info">
        <h3>{member.nimi}</h3>
        <p>{member.pesti}</p>
        <p>{member.email}</p>
        <p>{t('pages.hallitus.telegram')} {member.telegram}</p>
      </div>
    </div>
  )
}

export default Toimari
