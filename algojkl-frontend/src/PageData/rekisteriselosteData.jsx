import React from 'react'

/**
 * rekisteriselosteSections
 *
 * Array, jossa jokainen objekti vastaa yhtä kohtaa Algo ry:n
 * jäsenrekisteriselosteessa. Sisältää otsikon ja sisällön (JSX).
 */
export const rekisteriselosteSections = [
  {
    title: '1. Rekisterinpitäjä',
    content: (
      <p>
        Algo ry / IT-Tiedekunta
        <br />
        PL 35 (Agora)
        <br />
        40014 Jyväskylän yliopisto
      </p>
    ),
  },
  {
    title: '2. Rekisteristä vastaava yhteyshenkilö',
    content: <p>Algo ry:n sihteeri (sihteeri@algojkl.com)</p>,
  },
  {
    title: '3. Rekisterin nimi',
    content: <p>Yhdistyksen jäsenrekisteri.</p>,
  },
  {
    title: '4. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus',
    content: (
      <p>
        EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on rekisterinpitäjän oikeutettu etu (jäsenyys). Henkilötietojen käsittelyn tarkoitus on yhteydenpito jäseniin, sekä jäsenyyden tarkistaminen, silloin kun sitä vaaditaan (esim. Sääntömääräinen kokous). Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin. Yhdistyslain mukaan yhdistyksen hallituksen on pidettävä jäsenistä luetteloa.
      </p>
    ),
  },
  {
    title: '5. Rekisterin tietosisältö',
    content: (
      <p>
        Rekisteriin tallennettavia tietoja ovat: henkilön nimi, yhteystiedot (sähköpostiosoite), kotipaikkakunta.
      </p>
    ),
  },
  {
    title: '6. Säännönmukaiset tietolähteet',
    content: (
      <p>
        Rekisteriin tallennettavat tiedot saadaan jäseneltä www-lomakkeilla lähetetyistä viesteistä tai tapaamisessa.
      </p>
    ),
  },
  {
    title: '7. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai ETA:n ulkopuolelle',
    content: <p>Tietoja ei luovuteta säännönmukaisesti muille tahoille.</p>,
  },
  {
    title: '8. Rekisterin suojauksen periaatteet',
    content: (
      <p>
        Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. Kun rekisteritietoja säilytetään Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta tietoturvasta huolehditaan asiaankuuluvasti. Rekisterinpitäjä huolehtii siitä, että tallennettuja tietoja sekä palvelimien käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden henkilöiden toimesta, joiden työnkuvaan se kuuluu.
      </p>
    ),
  },
  {
    title: '9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista',
    content: (
      <p>
        Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa.
      </p>
    ),
  },
  {
    title: '10. Muut henkilötietojen käsittelyyn liittyvät oikeudet',
    content: (
      <p>
        Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien henkilötietojen poistamiseen rekisteristä (”oikeus tulla unohdetuksi”). Niin ikään rekisteröidyillä on muut EU:n yleisen tietosuoja-asetuksen mukaiset oikeudet kuten henkilötietojen käsittelyn rajoittaminen tietyissä tilanteissa. Pyynnöt tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa
      </p>
    ),
  },
]
