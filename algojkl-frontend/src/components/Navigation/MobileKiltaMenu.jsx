import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

const MobileKiltaMenu = ({ title, sections, menuOpen, onItemClick }) => {
  const { t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const headingRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) {
      setIsOpen(false)
      setActiveSection(null)
    }
  }, [menuOpen])

  useEffect(() => {
    if (isOpen) headingRef.current?.focus()
  }, [activeSection, isOpen])

  const handleToggle = () => {
    setIsOpen((wasOpen) => !wasOpen)
    setActiveSection(null)
  }

  const handleNavigate = () => {
    setIsOpen(false)
    setActiveSection(null)
    onItemClick()
  }

  return (
    <section className="mobile-kilta">
      <button
        type="button"
        className="mobile-nav-row mobile-kilta-trigger"
        aria-expanded={isOpen}
        aria-controls="mobile-kilta-panel"
        onClick={handleToggle}
      >
        <span>{title}</span>
        <RiArrowRightSLine
          className={isOpen ? 'mobile-kilta-chevron is-open' : 'mobile-kilta-chevron'}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="mobile-kilta-panel" id="mobile-kilta-panel">
          {!activeSection ? (
            <>
              <div className="mobile-kilta-options">
                {sections.map((section) => (
                  <button
                    type="button"
                    className="mobile-kilta-option"
                    key={section.section}
                    onClick={() => setActiveSection(section)}
                  >
                    <span>{section.section}</span>
                    <RiArrowRightSLine aria-hidden="true" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                className="mobile-kilta-back"
                aria-label={t('nav.backToSections')}
                onClick={() => setActiveSection(null)}
              >
                <RiArrowLeftSLine aria-hidden="true" />
                <span>{t('nav.back')}</span>
              </button>
              <div className="mobile-kilta-pages">
                {activeSection.items.map(({ label, path }) =>
                  /^https?:\/\//.test(path) ? (
                    <a
                      className="mobile-kilta-page"
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={path}
                      onClick={handleNavigate}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      className="mobile-kilta-page"
                      to={path}
                      key={path}
                      onClick={handleNavigate}
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  )
}

export default MobileKiltaMenu
