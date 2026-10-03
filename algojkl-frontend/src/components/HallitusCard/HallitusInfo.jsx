import React from 'react'
import { useTranslation } from 'react-i18next'
import { memberPropType } from './HallitusPropTypes'
import { getHallitusRoleTranslationKey } from '../../utils/hallitusOrder'

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
const HallitusInfo = ({ member }) => {
  const { t } = useTranslation('common')
  const hasContactDetails = Boolean(member.telegram || member.sahkoposti)
  const translatePosition = (position) => {
    if (typeof position !== 'string') return position

    const directTranslationKey = getHallitusRoleTranslationKey(position)
    if (directTranslationKey) {
      return t(`pages.hallitus.positions.${directTranslationKey}`)
    }

    const combinedRoles = position.split(
      /\s*(?:&|\/|\+|,)\s*|\s+(?:ja|and)\s+/i
    )
    const combinedTranslationKeys = combinedRoles.map(
      getHallitusRoleTranslationKey
    )

    if (combinedRoles.length > 1 && combinedTranslationKeys.every(Boolean)) {
      return combinedTranslationKeys
        .map((translationKey) => t(`pages.hallitus.positions.${translationKey}`))
        .join(' + ')
    }

    return position
  }

  return (
    <div className="hallitus-info">
      <h2>{member.nimi}</h2>
      <p className="hallitus-role">{translatePosition(member.pesti)}</p>
      {member.lispesti && (
        <p className="hallitus-secondary-role">
          {translatePosition(member.lispesti)}
        </p>
      )}
      <div
        className={`hallitus-card-contact${hasContactDetails ? '' : ' is-empty'}`}
        aria-hidden={!hasContactDetails}
      >
        {member.telegram && (
          <span className="hallitus-telegram">
            <span className="hallitus-telegram-label">
              {t('pages.hallitus.telegram')}
            </span>
            <span className="hallitus-telegram-value">{member.telegram}</span>
          </span>
        )}
        {member.sahkoposti && (
          <a href={`mailto:${member.sahkoposti}`}>{member.sahkoposti}</a>
        )}
      </div>
    </div>
  )
}

HallitusInfo.propTypes = {
  member: memberPropType.isRequired,
}

export default HallitusInfo
