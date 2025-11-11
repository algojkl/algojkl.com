import React from 'react'
import starterDesktop from '../images/Page_starters/17.jpg'
import starterMobile from '../images/mobiili/19.png'
import StarterImage from '../common/StarterImage'
const YhteydenottoPage = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Yhteydenotto"
      />
      <div className="yhteydenotto-container">
        <h1>Kurssipalaute</h1>
        <p>
          Algo ry:n yksi tärkeimpiä tehtäviä on edunvalvonta ja kilta pyrkii
          vaikuttamaan opetuksen kehittämiseen. Tällä lomakkeella voit antaa
          palautetta tietystä kurssista liittyen opetukseen, arviointiin tai
          mihin vaan.{' '}
          <strong>
            {' '}
            Tämä palaute ei korvaa yliopiston virallista tai opettajan antamaa
            kurssipalautelomaketta!{' '}
          </strong>
          <br />
          <br />
          Tätä palautetta kerää ja käyttää Algon kopo ja puheenjohtaja. Tämän
          palautteen voit antaa täysin anonyymisti tai antaa yhteystietosi jos
          haluat että sinuun ollaan yhteydessä. Palautteet viedään kuitenkin
          eteenpäin täysin anonyymeinä.
          <br />
          Linkki lomakkeeseen:{' '}
          <a href="https://forms.gle/eXQokL9ukeJNgKoAA">Kurssipalautelomake</a>
        </p>
        <h1>Sopo-Kopo Yhteydenottolomake</h1>
        <p>
          Tällä lomakkeella voit ottaa yhteyttä jos olet kokenut asiatonta
          käytöstä, väärinkäytöksiä opetuksessa tai haluat muuten vain kertoa
          ongelmistasi. Voit halutessasi jättää yhteystietosi jos haluat että
          Algon hyvinvointivastaava/sopo/kopo on sinuun asian tiimoilta
          yhteydessä. Muutoin vastaukset tähän lomakkeeseen käsitellään
          luottamuksellisesti ja anonyymisti. Vaikka jättäisit yhteystietosi,
          asiasi käsitellään anonyymisti. Vain sopo/kopo näkee yhteystietosi.
          <br />
          Linkki lomakkeeseen:{' '}
          <a href="https://forms.gle/5vLF7HQQosCeov5s8">SopoKopoLomake</a>
        </p>
        <h1>Yleinen palautelomake</h1>
        <p>
          Tänne saat kertoa palautetta - niin positiivista kuin negatiivistakin
          - Algon toiminnasta, sivuista tai mistä tahansa kiltaamme liittyvästä.
          <br />
          Linkki lomakkeeseen:{' '}
          <a href="https://forms.gle/fje29tPTM4PQCtws9">Palautelomake</a>
        </p>
      </div>
    </div>
  )
}

export default YhteydenottoPage
