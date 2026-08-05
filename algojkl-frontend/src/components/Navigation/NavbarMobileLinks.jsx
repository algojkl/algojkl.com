import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

/**
 * NavbarMobileLinks
 *
 * Sisältää mobiilivalikon yksittäiset sivulinkit.
 */
const NavbarMobileLinks = ({ onClick }) => {
  const { t } = useTranslation('common')
  const links = [
    { path: '/tapahtumat', label: t('nav.events') },
    { path: '/yhteistyot', label: t('nav.collaboration') },
    { path: '/fuksit', label: t('nav.fuksit') },
    { path: '/hakijalle', label: t('nav.applicants') },
  ]

  return (
    <>
      {links.map(({ path, label }) => (
        <li key={path} className="bm-li" onClick={onClick}>
          <Link to={path}>{label}</Link>
        </li>
      ))}
    </>
  )
}

export default NavbarMobileLinks
