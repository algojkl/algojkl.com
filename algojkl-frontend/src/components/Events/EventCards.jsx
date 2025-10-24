import React, { useState, useEffect } from 'react'
import { useContentfulData } from '../../services/useContentfulData'
import EventList from './EventList'
import EventModal from './EventModal'
import LoadMoreButton from './LoadMoreButton'
import { useVisibleEvents } from './UseVisibleEvents'

const EventCards = () => {
  const { data, isLoading, error } = useContentfulData()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const initialVisibleCount = 5

  useEffect(() => {
    document.body.classList.toggle('modal-open', !!selectedEvent)
  }, [selectedEvent])

  const sortedEvents = data && data.events
    ? [...data.events].sort((a, b) => new Date(a.date) - new Date(b.date))
    : []

  const { visibleEvents, showAll, toggleVisibleCount } = useVisibleEvents(
    sortedEvents,
    initialVisibleCount
  )

  if (isLoading) return <p>Loading events...</p>
  if (error) return <p>Virhe ladattaessa tapahtumia</p>

  return (
    <div>
      <div className="event-cards-container">
        <EventList events={visibleEvents} onEventClick={setSelectedEvent} />
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </div>

      {sortedEvents.length > initialVisibleCount && (
        <LoadMoreButton showAll={showAll} onClick={toggleVisibleCount} />
      )}
    </div>
  )
}

export default EventCards
