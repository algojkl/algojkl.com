import { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import Panu from '../components/simple'

import logo from '../images/algologo.jpeg'
import discord from '../images/discord.png'
import insta from '../images/instagram.png'
import tiktok from '../images/tiktok.png'
import linkedin from '../images/linkedin.png'
import bursa from '../images/burger.png'

import DropdownMenu from './dropdown'
import Join from './joinUs'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navigation">
      <nav>
        {/* Left Section: Logo & Social Links */}
        <div className="left-section">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <a href="/" className="kilta">
            Algo ry
          </a>
          <div className="social">
            <a href="https://www.instagram.com/algo_jkl/">
              <img src={insta} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/algo-ry/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://discord.gg/e7pVcV2GZD">
              <img src={discord} alt="discord" />
            </a>
            <a href="https://www.tiktok.com/@algo_jkl">
              <img src={tiktok} alt="tiktok" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <Menu
          right
          customBurgerIcon={<img src={bursa} alt="bm-menu-icon" />}
          isOpen={menuOpen}
          onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        >
          <ul>
            <DropdownMenu
              title="KILTA"
              links={[
                {
                  section: 'TOIMIHENKILÖT',
                  items: [
                    { label: 'HALLITUS', path: '/hallitus' },
                    { label: 'AKTIIVIT', path: '/aktiivit' },
                  ],
                },
                {
                  section: 'VIRALLISET DOKUMENTIT',
                  items: [
                    { label: 'SÄÄNNÖT', path: '/saannot' },
                    { label: 'OHJESÄÄNNÖT & ETIKETIT', path: '/ohjesaannot' },
                    { label: 'VUOSIJUHLAT', path: '/vujuetiketti' },
                    { label: 'REKISTERISELOSTE', path: '/seloste' },
                    { label: 'KUNNIAGALLERIA', path: '/kunniagalleria' },
                    { label: 'TOIMINNAN PERIAATTEET', path: '/periaatteet' },
                  ],
                },
                {
                  section: 'JÄSENILLE',
                  items: [
                    { label: 'JÄSENDUT', path: '/jasenedut' },
                    { label: 'KERHOTOIMINTA', path: '/kerhotoiminta' },
                    { label: 'REKRYT', path: '/rekryt' },
                    { label: 'YHTEYDENOTTOLOMAKKEET', path: '/lomakkeet' },
                    { label: 'KANSAINVÄLISYYS', path: '/kansainvalisyys' },
                    {
                      label: 'KATTILAN KAHVIKAMERA',
                      path: 'https://kattila.linkkijkl.fi/',
                    },
                    { label: 'SALAISUUDET', path: '/salaisuudet' },
                    { label: 'LAULUKIRJA', path:'https://ritmi.algojkl.com/'},
                  ],
                },
              ]}
              onItemClick={() => setMenuOpen(false)}
            />

            <li className="bm-li" onClick={() => setMenuOpen(false)}>
              <Link to="/tapahtumat">TAPAHTUMAT</Link>
            </li>
            <li className="bm-li" onClick={() => setMenuOpen(false)}>
              <Link to="/yhteistyot">YHTEISTYÖT</Link>
            </li>
            <li className="bm-li" onClick={() => setMenuOpen(false)}>
              <Link to="/fuksit">FUKSIT</Link>
            </li>
            <li className="bm-li" onClick={() => setMenuOpen(false)}>
              <Link to="/hakijalle">HAKIJAT</Link>
            </li>

            <button className="jasen_nappi" onClick={() => setMenuOpen(false)}>
              <a href="https://kide.app/memberships/2a49d555-1856-4ad7-bac6-b1838e7481fc">
                LIITY JÄSENEKSI
              </a>
            </button>
            <p>/* -------------------- */</p>
            <Panu />
          </ul>
        </Menu>

        {/* Desktop Navigation */}
        <div className="right-section">
          <ul className="desktop-menu">
            <DropdownMenu
              title="KILTA"
              links={[
                {
                  section: 'TOIMIHENKILÖT',
                  items: [
                    { label: 'HALLITUS', path: '/hallitus' },
                    { label: 'AKTIIVIT', path: '/aktiivit' },
                  ],
                },
                {
                  section: 'VIRALLISET DOKUMENTIT',
                  items: [
                    { label: 'SÄÄNNÖT', path: '/saannot' },
                    { label: 'OHJESÄÄNNÖT & ETIKETIT', path: '/ohjesaannot' },
                    { label: 'VUOSIJUHLAT', path: '/vujuetiketti' },
                    { label: 'REKISTERISELOSTE', path: '/seloste' },
                    { label: 'KUNNIAGALLERIA', path: '/kunniagalleria' },
                    { label: 'TOIMINNAN PERIAATTEET', path: '/periaatteet' },
                  ],
                },
                {
                  section: 'JÄSENILLE',
                  items: [
                    { label: 'JÄSENDUT', path: '/jasenedut' },
                    { label: 'KERHOTOIMINTA', path: '/kerhotoiminta' },
                    { label: 'REKRYT', path: '/rekryt' },
                    { label: 'YHTEYDENOTTOLOMAKKEET', path: '/lomakkeet' },
                    { label: 'KANSAINVÄLISYYS', path: '/kansainvalisyys' },
                    {
                      label: 'KATTILAN KAHVIKAMERA',
                      path: 'https://kattila.linkkijkl.fi/',
                    },
                    { label: 'SALAISUUDET', path: '/salaisuudet' },
                    { label: 'LAULUKIRJA', path:'https://ritmi.algojkl.com/'},
                  ],
                },
              ]}
              onItemClick={() => setMenuOpen(false)}
            />

            <li>
              <Link to="/tapahtumat">TAPAHTUMAT</Link>
            </li>
            <li>
              <Link to="/yhteistyot">YHTEISTYÖ</Link>
            </li>
            <li>
              <Link to="/fuksit">FUKSIT</Link>
            </li>
            <li>
              <Link to="/hakijalle">HAKIJAT</Link>
            </li>
          </ul>
          {/* NEW MEMBER - BUTTON */}
          <Join />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
