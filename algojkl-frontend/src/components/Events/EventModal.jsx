import React from 'react'
import ReactMarkdown from 'react-markdown'

/**
 * EventModal
 *
 * Näyttää modaalin yksittäisen tapahtuman tiedoille
 */
const EventModal = ({ event, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="close" onClick={onClose}>&times;</span>
      <h2>{event.title}</h2>
      <ReactMarkdown>{event.description}</ReactMarkdown>
      {event.url && (
        <h2 className="modal-tickets">
          <a href={event.url}>Liput</a>
        </h2>
      )}
      <p>
        <strong>Päivämäärä:</strong>{' '}
        {new Date(Date.parse(event.date)).toLocaleDateString('fi-FI')}
      </p>
      {event.picture?.fields?.file?.url && (
        <img
          src={event.picture.fields.file.url}
          alt={event.title}
          className="modal-image"
        />
      )}
    </div>
  </div>
)

export default EventModal
