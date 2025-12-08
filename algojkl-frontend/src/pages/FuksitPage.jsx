import React from 'react'
import StarterImage from '../common/StarterImage'
import Panu from '../components/simple'
import TutorList from '../components/Tutorlist'
import { useContentfulData } from '../services/useContentfulData'

import {
  starterImages,
  ennenOpiskelua,
  opintojenAlku,
  kiltatoiminta,
  jasenyys,
} from '../PageData/fuksitData'

/**
 * Fuksit-komponentti
 * Tämä komponentti esittää fuksisivun, joka sisältää:
 * 1. StarterImage-komponentin, joka näyttää sivun yläosan kuvan
 *    (desktop- ja mobiiliversiot propsien kautta).
 * 2. Panu-komponentin, joka voi toimia visuaalisena elementtinä tai lisäinformaationa.
 * 3. Tietosisällön eri osiot, jotka on jaettu:
 *    - Ennen opiskeluiden alkua (ennenOpiskelua)
 *    - Opintojen alku (opintojenAlku)
 *    - Kiltatoiminta (kiltatoiminta)
 *    - Jäsenyys (jasenyys)
 *    Jokainen osio renderöidään joko listana tai kappaleina.
 * 4. (Valinnainen) TutorList-komponentti, joka listaa tutorit Contentful-datan perusteella
 *    – tämä osa on kommentoitu pois, mutta voidaan ottaa käyttöön tarvittaessa.
 * 5. Data haetaan Contentful-palvelusta useContentfulData-hookin avulla,
 *    ja lataustila ja virhetilanteet käsitellään erikseen.
 */

const Fuksit = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan...</p>
  if (error) return <p>Virhe ladattaessa tietoja!</p>

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt="Fuksit"
      />
      <div className="Freshman-container">
        <div className="fuksi-leveys">
          <div className="header">
            <div>
              <h1>Heippa Fuksi* ~: cd /fuksisyksy</h1>
              <p>
                <i>*Fuksi on ensimmäisen vuoden opiskelija</i>
              </p>
            </div>
            <Panu />
          </div>

          <p>
            <i>Koko opiskeluajan tärkein asia: Seuraa sähköpostia!</i>
          </p>
          <br />

          <h2>Ennen opiskeluiden alkua:</h2>
          <ul>
            {ennenOpiskelua.map((item, idx) => (
              <li key={idx}>
                <strong>
                  {idx + 1}. {item.title}
                </strong>
                <br />
                {item.description}
                {item.link && <a href={item.link.href}> {item.link.text}</a>}
                {item.links &&
                  item.links.map((l, i) => (
                    <span key={i}>
                      {' '}
                      <a href={l.href}>{l.text}</a>
                      {i < item.links.length - 1 ? ', ' : ''}
                    </span>
                  ))}
              </li>
            ))}
          </ul>

          <h2>Opintojen alku</h2>
          {opintojenAlku.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}

          <h2>Kiltatoiminta</h2>
          {kiltatoiminta.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}

          <h2>Jäsenyys</h2>
          {jasenyys.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}

          {/*
          <h2>Tutorit 2025 esittäytyvät:</h2>
          <TutorList tutorit={data?.tutorit} />
          */}
        </div>
      </div>
    </div>
  )
}

export default Fuksit
