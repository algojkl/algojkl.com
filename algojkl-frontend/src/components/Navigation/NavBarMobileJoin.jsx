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
    <a
      className="jasen_nappi"
      href="https://kide.app/memberships/2a49d555-1856-4ad7-bac6-b1838e7481fc"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {t('nav.joinButton')}
    </a>
  )
}

export default NavbarJoinButton
