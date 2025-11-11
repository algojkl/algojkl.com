import React from 'react'
import starterDesktop from '../images/Page_starters/15.jpg'
import starterMobile from '../images/mobiili/17.png'
import StarterImage from '../common/StarterImage'

const KerhotoimintaPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Kerhotoiminta"
      />
      <div class="kerhotoiminta-container">
        <h1>Kerhotoiminta</h1>

        <p>
          Kerhotoiminta on jäsenistön itsensä organisoimaa tekemistä, joka voi
          liittyä esimerkiksi harrastuksiin, yhteisöllisyyteen tai opiskelun
          tukemiseen. Kaikki jäsenet voivat osallistua kerhoihin tai olla mukana
          niiden perustamisessa.
        </p>

        <h3>Algon kerho(t)</h3>
        <p>
          <strong>Kyykkäkerho</strong>
          <br />
          Kyykkäkerho tarjoaa mahdollisuuden tutustua kyykkään hauskassa ja
          yhteisöllisessä hengessä. Toiminta on avointa kaikille jäsenille
          taitotasosta riippumatta.
          <br />
          <br />
          Lisätietoja kerhosta sekä peliaikatauluista saat liittymällä kerhon
          Telegram-ryhmään:
          <a
            href="https://t.me/+0nivuYqDLzUxYjNk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kyykätään!
          </a>
        </p>

        <h3>Haluatko perustaa uuden kerhon?</h3>
        <p>Uuden kerhon perustaminen onnistuu seuraavilla askelilla:</p>
        <ol>
          <li>
            Laadi <strong>alustava toimintasuunnitelma</strong>, jossa kuvaat:
            <ul>
              <li>Mihin aiheeseen tai tekemiseen kerho liittyy</li>
              <li>Kerhon tarkoitus ja kohderyhmä</li>
              <li>
                Millaisia tapahtumia, tapaamisia tai muuta toimintaa on
                suunnitteilla
              </li>
              <li>
                Millaisia hyötyjä kerho tuo jäsenistölle ja mitä tavoitteita
                sillä on
              </li>
            </ul>
          </li>
          <li>
            Ota yhteyttä hallituksen puheenjohtajaan ja sovi tapaaminen, jossa
            ideoita voidaan yhdessä tarkastella ja kehittää.
          </li>
          <li>
            Jos kerholle nähdään selkeä tarve ja potentiaalia, valmistele{' '}
            <strong>täydennetty toimintasuunnitelma</strong> hallituksen
            kokousta varten.
          </li>
          <li>Hallitus tekee päätöksen kerhon perustamisesta kokouksessaan.</li>
        </ol>

        <h3>Mitä tukea kerhot saavat?</h3>
        <p>
          Hyväksytyt kerhot toimivat virallisesti yhdistyksen alaisuudessa ja
          voivat saada tukea esimerkiksi seuraavilla tavoilla:
        </p>
        <ul>
          <li>Toimintaan liittyvien kustannusten korvaaminen</li>
          <li>
            Algon viestintäkanavien käyttö (esim. telegram ja uutiskirjeet)
          </li>
          <li>
            Mahdollisuus pyytää muuta tukea tilanteen mukaan – ole rohkeasti
            yhteydessä kerhovastaavaan!
          </li>
        </ul>
      </div>
    </div>
  )
}

export default KerhotoimintaPage
