import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import CarouselSlide from './CarouselSlide'
import CarouselDots from './CarouselDots'
import { useCarousel } from './useCarousel'

import ryhma from '../../images/ryhma.png'
import logo from '../../images/algo.jpg'
import algo from '../../images/algo12.jpg'
import mobile1 from '../../images/mobiili/algo_etu_mobiili.png'
import mobile2 from '../../images/mobiili/kaste_m.png'
import mobile3 from '../../images/mobiili/ryhma_m.png'
import algo_en from '../../images/algo_en.png'
import algo_en_mobile from '../../images/algo_en_mobile.png'

const Carousel = () => {
  const { i18n } = useTranslation('common')
  const isEnglish = (i18n.resolvedLanguage || i18n.language || 'fi').startsWith(
    'en',
  )

  const firstDesktopImage = isEnglish ? algo_en : logo
  const firstMobileImage = isEnglish ? algo_en_mobile : mobile1

  const [photos, setPhotos] = useState([firstDesktopImage, ryhma, algo])

  const { currentIndex, goToSlide } = useCarousel(photos.length, 5000)

  useEffect(() => {
    const updatePhotos = () => {
      if (window.innerWidth < 768) {
        setPhotos([firstMobileImage, mobile2, mobile3])
      } else {
        setPhotos([firstDesktopImage, ryhma, algo])
      }
    }

    updatePhotos()
    window.addEventListener('resize', updatePhotos)
    return () => window.removeEventListener('resize', updatePhotos)
  }, [firstDesktopImage, firstMobileImage])

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <CarouselSlide key={index} photo={photo} />
        ))}
      </div>
      <CarouselDots
        photos={photos}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />
    </div>
  )
}

export default Carousel
