import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import DropdownMenu from './dropdown'
import Panu from '../simple'
import bursa from './assets/burger.png'
import NavbarMobileLinks from './NavbarMobileLinks'
import NavbarJoinButton from './NavBarMobileJoin'

/**
 * NavbarMobile
 *
 * Mobiiliversio navigaatiosta (react-burger-menu):
 *  - DropdownMenu
 *  - Yksittäiset sivulinkit
 *  - Liity jäseneksi -nappi
 *  - Panu-komponentti (esim. footer-tyylinen lisäosa)
 */
const NavbarMobile = ({ menuOpen, setMenuOpen, dropdownLinks }) => {
  const handleClose = () => setMenuOpen(false)

  return (
    <Menu
      right
      customBurgerIcon={<img src={bursa} alt="burger menu" />}
      isOpen={menuOpen}
      onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
    >
      <ul>
        <DropdownMenu title="KILTA" links={dropdownLinks} onItemClick={handleClose} />
        <NavbarMobileLinks onClick={handleClose} />
        <NavbarJoinButton onClick={handleClose} />
        <p>/* -------------------- */</p>
        <Panu />
      </ul>
    </Menu>
  )
}

export default NavbarMobile
