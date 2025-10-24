import React from 'react'

/**
 * CarouselDots
 *
 * Karusellin navigointipisteet.
 */
const CarouselDots = ({ photos, currentIndex, goToSlide }) => (
  <div className="carousel-dots">
    {photos.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => goToSlide(index)}
      ></span>
    ))}
  </div>
)

export default CarouselDots
