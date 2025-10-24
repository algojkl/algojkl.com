import React from 'react'
import EventCard from './EventCard'

/**
 * EventList
 *
 * Näyttää annetun tapahtumalistauksen.
 */
const EventList = ({ events, onEventClick }) => (
  <>
    {events.length > 0 ? (
      events.map((event) => (
        <EventCard key={event.id} event={event} onClick={onEventClick} />
      ))
    ) : (
      <p>Tapahtumia lisätään pian!</p>
    )}
  </>
)

export default EventList
