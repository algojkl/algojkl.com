import React from 'react'
import StarterImage from '../common/StarterImage'
import { starterImages, tutkinnot } from '../PageData/hakijatData'

/**
 * HakijatPage-komponentti
 * Tämä komponentti esittää Hakijat-sivun, joka sisältää:
 * 1. StarterImage-komponentin, joka näyttää sivun yläosan kuvan
 *    (desktop- ja mobiiliversiot propsien kautta).
 * 2. Johdantotekstin uusille hakijoille Jyväskylän yliopistoon ja IT-opintoihin.
 * 3. Tutkinto-osio, joka käy läpi:
 *    - Diplomi-insinööri tutkinnot IT-opiskelijoille
 *    - Jokaisen tutkinnon ohjelmat ja niiden opinnot listamuodossa
 *    - Linkin lisätietoihin Jyväskylän yliopiston sivuilla
 * 4. Lyhyt kuvaus Algo ry:stä, joka kertoo killan toiminnasta ja jäsenyydestä.
 *
 * Data tutkinto-ohjelmista on tuotu erillisestä hakijatData-tiedostosta.
 * Datan muokkaus on helppoa ja selkeää, jotta uusia tutkintoja tai ohjelmia
 * voidaan lisätä tarvittaessa hakijatData.js-tiedostoon.
 */
const HakijatPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt="Hakijat"
      />
      <div className="hakijalle-container">
        <p>
          Hienoa, että olet kiinnostunut opiskelusta Jyväskylän Yliopistossa!
          Jyväskylän yliopisto tarjoaa kahta eri Diplomi-insinööri tutkintoa
          IT-opiskelijoille:{' '}
          <strong>
            Tieto- ja ohjelmistotekniikka tai Teknologiajohtaminen.
          </strong>
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
              Lisätietoja {tutkinto.title.toLowerCase()} tutkinto-ohjelmasta
              löydät <a href={tutkinto.link}>Jyväskylän yliopiston sivuilta.</a>
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
