import React from 'react'

/**
 * CarouselSlide
 *
 * Yksi karusellin kuva.
 */
const CarouselSlide = ({ photo, index }) => (
  <div className="carousel-slide" key={index}>
    <img src={photo} alt={`Slide ${index + 1}`} />
  </div>
)

export default CarouselSlide
