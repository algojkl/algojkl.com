import React from 'react'
import logo from './assets/algologo.jpeg'
import discord from './assets/discord.png'
import insta from './assets/instagram.png'
import tiktok from './assets/tiktok.png'
import linkedin from './assets/linkedin.png'

/**
 * Sosiaalisen median linkit ja ikonit erillisenä listana.
 * - Jos haluat lisätä tai poistaa kanavan, tee se vain tästä taulukosta.
 */
const socialLinks = [
  {
    href: 'https://www.instagram.com/algo_jkl/',
    icon: insta,
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/algo-ry/',
    icon: linkedin,
    alt: 'LinkedIn',
  },
  { href: 'https://discord.gg/e7pVcV2GZD', icon: discord, alt: 'Discord' },
  { href: 'https://www.tiktok.com/@algo_jkl', icon: tiktok, alt: 'TikTok' },
]

/**
 * NavbarLeft
 *
 * Näyttää logon, yhdistyksen nimen ja sosiaalisen median linkit.
 */
const NavbarLeft = () => (
  <div className="left-section">
    <a href="/" className="logo-link">
      <img src={logo} alt="Algo ry logo" className="logo" />
    </a>
    <a href="/" className="kilta">
      Algo ry
    </a>

    <div className="social">
      {socialLinks.map(({ href, icon, alt }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={alt} />
        </a>
      ))}
    </div>
  </div>
)

export default NavbarLeft
