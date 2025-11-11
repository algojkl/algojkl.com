import React from 'react'

/**
 * Section-komponentti
 *
 * Renderöi yhden kohdan rekisteriselosteesta.
 * Props:
 * - title: otsikko (esim. "1. Rekisterinpitäjä")
 * - content: sisältö, voi olla <p>, <ul> tai muu JSX
 */
const Section = ({ title, content }) => (
  <div className="seloste-container">
    <h2>{title}</h2>
    {content}
  </div>
)

export default Section