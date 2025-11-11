import React from 'react'

/**
 * EventCard
 *
 * Näyttää yksittäisen tapahtumakortin
 */
const EventCard = ({ event, onClick }) => (
  <div className="event-card" onClick={() => onClick(event)}>
    {event.picture?.fields?.file?.url && (
      <img
        src={event.picture.fields.file.url}
        alt={event.title}
        className="event-image"
      />
    )}
    <h3>{event.title}</h3>
    <p>{new Date(event.date).toLocaleDateString()}</p>
  </div>
)

export default EventCard
