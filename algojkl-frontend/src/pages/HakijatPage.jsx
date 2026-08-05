import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import { starterImages } from '../PageData/hakijatData'

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
  const { t } = useTranslation('common')
  const tutkinnot = t('pages.hakijat.tutkinnot', { returnObjects: true })

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.hakijat.alt')}
      />
      <div className="hakijalle-container">
        <p>
          {t('pages.hakijat.intro')}{' '}
          <strong>{t('pages.hakijat.degreeProgrammes')}</strong>
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
              {t('pages.hakijat.moreInfoIntro', {
                degree: tutkinto.title.toLowerCase(),
              })}{' '}
              <a href={tutkinto.link}>{t('pages.hakijat.moreInfoLink')}</a>
            </p>
          </div>
        ))}

        <h3>{t('pages.hakijat.aboutTitle')}</h3>
        <p>{t('pages.hakijat.aboutDescription')}</p>
      </div>
    </div>
  )
}

export default HakijatPage
