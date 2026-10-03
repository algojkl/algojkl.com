import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useContentfulData } from '../../services/useContentfulData'
import EventList from './EventList'
import EventModal from './EventModal'
import LoadMoreButton from './LoadMoreButton'
import { useVisibleEvents } from './UseVisibleEvents'

const EventCards = () => {
  const { data, isLoading, error } = useContentfulData()
  const { t } = useTranslation('common')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const openerRef = useRef(null)
  const initialVisibleCount = 4

  const handleEventOpen = (event, trigger) => {
    openerRef.current = trigger
    setSelectedEvent(event)
  }

  useEffect(() => {
    document.body.classList.toggle('modal-open', !!selectedEvent)
  }, [selectedEvent])

  const sortedEvents =
    data && data.events
      ? [...data.events].sort((a, b) => new Date(a.date) - new Date(b.date))
      : []

  const { visibleEvents, showAll, toggleVisibleCount } = useVisibleEvents(
    sortedEvents,
    initialVisibleCount
  )

  if (isLoading) {
    return (
      <div className="event-cards-container" aria-busy="true">
        <span className="event-sr-only" role="status">
          {t('pages.eventCards.loading')}
        </span>
        {Array.from({ length: initialVisibleCount }, (_, index) => (
          <div className="event-card-skeleton" key={index} aria-hidden="true">
            <span className="event-card-skeleton-media" />
            <span className="event-card-skeleton-title" />
            <span className="event-card-skeleton-meta" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <p className="event-state" role="alert">
        {t('pages.eventCards.error')}
      </p>
    )
  }

  return (
    <div>
      <div className="event-cards-container">
        <EventList events={visibleEvents} onEventClick={handleEventOpen} />
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            triggerRef={openerRef}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>

      {sortedEvents.length > initialVisibleCount && (
        <LoadMoreButton showAll={showAll} onClick={toggleVisibleCount} />
      )}
    </div>
  )
}

export default EventCards
