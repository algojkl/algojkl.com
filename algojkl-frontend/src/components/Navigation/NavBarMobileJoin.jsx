import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * NavbarJoinButton
 *
 * Näyttää “Liity jäseneksi” -napin, joka ohjaa Kide.appiin.
 */
const NavbarJoinButton = ({ onClick }) => {
  const { t } = useTranslation('common')

  return (
    <button className="jasen_nappi" onClick={onClick}>
      <a
        href="https://kide.app/memberships/2a49d555-1856-4ad7-bac6-b1838e7481fc"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('nav.joinButton')}
      </a>
    </button>
  )
}

export default NavbarJoinButton
