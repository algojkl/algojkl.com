import { useState, useEffect } from 'react'

/**
 * useCarousel
 *
 * Hook hallitsee karusellin tilaa (currentIndex) ja automaattista liukua.
 */
export const useCarousel = (totalSlides, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, interval)
    return () => clearInterval(timer)
  }, [totalSlides, interval])

  const goToSlide = (index) => setCurrentIndex(index)

  return { currentIndex, goToSlide }
}
