import React from 'react'
import { Link } from 'react-router-dom'

/**
 * NavbarMobileLinks
 *
 * Sisältää mobiilivalikon yksittäiset sivulinkit.
 */
const links = [
  { path: '/tapahtumat', label: 'TAPAHTUMAT' },
  { path: '/yhteistyot', label: 'YHTEISTYÖT' },
  { path: '/fuksit', label: 'FUKSIT' },
  { path: '/hakijalle', label: 'HAKIJAT' },
]

const NavbarMobileLinks = ({ onClick }) => (
  <>
    {links.map(({ path, label }) => (
      <li key={path} className="bm-li" onClick={onClick}>
        <Link to={path}>{label}</Link>
      </li>
    ))}
  </>
)

export default NavbarMobileLinks
