import React from 'react'
import { useTranslation } from 'react-i18next'
import EventCard from './EventCard'

/**
 * EventList
 *
 * Näyttää annetun tapahtumalistauksen.
 */
const EventList = ({ events, onEventClick }) => {
  const { t } = useTranslation('common')

  return (
    <>
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard key={event.id} event={event} onClick={onEventClick} />
        ))
      ) : (
        <p>{t('pages.events.empty')}</p>
      )}
    </>
  )
}

export default EventList
