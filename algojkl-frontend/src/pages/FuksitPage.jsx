import React from 'react'
import Panu from '../components/simple'

import starterDesktop from '../images/Page_starters/4.jpg'
import starterMobile from '../images/mobiili/6.png'

import useDevice from '../hooks/useDevice'

import { useContentfulData } from '../services/useContentfulData'
import TutorList from '../components/Tutorlist'

const Fuksit = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop

  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan...</p>
  if (error) return <p>Virhe ladattaessa tietoja!</p>

  return (
    <div>
      <img src={starterImage} alt="freshman_starter_img" className="starter" />
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
            <li>
              <strong> 1. Ota opiskelupaikka vastaan </strong>
              <br />
              Opiskelupaikka tulee olla vastaanotettu viimeistään x klo 15.00.
              Opiskelupaikka vastaanotetaan Oma Opintopolku -palvelussa.
            </li>
            <li>
              <strong>
                {' '}
                2. Ilmoittaudu läsnäolevaksi ja maksa ylioppilaskunnan
                jäsenmaksu{' '}
              </strong>
              <br />
              Ilmoittautuminen lukuvuodelle läsnäolevaksi tapahtuu{' '}
              <a href="https://oili.csc.fi/">
                OILI-ilmoittautumispalvelussa.
              </a>{' '}
              Samalla maksetaan ylioppilaskunnan jäsenmaksu. Tästä saat ohjeet
              sähköpostiisi opiskelupaikan vastaanottamisen jälkeen.
            </li>
            <li>
              <strong> 3. Korkeakouluopiskelijan terveydenhoitomaksu </strong>
              <br />
              Muista maksaa{' '}
              <a href="https://www.kela.fi/korkeakouluopiskelijan-terveydenhoitomaksu">
                korkeakouluopiskelijan terveydenhoitomaksu
              </a>
              . Tämä maksu on pakollinen jokaiselle opiskelijalle riippumatta
              siitä, käyttääkö opiskelija terveydenhuoltopalveluita vai ei.
            </li>
            <li>
              <strong> 4. Hae asuntoa </strong>
              <br />
              <a href="https://soihtu.fi/">Soihtu</a> ja{' '}
              <a href="https://www.koas.fi/fi/">Koas</a> tarjoavat sopuhintaisia
              opiskelija-asuntoja. Kannattaa tehdä asuntohakemukset laajilla
              hakukriteereillä, jotta asunnon saamiseen menisi vähemmän aikaa.
              Tarkempia ohjeita asunnon hakemiseen löydät JYY:n sivuilta.
            </li>
            <li>
              <strong> 5. Hae Kelalta tukia </strong>
              Muista hakea Kelalta opinto- ja asumistukea. Katso{' '}
              <a href="https://www.kela.fi/opiskelijat-pikaopas">
                Kelan pikaopas
              </a>{' '}
              opintoetuuksiin.
            </li>
            <li>
              <strong> 6. Tilaa opiskelijakortti </strong>
              Opiskelijakortilla saat merkittäviä alennuksia jokapäiväisistä
              asioista. Esimerkiksi opiskeijaruokailun hinta on
              opiskelijakortilla 2.95€ (normaalisti 8,40€). Tällä hetkellä
              ylioppilaskunnan opiskelijakortteina toimivat Slice ja Frank.
              Slicen käyttöönotto onnistuu osoitteessa{' '}
              <a href="slice.fi/jyy">slice.fi/jyy</a>, ja Frankin osoitteessa{' '}
              <a href="frank.fi/opiskelijakortti">frank.fi/opiskelijakortti</a>.
              Lisätietoa opiskelijakorteista löytyy{' '}
              <a href="https://jyy.fi/opiskelijalle/opiskelijakortti">JYY:n</a>{' '}
              sivuilta.
            </li>
          </ul>

          <h2>Opintojen alku</h2>
          <p>
            Orientaatioviikko tieto- ja ohjelmistotekniikan sekä
            teknologiajohtamisen koulutusohjelmissa alkaa 25.8.2025 Jyväskylän
            yliopiston IT-tiedekunnassa Agoralla.
          </p>
          <h2>Kiltatoiminta</h2>
          <p>
            Algo ry on Jyväskylän yliopiston tieto- ja ohjelmistotekniikan sekä
            teknologiajohtamisen opiskelijoiden kilta. Killan tehtävänä on
            valvoa jäsentensä etuja, järjestää monipuolisia tapahtumia sekä
            tehdä yhteistyötä alan yritysten kanssa. Ennen kaikkea Algo on
            jäsenistölleen yhteisö opintojen ajalle.
          </p>
          <h2>Jäsenyys</h2>
          <p>
            1. Osta Algon jäsenyys &quot;Liity Jäseneksi&quot; - nappia
            painamalla.
            <br />
            <br />
            2. Liity Algon telegram ryhmiin ja seuraa Algoa Instagramissa sekä
            TikTokissa. Liity myös Algon Discordiin. <br />
            <br />
            3. Nauti Algon eduista ja pidä hauskaa tulevissa tapahtumissa
            :-){' '}
          </p>

          <div>
            {/*
          <h2>Tutorit 2025 esittäytyvät:</h2>
          <TutorList tutorit={data?.tutorit} />
        */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fuksit
