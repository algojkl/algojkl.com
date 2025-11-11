import React from 'react'

/**
 * NavbarJoinButton
 *
 * Näyttää “Liity jäseneksi” -napin, joka ohjaa Kide.appiin.
 */
const NavbarJoinButton = ({ onClick }) => (
  <button className="jasen_nappi" onClick={onClick}>
    <a
      href="https://kide.app/memberships/2a49d555-1856-4ad7-bac6-b1838e7481fc"
      target="_blank"
      rel="noopener noreferrer"
    >
      LIITY JÄSENEKSI
    </a>
  </button>
)

export default NavbarJoinButton
