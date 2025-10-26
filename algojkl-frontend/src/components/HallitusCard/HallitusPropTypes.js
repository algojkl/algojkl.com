import PropTypes from 'prop-types'

/**
 * memberPropType
 *
 * Määrittelee hallituksen jäsenen tietojen rakenteen PropTypesin avulla.
 * Tätä käytetään kaikissa hallituskomponenteissa (HallitusCard, HallitusInfo).
 *
 * Kentät:
 * - nimi (string, pakollinen): jäsenen nimi
 * - pesti (string, pakollinen): jäsenen pääpesti hallituksessa
 * - lispesti (string, valinnainen): mahdollinen lisäpesti
 * - telegram (string, valinnainen): Telegram-tunnus
 * - sahkoposti (string, valinnainen): sähköpostiosoite
 * - kuva (string, valinnainen): kuvan URL
 */
export const memberPropType = PropTypes.shape({
  nimi: PropTypes.string.isRequired,
  pesti: PropTypes.string.isRequired,
  lispesti: PropTypes.string,
  telegram: PropTypes.string,
  sahkoposti: PropTypes.string,
  kuva: PropTypes.string,
})
