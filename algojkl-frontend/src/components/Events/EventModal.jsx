import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next'

/**
 * EventModal
 *
 * Näyttää modaalin yksittäisen tapahtuman tiedoille
 */
const EventModal = ({ event, onClose, triggerRef }) => {
  const { t, i18n } = useTranslation('common')
  const dateLocale = i18n.language === 'en' ? 'en-GB' : 'fi-FI'
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key === 'Escape') {
        keyboardEvent.preventDefault()
        onClose()
        return
      }

      if (keyboardEvent.key !== 'Tab') return

      const focusableItems = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      )
      if (!focusableItems?.length) return

      const firstItem = focusableItems[0]
      const lastItem = focusableItems[focusableItems.length - 1]

      if (keyboardEvent.shiftKey && document.activeElement === firstItem) {
        keyboardEvent.preventDefault()
        lastItem.focus()
      } else if (
        !keyboardEvent.shiftKey &&
        document.activeElement === lastItem
      ) {
        keyboardEvent.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      triggerRef?.current?.focus()
    }
  }, [onClose, triggerRef])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="close"
          aria-label={t('pages.eventModal.close')}
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h3 id="event-modal-title">{event.title}</h3>
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
