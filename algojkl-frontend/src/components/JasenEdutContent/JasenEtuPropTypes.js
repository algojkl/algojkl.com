import PropTypes from 'prop-types'

export const jasenEtuPropType = PropTypes.shape({
  id: PropTypes.string,
  otsikkofirma: PropTypes.string.isRequired,
  kuvaus: PropTypes.string.isRequired,
  kuvaUrl: PropTypes.string,
})
