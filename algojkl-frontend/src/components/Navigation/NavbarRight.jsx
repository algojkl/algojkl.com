import React from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from './dropdown'
import Join from './joinUs'

/**
 * NavbarRight
 *
 * Desktop-versio navigaatiosta:
 *  - DropdownMenu (KILTA)
 *  - Yksittäiset linkit
 *  - Join (jäseneksi liittyminen)
 */
const NavbarRight = ({ dropdownLinks }) => (
  <div className="right-section">
    <ul className="desktop-menu">
      <DropdownMenu title="KILTA" links={dropdownLinks} />
      <li>
        <Link to="/tapahtumat">TAPAHTUMAT</Link>
      </li>
      <li>
        <Link to="/yhteistyot">YHTEISTYÖT</Link>
      </li>
      <li>
        <Link to="/fuksit">FUKSIT</Link>
      </li>
      <li>
        <Link to="/hakijalle">HAKIJAT</Link>
      </li>
    </ul>
    <Join />
  </div>
)

export default NavbarRight
