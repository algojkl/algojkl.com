import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
import PropTypes from 'prop-types'

const DropdownMenu = ({ title, links = [], onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <RiArrowDropDownLine className="arrow" />
      </button>

      {isOpen && (
        <div className="dropdown-content">
          {links.length > 0 ? (
            links.map((section, sectionIndex) => (
              <div key={sectionIndex} className="dropdown-section">
                <div className="dropdown-section-header">{section.section}</div>
                <div className="dropdown-section-items">
                  {section.items.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      onClick={() => {
                        if (onItemClick) onItemClick()
                        setIsOpen(false)
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No links available</p>
          )}
        </div>
      )}
    </div>
  )
}

DropdownMenu.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      section: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func,
}

export default DropdownMenu
