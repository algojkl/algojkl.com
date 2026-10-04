import React, { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
import PropTypes from 'prop-types'

const DropdownMenu = ({ title, links = [], onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const panelId = useId()

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault()
      setIsOpen(false)
      triggerRef.current?.focus()
      return
    }

    if (event.key === 'ArrowDown' && event.target === triggerRef.current) {
      event.preventDefault()
      setIsOpen(true)
      window.requestAnimationFrame(() => {
        rootRef.current?.querySelector('.dropdown-section-items a')?.focus()
      })
    }
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false)
    }
  }

  return (
    <li
      ref={rootRef}
      className="dropdown"
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement)) {
          setIsOpen(false)
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className="dropdown-button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {title}
        <RiArrowDropDownLine className="arrow" aria-hidden="true" />
      </button>

      {isOpen && (
        <nav
          id={panelId}
          className="dropdown-content"
          aria-label={title}
        >
          {links.length > 0 ? (
            links.map((section, sectionIndex) => (
              <section
                key={section.section}
                className="dropdown-section"
                aria-labelledby={`${panelId}-section-${sectionIndex}`}
              >
                <h2
                  id={`${panelId}-section-${sectionIndex}`}
                  className="dropdown-section-header"
                >
                  {section.section}
                </h2>
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
              </section>
            ))
          ) : (
            <p>No links available</p>
          )}
        </nav>
      )}
    </li>
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
