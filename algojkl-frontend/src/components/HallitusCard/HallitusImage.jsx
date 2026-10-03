import React from 'react'
import PropTypes from 'prop-types'

/**
 * HallitusImage
 *
 * Displays a board member portrait from Contentful.
 */

const HallitusImage = ({ src, alt }) => (
  <div className="hallitus-image-container">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  </div>
)

HallitusImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default HallitusImage
