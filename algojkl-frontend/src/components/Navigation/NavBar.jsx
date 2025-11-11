import React, { useState } from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
import NavbarMobile from './NavbarMobile'
import dropdownLinks from './NavbarLinks'

/**
 * NavBar
 *
 * Pääkomponentti, joka kokoaa yhteen:
 *  - NavbarLeft (logo ja somelinkit)
 *  - NavbarMobile (mobiilivalikko)
 *  - NavbarRight (desktop-valikko)
 *
 * Yhteiset dropdown-linkit tuodaan erillisestä tiedostosta (navbarLinks.js)
 * jotta NavBar pysyy kevyenä ja helposti ylläpidettävänä.
 */
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navigation">
      <nav>
        <NavbarLeft />
        <NavbarMobile
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          dropdownLinks={dropdownLinks}
        />
        <NavbarRight dropdownLinks={dropdownLinks} />
      </nav>
    </div>
  )
}

export default NavBar
