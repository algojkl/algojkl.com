import React from 'react'
import { useTranslation } from 'react-i18next'

const PestitDescription = () => {
  const { t } = useTranslation('common')
  const roles = t('pages.pestit.roles', { returnObjects: true })

  return (
    <div className="hallitus-pesti-info">
      <h3>{t('pages.pestit.title')}</h3>
      <p>
        {roles.map((role, i) => (
          <span key={i}>
            <strong>{role.title}</strong> {role.description}
            <br />
            <br />
          </span>
        ))}
        <i>{t('pages.pestit.ps')}</i>
      </p>

      <p>
        {t('pages.pestit.previous')}{' '}
        <a href="/entiset-hallitukset">
          <strong>{t('pages.pestit.here')}</strong>
        </a>
      </p>
    </div>
  )
}

export default PestitDescription
