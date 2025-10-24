import React from 'react'
import { Link } from 'react-router-dom'
/**
 * FooterNavSection
 *
 * Tämä komponentti vastaa yksittäistä osioita footerin navigaatiossa.
 * Se sisältää otsikon (title) ja listan linkkejä (links).
 *
 * Props:
 * - title: osion otsikko (esim. "NAVIGAATIO", "JÄSENILLE")
 * - links: taulukko linkki-olioita, joissa on 'to' ja 'label'
 *          - to: reitti React Routerille tai ulkoinen URL
 *          - label: linkin näkyvä teksti
 */
const FooterNavSection = ({ title, links }) => (
  <li className="footer-nav">
    <ul>
      <h2>{title}</h2>
      {links.map((link, index) => (
        <li key={index}>
          {link.to.startsWith('http') ? (
            <a href={link.to} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <Link to={link.to}>{link.label}</Link>
          )}
        </li>
      ))}
    </ul>
  </li>
)

export default FooterNavSection
