import React from 'react'
import PropTypes from 'prop-types'

/**
 * HallitusImage
 *
 * Näyttää hallituksen jäsenen kuvan ja mahdollistaa sen muodon vaihtamisen
 * (suorakulmainen ↔ pyöreä) painikkeen avulla.
 *
 * Props:
 *  - src: kuvan lähde (datan tuoma polku)
 *  - alt: vaihtoehtoinen teksti kuvalle saavutettavuutta varten (ei käytössä)
 *  - rounded: määrittää, onko kuva pyöristetty
 *  - onToggle: funktio, jota kutsutaan kun käyttäjä painaa piilottetua painiketta.
 */

const HallitusImage = ({ src, alt, rounded, onToggle }) => (
  <div className="hallitus-image-container">
    <button
      className="hidden-button"
      onClick={onToggle}
      aria-label="Toggle image shape"
    />
    <img
      src={src}
      alt={alt}
      className={`hallitus-kuva ${rounded ? 'rounded' : ''}`}
    />
  </div>
)

HallitusImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  rounded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default HallitusImage
