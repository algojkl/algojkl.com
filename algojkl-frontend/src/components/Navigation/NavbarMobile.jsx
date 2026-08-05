import React from 'react'
import { useTranslation } from 'react-i18next'
import { slide as Menu } from 'react-burger-menu'
import DropdownMenu from './dropdown'
import Panu from '../simple'
import bursa from './assets/burger_v4.png'
import NavbarMobileLinks from './NavbarMobileLinks'
import NavbarJoinButton from './NavBarMobileJoin'
import LanguageToggle from './LanguageToggle'

/**
 * NavbarMobile
 *
 * Mobiiliversio navigaatiosta (react-burger-menu):
 *  - DropdownMenu
 *  - Yksittäiset sivulinkit
 *  - Liity jäseneksi -nappi
 *  - Panu-komponentti
 */
const NavbarMobile = ({ menuOpen, setMenuOpen, dropdownLinks }) => {
  const { t } = useTranslation('common')
  const handleClose = () => setMenuOpen(false)

  return (
    <Menu
      right
      customBurgerIcon={<img src={bursa} alt="burger menu" />}
      isOpen={menuOpen}
      onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
    >
      <ul>
        <DropdownMenu
          title={t('nav.menu')}
          links={dropdownLinks}
          onItemClick={handleClose}
        />
        <NavbarMobileLinks onClick={handleClose} />
        <NavbarJoinButton onClick={handleClose} />
        <LanguageToggle />
        <Panu />
      </ul>
    </Menu>
  )
}

export default NavbarMobile
