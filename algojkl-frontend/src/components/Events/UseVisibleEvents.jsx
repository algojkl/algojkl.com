import { useState } from 'react'

/**
 * useVisibleEvents
 *
 * Hook hallitsee, kuinka monta tapahtumaa näytetään.
 */
export const useVisibleEvents = (events, initialCount) => {
  const [visibleCount, setVisibleCount] = useState(initialCount)

  const visibleEvents = events.slice(0, visibleCount)
  const showAll = visibleCount >= events.length
  const toggleVisibleCount = () =>
    setVisibleCount(showAll ? initialCount : events.length)

  return { visibleEvents, showAll, toggleVisibleCount }
}
