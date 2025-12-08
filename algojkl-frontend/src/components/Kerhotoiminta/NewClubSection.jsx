import React from 'react'
/**
 * NewClubSection
 *
 * Tämä komponentti renderöi ohjeet uuden kerhon perustamiseen.
 * Propsit:
 * - newClub: objekti, jossa:
 *   - title: otsikko
 *   - description: kuvaus
 *   - steps: lista vaiheista, joissa:
 *       - title: vaiheen otsikko
 *       - points: lista lisätiedoista (valinnainen)
 */
const NewClubSection = ({ newClub }) => (
  <div>
    <h3>{newClub.title}</h3>
    <p>{newClub.description}</p>
    <ol>
      {newClub.steps.map((step, idx) => (
        <li key={idx}>
          <strong>{step.title}</strong>
          {step.points && (
            <ul>
              {step.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  </div>
)

export default NewClubSection
