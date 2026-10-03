import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import MobileKiltaMenu from './MobileKiltaMenu'
import NavbarMobileLinks from './NavbarMobileLinks'
import NavbarJoinButton from './NavBarMobileJoin'
import LanguageToggle from './LanguageToggle'
import Panu from '../simple'
import logo from './assets/algologo.jpeg'

/**
 * NavbarMobile
 *
 * Mobiiliversio navigaatiosta (react-burger-menu):
 *  - Kilta-osioiden ja sivujen vaiheittainen valinta
 *  - Yksittäiset sivulinkit
 *  - Liity jäseneksi -nappi
 */
const NavbarMobile = ({ menuOpen, setMenuOpen, dropdownLinks }) => {
  const { t } = useTranslation('common')
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const wasOpenRef = useRef(false)

  const handleClose = () => setMenuOpen(false)
  const handleToggle = () => setMenuOpen((isOpen) => !isOpen)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      panelRef.current?.querySelector('button, a')?.focus()
    } else {
      document.body.style.overflow = previousOverflow
      if (wasOpenRef.current) toggleRef.current?.focus()
    }

    wasOpenRef.current = menuOpen

    const handleKeyDown = (event) => {
      if (!menuOpen) return

      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab') return

      const focusableItems = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      )
      if (!focusableItems?.length) return

      const firstItem = focusableItems[0]
      const lastItem = focusableItems[focusableItems.length - 1]

      if (
        event.shiftKey &&
        (document.activeElement === firstItem ||
          document.activeElement === toggleRef.current)
      ) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen, setMenuOpen])

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={`mobile-nav-toggle${menuOpen ? ' is-open' : ''}`}
        aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation-panel"
        onClick={handleToggle}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {menuOpen && (
        <button
          type="button"
          className="mobile-nav-overlay"
          tabIndex={-1}
          aria-label={t('nav.closeMenu')}
          onClick={handleClose}
        />
      )}

      <aside
        ref={panelRef}
        id="mobile-navigation-panel"
        className={`mobile-menu-panel${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-label={t('nav.mobileNavigation')}
        aria-modal="true"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav className="mobile-nav-items" aria-label={t('nav.mobileNavigation')}>
          <div className="mobile-nav-header">
            <div className="mobile-nav-brand">
              <img src={logo} alt="" aria-hidden="true" />
              <span>{t('nav.brand')}</span>
            </div>
            <LanguageToggle />
          </div>
          <div className="mobile-nav-primary">
            <MobileKiltaMenu
              title={t('nav.menu')}
              sections={dropdownLinks}
              menuOpen={menuOpen}
              onItemClick={handleClose}
            />
            <NavbarMobileLinks onClick={handleClose} />
          </div>
          <div className="mobile-nav-utility">
            <NavbarJoinButton onClick={handleClose} />
            <div className="mobile-nav-panu" aria-hidden="true">
              <Panu />
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default NavbarMobile
