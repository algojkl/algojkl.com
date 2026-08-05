import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * LoadMoreButton
 *
 * Näyttää “näytä lisää / vähemmän” -painikkeen
 */
const LoadMoreButton = ({ showAll, onClick }) => {
  const { t } = useTranslation('common')

  return (
    <div className="event-card-button">
      <button
        type="button"
        onClick={onClick}
        aria-label={
          showAll
            ? t('pages.eventCards.showLessAria')
            : t('pages.eventCards.showMoreAria')
        }
      >
        {showAll
          ? t('pages.eventCards.showLess')
          : t('pages.eventCards.showMore')}
      </button>
    </div>
  )
}

export default LoadMoreButton
