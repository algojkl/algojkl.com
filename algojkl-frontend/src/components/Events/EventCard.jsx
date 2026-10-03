import React from 'react'
import { useTranslation } from 'react-i18next'
import { RiArrowRightLine } from 'react-icons/ri'

/**
 * EventCard
 *
 * Näyttää yksittäisen tapahtumakortin
 */
const EventCard = ({ event, onClick }) => {
  const { i18n, t } = useTranslation('common')
  const locale = i18n.resolvedLanguage?.startsWith('en') ? 'en-GB' : 'fi-FI'
  const eventDate = new Date(event.date)
  const hasValidDate = Number.isFinite(eventDate.getTime())
  const pictureUrl = event.picture?.fields?.file?.url

  const fullDate = hasValidDate
    ? new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(eventDate)
    : ''

  const day = hasValidDate
    ? new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(eventDate)
    : ''
  const month = hasValidDate
    ? new Intl.DateTimeFormat(locale, { month: 'short' })
        .format(eventDate)
        .replace(/\.$/, '')
    : ''
  return (
    <button
      type="button"
      className="event-card"
      aria-haspopup="dialog"
      onClick={(clickEvent) => onClick(event, clickEvent.currentTarget)}
    >
      <span className="event-card-media">
        {pictureUrl ? (
          <img
            src={pictureUrl}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="event-card-image-placeholder" aria-hidden="true" />
        )}
      </span>
      <span className={`event-card-content${hasValidDate ? '' : ' no-date'}`}>
        {hasValidDate && (
          <time
            className="event-card-date"
            dateTime={eventDate.toISOString()}
            aria-label={fullDate}
          >
            <span className="event-card-day" aria-hidden="true">
              {day}
            </span>
            <span className="event-card-month" aria-hidden="true">
              {month}
            </span>
          </time>
        )}
        <span className="event-card-copy">
          <span className="event-card-title" role="heading" aria-level="3">
            {event.title}
          </span>
          <span className="event-card-action">
            {t('pages.eventCards.viewDetails')}
            <RiArrowRightLine aria-hidden="true" />
          </span>
        </span>
      </span>
    </button>
  )
}

export default EventCard
