import React from 'react'
import { Link } from 'react-router-dom'

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
