import React from 'react'
import useDevice from '../hooks/useDevice'
import Panu from '../components/simple'
import TutorList from '../components/Tutorlist'
import starterDesktop from '../images/Page_starters/4.jpg'
import starterMobile from '../images/mobiili/6.png'
import { useContentfulData } from '../services/useContentfulData'

const starterImages = { desktop: starterDesktop, mobile: starterMobile }

const ennenOpiskelua = [
  {
    title: 'Ota opiskelupaikka vastaan',
    description:
      'Opiskelupaikka tulee olla vastaanotettu viimeistään x klo 15.00. Opiskelupaikka vastaanotetaan Oma Opintopolku -palvelussa.',
  },
  {
    title: 'Ilmoittaudu läsnäolevaksi ja maksa ylioppilaskunnan jäsenmaksu',
    description:
      'Ilmoittautuminen lukuvuodelle läsnäolevaksi tapahtuu OILI-ilmoittautumispalvelussa. Samalla maksetaan ylioppilaskunnan jäsenmaksu.',
    link: { href: 'https://oili.csc.fi/', text: 'OILI-ilmoittautumispalvelu' },
  },
  {
    title: 'Korkeakouluopiskelijan terveydenhoitomaksu',
    description:
      'Muista maksaa korkeakouluopiskelijan terveydenhoitomaksu. Tämä maksu on pakollinen jokaiselle opiskelijalle riippumatta siitä, käyttääkö opiskelija terveydenhuoltopalveluita vai ei.',
    link: {
      href: 'https://www.kela.fi/korkeakouluopiskelijan-terveydenhoitomaksu',
      text: 'Lisätietoa',
    },
  },
  {
    title: 'Hae asuntoa',
    description:
      'Soihtu ja Koas tarjoavat sopuhintaisia opiskelija-asuntoja. Kannattaa tehdä asuntohakemukset laajilla hakukriteereillä, jotta asunnon saamiseen menisi vähemmän aikaa. Tarkempia ohjeita löydät JYY:n sivuilta.',
    links: [
      { href: 'https://soihtu.fi/', text: 'Soihtu' },
      { href: 'https://www.koas.fi/fi/', text: 'Koas' },
    ],
  },
  {
    title: 'Hae Kelalta tukia',
    description: 'Muista hakea Kelalta opinto- ja asumistukea.',
    link: {
      href: 'https://www.kela.fi/opiskelijat-pikaopas',
      text: 'Kelan pikaopas',
    },
  },
  {
    title: 'Tilaa opiskelijakortti',
    description:
      'Opiskelijakortilla saat merkittäviä alennuksia jokapäiväisistä asioista. Esimerkiksi opiskeijaruokailun hinta on opiskelijakortilla 2.95€ (normaalisti 8,40€). Tällä hetkellä ylioppilaskunnan opiskelijakortteina toimivat Slice ja Frank. Slicen käyttöönotto onnistuu osoitteessa slice.fi/jyy, ja Frankin osoitteessa frank.fi/opiskelijakortti. Lisätietoa opiskelijakorteista löytyy JYY:n sivuilta.',
    links: [
      { href: 'https://slice.fi/jyy', text: 'Slice' },
      { href: 'https://frank.fi/opiskelijakortti', text: 'Frank' },
      { href: 'https://jyy.fi/opiskelijalle/opiskelijakortti', text: 'JYY' },
    ],
  },
]

const opintojenAlku = [
  'Orientaatioviikko tieto- ja ohjelmistotekniikan sekä teknologiajohtamisen koulutusohjelmissa alkaa 25.8.2025 Jyväskylän yliopiston IT-tiedekunnassa Agoralla.',
]

const kiltatoiminta = [
  'Algo ry on Jyväskylän yliopiston tieto- ja ohjelmistotekniikan sekä teknologiajohtamisen opiskelijoiden kilta. Killan tehtävänä on valvoa jäsentensä etuja, järjestää monipuolisia tapahtumia sekä tehdä yhteistyötä alan yritysten kanssa. Ennen kaikkea Algo on jäsenistölleen yhteisö opintojen ajalle.',
]

const jasenyys = [
  'Osta Algon jäsenyys "Liity Jäseneksi" - nappia painamalla. Seuraa Algoa Instagramissa sekä TikTokissa. Liity myös Algon Discordiin Nauti Algon eduista ja pidä hauskaa tulevissa tapahtumissa :-). Algon Telegramin viestintäkanaviin liittyminen onnistuu sähköpostista löytyvistä jäsenkirjeistä tai kysymällä hallituslaisilta.',
]

const Fuksit = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterImages.mobile : starterImages.desktop
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
            {ennenOpiskelua.map((item, idx) => (
              <li key={idx}>
                <strong>
                  {idx + 1}. {item.title}
                </strong>
                <br />
                {item.description}
                {item.link && (
                  <>
                    {' '}
                    <a href={item.link.href}>{item.link.text}</a>
                  </>
                )}
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
