import React from 'react'

/**
 * Section-komponentti
 * Props:
 * - title: otsikko (string)
 * - content: sisältö (JSX)
 */
const Section = ({ title, content }) => {
  return (
    <div className="saannot-section">
      <h2>{title}</h2>
      <div className="saannot-content">{content}</div>
    </div>
  )
}

export default Section
