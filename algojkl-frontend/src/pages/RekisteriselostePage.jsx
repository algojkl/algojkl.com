import React from 'react'
import starterDesktop from '../images/Page_starters/10.jpg'
import starterMobile from '../images/mobiili/12.png'
import StarterImage from '../common/StarterImage'

const RekisteriselostePage = () => {
  return (
    <div>
        <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Seloste"
      />
      <div className="seloste-container">
        <h1>Jäsenrekisteriseloste</h1>
        <p>
          Tämä on Algo ry:n henkilötietolain (10 ja 24 §) ja EU:n yleisen
          tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste.
          Laadittu 31.8.2022.
          <br />
          <br />
          <br />
          <br />
          <strong>1.</strong> Rekisterinpitäjä
          <br />
          <br />
          Algo ry / IT-Tiedekunta
          <br />
          <br />
          PL 35 (Agora)
          <br />
          <br />
          40014 Jyväskylän yliopisto
          <br />
          <br />
          <br />
          <br />
          <strong>2.</strong> Rekisteristä vastaava yhteyshenkilö
          <br />
          <br />
          Algo ry:n sihteeri (sihteeri@algojkl.com)
          <br />
          <br />
          <br />
          <br />
          <strong>3.</strong> Rekisterin nimi
          <br />
          <br />
          Yhdistyksen jäsenrekisteri.
          <br />
          <br />
          <br />
          <br />
          <strong>4.</strong> Oikeusperuste ja henkilötietojen käsittelyn
          tarkoitus
          <br />
          <br />
          EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste
          henkilötietojen käsittelylle on rekisterinpitäjän oikeutettu etu
          (jäsenyys). Henkilötietojen käsittelyn tarkoitus on yhteydenpito
          jäseniin, sekä jäsenyyden tarkistaminen, silloin kun sitä vaaditaan
          (esim. Sääntömääräinen kokous). Tietoja ei käytetä automatisoituun
          päätöksentekoon tai profilointiin. Yhdistyslain mukaan yhdistyksen
          hallituksen on pidettävä jäsenistä luetteloa.
          <br />
          <br />
          <br />
          <br />
          <strong>5.</strong> Rekisterin tietosisältö
          <br />
          <br />
          Rekisteriin tallennettavia tietoja ovat: henkilön nimi, yhteystiedot
          (sähköpostiosoite), kotipaikkakunta.
          <br />
          <br />
          <br />
          <br />
          <strong>6.</strong> Säännönmukaiset tietolähteet
          <br />
          <br />
          Rekisteriin tallennettavat tiedot saadaan jäseneltä www-lomakkeilla
          lähetetyistä viesteistä tai tapaamisessa.
          <br />
          <br />
          <br />
          <br />
          <strong>7.</strong> Tietojen säännönmukaiset luovutukset ja tietojen
          siirto EU:n tai ETA:n ulkopuolelle
          <br />
          <br />
          Tietoja ei luovuteta säännönmukaisesti muille tahoille.
          <br />
          <br />
          <br />
          <br />
          <strong>8.</strong> Rekisterin suojauksen periaatteet
          <br />
          <br />
          Rekisterin käsittelyssä noudatetaan huolellisuutta ja
          tietojärjestelmien avulla käsiteltävät tiedot suojataan
          asianmukaisesti. Kun rekisteritietoja säilytetään
          Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta
          tietoturvasta huolehditaan asiaankuuluvasti. Rekisterinpitäjä
          huolehtii siitä, että tallennettuja tietoja sekä palvelimien
          käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta
          kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden
          henkilöiden toimesta, joiden työnkuvaan se kuuluu.
          <br />
          <br />
          <br />
          <br />
          <strong>9.</strong> Tarkastusoikeus ja oikeus vaatia tiedon
          korjaamista
          <br />
          <br />
          Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa
          rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen
          tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli
          henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin
          oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle.
          Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan
          henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n
          tietosuoja-asetuksessa säädetyssä ajassa.
          <br />
          <br />
          <br />
          <br />
          <strong>10.</strong> Muut henkilötietojen käsittelyyn liittyvät
          oikeudet
          <br />
          <br />
          Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien
          henkilötietojen poistamiseen rekisteristä (”oikeus tulla
          unohdetuksi”). Niin ikään rekisteröidyillä on muut EU:n yleisen
          tietosuoja-asetuksen mukaiset oikeudet kuten henkilötietojen
          käsittelyn rajoittaminen tietyissä tilanteissa. Pyynnöt tulee lähettää
          kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää
          tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä.
          Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa
          säädetyssä ajassa
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  )
}

export default RekisteriselostePage
