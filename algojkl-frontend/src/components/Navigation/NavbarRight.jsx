import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DropdownMenu from './dropdown'
import Join from './joinUs'
import LanguageToggle from './LanguageToggle'

/**
 * NavbarRight
 *
 * Desktop-versio navigaatiosta:
 *  - DropdownMenu (KILTA)
 *  - Yksittäiset linkit
 *  - Panun nappi (jäseneksi liittyminen)
 */
const NavbarRight = ({ dropdownLinks }) => {
  const { t } = useTranslation('common')

  return (
    <div className="right-section">
      <ul className="desktop-menu">
        <DropdownMenu title={t('nav.menu')} links={dropdownLinks} />
        <li>
          <Link to="/tapahtumat">{t('nav.events')}</Link>
        </li>
        <li>
          <Link to="/yhteistyot">{t('nav.collaboration')}</Link>
        </li>
        <li>
          <Link to="/fuksit">{t('nav.fuksit')}</Link>
        </li>
        <li>
          <Link to="/hakijalle">{t('nav.applicants')}</Link>
        </li>
      </ul>
      <LanguageToggle />
      <Join />
    </div>
  )
}

export default NavbarRight
