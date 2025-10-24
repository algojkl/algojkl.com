import React from 'react'

/**
 * LoadMoreButton
 *
 * Näyttää “näytä lisää / vähemmän” -painikkeen
 */
const LoadMoreButton = ({ showAll, onClick }) => (
  <div className="event-card-button">
    <button onClick={onClick}>
      {showAll ? 'NÄYTÄ VÄHEMMÄN' : 'NÄYTÄ LISÄÄ'}
    </button>
  </div>
)

export default LoadMoreButton
