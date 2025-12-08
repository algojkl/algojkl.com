import React from 'react'
import useDevice from '../hooks/useDevice'

const StarterImage = ({
  desktopImage,
  mobileImage,
  alt = 'starter_image',
  className = 'starter',
}) => {
  const isMobile = useDevice()
  const imageSrc = isMobile ? mobileImage : desktopImage

  return <img src={imageSrc} alt={alt} className={className} />
}

export default StarterImage
