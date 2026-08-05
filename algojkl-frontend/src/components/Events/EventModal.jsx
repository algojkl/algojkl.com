import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next'

/**
 * EventModal
 *
 * Näyttää modaalin yksittäisen tapahtuman tiedoille
 */
const EventModal = ({ event, onClose }) => {
  const { t, i18n } = useTranslation('common')
  const dateLocale = i18n.language === 'en' ? 'en-GB' : 'fi-FI'

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>{event.title}</h3>
        <ReactMarkdown>{event.description}</ReactMarkdown>
        {event.url && (
          <p className="modal-tickets">
            <a href={event.url}>{t('pages.eventModal.tickets')}</a>
          </p>
        )}
        <p>
          <strong>{t('pages.eventModal.dateLabel')}:</strong>{' '}
          {new Date(Date.parse(event.date)).toLocaleDateString(dateLocale)}
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
}

export default EventModal
