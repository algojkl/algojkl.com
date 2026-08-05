import React from 'react'
import { useTranslation } from 'react-i18next'

const Perustajat = ({ image, members, year }) => {
  const { t } = useTranslation('common')

  return (
    <div className="kunnia-container">
      <h3>{t('pages.perustajat.title', { year })}</h3>
      <div className="perustaja-flex">
        <img src={image} alt="hallitus" width={250} />
        <ul className="perustaja">
          {members.map((member, index) => (
            <li key={index}>
              <strong>{member.name}</strong>, {member.role} {year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Perustajat
