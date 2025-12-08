import React from 'react'
/**
 * SupportSection
 *
 * Tämä komponentti renderöi tiedot kerhojen saaman tuen muodosta.
 * Propsit:
 * - support: objekti, jossa:
 *   - title: otsikko
 *   - description: kuvaus
 *   - points: lista tuen muodoista
 */

const SupportSection = ({ support }) => (
  <div>
    <h3>{support.title}</h3>
    <p>{support.description}</p>
    <ul>
      {support.points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
)

export default SupportSection
