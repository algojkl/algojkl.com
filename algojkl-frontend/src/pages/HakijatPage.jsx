import React from 'react'
import useDevice from '../hooks/useDevice'
import { starterImages, tutkinnot } from '../PageData/hakijatData'

const HakijatPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterImages.mobile : starterImages.desktop

  return (
    <div>
      <img src={starterImage} alt="starter_image_rules" className="starter" />

      <div className="hakijalle-container">
        <p>
          Hienoa, että olet kiinnostunut opiskelusta Jyväskylän Yliopistossa!
          Jyväskylän yliopisto tarjoaa kahta eri Diplomi-insinööri tutkintoa
          IT-opiskelijoille: <strong>Tieto- ja ohjelmistotekniikka tai Teknologiajohtaminen.</strong>
        </p>

        {tutkinnot.map((tutkinto, idx) => (
          <div key={idx}>
            <h3>{tutkinto.title}</h3>
            <ul>
              {tutkinto.ohjelmat.map((ohjelma, j) => (
                <li key={j}>
                  <strong>
                    {tutkinto.title} <i>({ohjelma.name})</i>
                  </strong>
                  <ul>
                    {ohjelma.opinnot.map((opinto, k) => (
                      <li key={k}>{opinto}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p>
              Lisätietoja {tutkinto.title.toLowerCase()} tutkinto-ohjelmasta löydät{' '}
              <a href={tutkinto.link}>Jyväskylän yliopiston sivuilta.</a>
            </p>
          </div>
        ))}

        <h3>Mikä ihmeen Algo ry?</h3>
        <p>
          Algo ry on Jyväskylän yliopiston tieto- ja ohjelmistotekniikan sekä
          teknologiajohtamisen opiskelijoiden kilta. Killan tehtävänä on valvoa
          jäsentensä etuja, järjestää monipuolisia tapahtumia sekä tehdä
          yhteistyötä alan yritysten kanssa. Ennen kaikkea Algo on
          jäsenistölleen yhteisö opintojen ajalle.
        </p>
      </div>
    </div>
  )
}

export default HakijatPage
