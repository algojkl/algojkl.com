import React from 'react'
import starterDesktop from '../images/Page_starters/18.jpg'
import starterMobile from '../images/mobiili/20.png'
import useDevice from '../hooks/useDevice'

const KansainvalisyysPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop
  return (
    <div>
      <img src={starterImage} alt="starter_image_rules" className="starter" />
      <div className="kansainvalisyys-container">
        <h1>Algolaisen vaihtovinkit ja linkit </h1>
        <p className="kv-container-starter">Vaihtoon lähtemisen vuosikello</p>
        <h3>Tammikuu</h3>
        <p>
          Infotilaisuuksia järjestetään yleensä tammikuun puolivälin jälkeen,
          jolloin saat kattavan kuvan vaihto-ohjelmista ja -mahdollisuuksista.
        </p>
        <ul>
          <li>
            <strong>Tammikuussa alkavat haut:</strong>
            <ul>
              <li>
                <strong>22.1. – 5.2.</strong> Haku Euroopan vaihtokohteisiin
                (Erasmus, Nordplus, Nordlys).
              </li>
              <li>
                <strong>22.1. – 5.2.</strong> Lisähaku Euroopan ulkopuolisiin
                kohteisiin.
              </li>
            </ul>
          </li>
        </ul>
        <h3>Helmi- ja Maaliskuu</h3>
        <p>
          Näiden kuukausien aikana ei ole varsinaisia hakuaikoja, mutta voit
          käyttää aikaa hakemuksen valmisteluun ja vaihtokohteen suunnitteluun.
        </p>
        <h3>Huhtikuu</h3>
        <p>
          <strong>1.4. – 31.5.</strong> Täydennyshaku
          Erasmus-opiskelijavaihtoon. Hakemuksia käsitellään juoksevasti koko
          hakuajan ajan, pääsääntöisesti saapumisjärjestyksessä.
        </p>
        <h3>Syyskuu</h3>
        <p>
          <strong>2.9. – 30.9</strong> Täydennyshaku Erasmus- ja
          Nordplus-vaihtoon kevätlukukaudeksi 2025. Hakemukset käsitellään kuten
          huhtikuussa, saapumisjärjestyksessä.
        </p>
        <h3>Lokakuu:</h3>
        <p>
          <strong>1.10. – 1.11.</strong> Haku Euroopan ulkopuolisiin
          vaihtokohteisiin, mukaan lukien kahdenväliset kohteet ja ISEP-vaihto.
        </p>
        <h3>Touko- ja joulukuu:</h3>
        <p>
          Näinä kuukausina voit hakea yliopiston matka-apurahaa, jos olet itse
          löytänyt harjoittelupaikan ulkomailta. Hakuajat vaihtelevat
          vuosittain, joten seuraa tarkempia ilmoituksia apurahan
          hakukuulutuksista.
        </p>
        <h3>Ympäri vuoden:</h3>
        <p>
          Erasmus-harjoitteluapuraha on haettavissa koko vuoden ajan.
          Huomioithan kuitenkin, että apurahan maksatuksessa voi kestää muutamia
          kuukausia, joten varaa hakemukselle riittävästi aikaa.
        </p>
        <h3>Vaihtovinkit</h3>
        <ul>
          <li>
            <strong>Opintopistevaatimukset:</strong> Vaihto-ohjelmasta ja
            -kohteesta riippuen opiskelijan on yleensä suoritettava jokin
            minimimäärä opintopisteitä lukukautta kohti kohdeyliopistossa.
            Esimerkiksi 20 opintopistettä (20 ECTS) per lukukausi.
          </li>
          <li>
            <strong>Kurssisuunnitelma:</strong> Vaihtoa varten laaditaan
            Learning Agreement, jossa määritellään vaihdon aikana suoritettavat
            kurssit. Tämä dokumentti tulee hyväksyttää sekä kotiyliopistossa
            että kohdeyliopistossa.
            <ul>
              <li>
                Älä stressaa liikaa: suunnitelma on alustava ja sitä voi muuttaa
                tarpeen mukaan vaihdon aikana.
              </li>
              <li>
                Kurssit saattavat muuttua myös kursseille ilmoittautumisen
                yhteydessä.
              </li>
            </ul>
          </li>
          <li>
            <strong>Opintotasojen huomioiminen</strong>
            <ul>
              <li>
                Mieti, minkä tasoisia opintoja haluat suorittaa ja tarkista,
                mitä kursseja kohdeyliopistot tarjoavat.
                <ul>
                  <li>
                    Esimerkiksi Euroopassa kanditasoisia kursseja on usein
                    tarjolla paikallisella kielellä, kun taas maisteritasoiset
                    opinnot ovat yleensä englanniksi.
                  </li>
                </ul>
              </li>
              <li>
                Jos olet kandidaattiopiskelija, voit hakea lähes mihin tahansa
                kohteeseen. (Opetuksen kieli)
              </li>
              <li>
                Jos haluat suorittaa maisteritason opintoja kandidaattiopintojen
                aikana, joissain vaihtokohteissa vaaditaan todistus
                vaihtokoordinaattorilta siitä, että sinulla on oikeus suorittaa
                maisteritasoisia opintoja.
              </li>
            </ul>
          </li>
        </ul>
        <h3>Vaihto-ohjelmat</h3>
        <ul>
          <li>
            <strong>Erasmus (Eurooppa)</strong>
            <p>
              Erasmus-ohjelma tarjoaa opiskelijoille mahdollisuuden viettää 1–2
              lukukautta opiskellen EU- ja ETA-maissa sekä Turkissa.
              Vaihtopaikat perustuvat tiedekuntien ja oppiaineiden välisiin
              sopimuksiin.
            </p>
            <ul>
              <li>
                Lisätietoja:{' '}
                <a href="https://www.jyu.fi/fi/opiskelijalle/kandi-ja-maisteriopiskelijan-ohjeet/kansainvalistyminen-ja-opiskelijavaihto/erasmus">
                  Erasmus-ohjelma
                </a>
              </li>
              <li>
                IT-tiedekunnan Erasmus-opas:{' '}
                <a href="https://www.jyu.fi/fi/opiskelijalle/kansainvalistyminen-ja-opiskelijavaihto/erasmus-opas-informaatioteknologian-tiedekunnalle">
                  Erasmus-opas IT-tiedekunnalle
                </a>
              </li>
              <li>
                On suositeltavaa hakea oman tiedekunnan paikkoja, sillä
                hakemukset ovat etusijalla. Muiden tiedekuntien paikoille
                hakiessa kyseisen tiedekunnan opiskelijat ovat etusijalla.
              </li>
            </ul>
          </li>
          <li>
            <strong>Kahdenväliset kohteet (Euroopan ulkopuolella)</strong>
            <p>
              Tämä ohjelma kattaa vaihdot Pohjois-, Väli- ja Etelä-Amerikkaan,
              Aasiaan, Australiaan ja Afrikkaan. Nämä kohteet eivät ole
              tiedekuntakohtaisia, ja hakijat voivat olla eri aloilta.{' '}
            </p>
            <ul>
              <li>
                Lisätietoja:{' '}
                <a href="https://www.jyu.fi/fi/opiskelijalle/kandi-ja-maisteriopiskelijan-ohjeet/kansainvalistyminen-ja-opiskelijavaihto/kahdenvaliset-kohteet">
                  Kahdenväliset kohteet
                </a>
              </li>
              <li>
                Australia on erityisen haluttu kohde, joten sinne pääsy voi olla
                haastavaa.
              </li>
              <li>
                Valintakriteerit päättävät sijoitukset, ja valintapäätöksistä
                ilmoitetaan noin kuukausi hakuajan päättymisen jälkeen.
              </li>
            </ul>
          </li>
          <li>
            <strong>ISEP (Euroopan ulkopuolella):</strong>
            <p>
              ISEP-ohjelman kautta opiskelija voi hakea useisiin yliopistoihin
              ympäri maailmaa yhdellä hakemuksella.
            </p>
            <ul>
              <li>
                Lisätietoja:{' '}
                <a href="https://www.jyu.fi/fi/opiskelijalle/kandi-ja-maisteriopiskelijan-ohjeet/kansainvalistyminen-ja-opiskelijavaihto/isep">
                  ISEP-ohjelma
                </a>
              </li>
              <li>
                Jyväskylän yliopistossa ensivaiheessa haetaan kolmeen
                yliopistoon, mutta lopullisessa hakemuksessa voi olla jopa 10
                vaihtoehtoa.
              </li>
              <li>
                Ohjelman koordinoinnista vastaa ISEP-järjestö, joka päättää
                lopullisen sijoituksen.
              </li>
              <li>
                Australia ja Uusi-Seelanti eivät ole haettavissa JYU:n Mobility
                Online -portaalissa.
              </li>
              <li>Useimmat ISEP-kohteet tarjoavat vain kanditason kursseja.</li>
            </ul>
          </li>
          <li>
            <strong>Nordplus (Pohjoismaat ja Baltia)</strong>
            <p>
              Nordplus-ohjelma mahdollistaa vaihdon 1–12 kuukaudeksi
              Pohjoismaihin tai Baltiaan. Opiskelijalla on oltava vähintään
              vuoden opinnot kotikorkeakoulussaan ennen vaihtoon lähtöä.
            </p>
            <ul>
              <li>
                Lisätietoja:{' '}
                <a href="https://www.jyu.fi/fi/opiskelijalle/kandi-ja-maisteriopiskelijan-ohjeet/kansainvalistyminen-ja-opiskelijavaihto/nordplus">
                  Nordplus-ohjelma
                </a>
              </li>
              <li>
                Verkostot myöntävät usein apurahoja myös lyhyemmille
                liikkuvuusjaksoille (1–4 viikkoa).
              </li>
            </ul>
          </li>
          <li>
            <strong>FORTHEM</strong>
            <p>
              FORTHEM-allianssi mahdollistaa Erasmus-vaihdon allianssin
              jäsenyliopistoihin sekä lyhytliikkuvuusjaksot. Lyhytjaksot
              kestävät noin 5 päivää ja tarjoavat mahdollisuuden osallistua
              monialaisiin projekteihin.
              <br />
              <br />
              Lisätietoja:{' '}
              <a href="https://www.jyu.fi/fi/opiskelijalle/kandi-ja-maisteriopiskelijan-ohjeet/kansainvalistyminen-ja-opiskelijavaihto/forthem-kansainvalistyminen">
                FORTHEM-ohjelma
              </a>
            </p>
          </li>
        </ul>
        <h3>Sivustot</h3>
        <ul>
          <li>
            <strong>Hakuprosessi Mobility Online -portaalissa:</strong>
            <p>
              Kaikki vaihtohaut tapahtuvat Mobility Online -portaalin kautta.
              Aloita hakuprosessi seuraavasta linkistä:
            </p>
            <ul>
              <li>
                <a href="https://www.service4mobility.com/europe/MobilitySearchServlet?sprache=en&identifier=JYVASKY01">
                  Mobility Online-portaali
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Ohjeita hakuvaiheeseen:</strong>
            <p>
              Löydä yksityiskohtaiset ohjeet hakuprosessin alkuvaiheeseen
              täältä:
            </p>
            <ul>
              <li>
                <a href="https://www.jyu.fi/fi/opiskelijalle/kandi-ja-maisteriopiskelijan-ohjeet/kansainvalistyminen-ja-opiskelijavaihto/vaihtoon-hakeminen">
                  Step by step -hakuohjeet
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Valmistautuminen vaihtoon:</strong>
            <p>Tutustu valmistautumisohjeisiin ennen vaihtoon lähtöä:</p>
            <ul>
              <li>
                <a href="https://www.jyu.fi/fi/opiskelijalle/kandi-ja-maisteriopiskelijan-ohjeet/kansainvalistyminen-ja-opiskelijavaihto/ennen-vaihtoa">
                  Valmistautumisohjeet
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Vaihdon rahoitus:</strong>
            <p>Tietoa vaihdon rahoitusvaihtoehdoista ja apurahoista:</p>
            <ul>
              <li>
                <a href="https://www.jyu.fi/fi/opiskelijalle/kandi-ja-maisteriopiskelijan-ohjeet/kansainvalistyminen-ja-opiskelijavaihto/opiskelijavaihdon-rahoitus">
                  Vaihdon rahoitus
                </a>
              </li>
              <li>
                Tukien lisäksi voit hakea erilaisia stipendejä ja säätiöiden
                apurahoja. Esimerkkejä IT-alan opiskelijoille:
              </li>
              <ul>
                <li>
                  Kauppalaisseuran säätiön Aleksanteri II:n matka-apuraha
                  tietojärjestelmätieteen opiskelijoille
                </li>
                <li>Tellervo ja Juuso Waldenin säätiö</li>
                <li>
                  Riitta ja Jorma J. Takasen säätiö: tukee kansainvälistä
                  kilpailukykyä ja teknologiateollisuuden osaamista. Säätiö
                  jakaa apurahoja esimerkiksi kansainväliseen opiskelijavaihtoon
                  ja tutkimustoimintaan.
                </li>
                <li>Erilaiset kulttuuri- tai maakuntarahastot</li>
              </ul>
            </ul>
          </li>
        </ul>
        <h3>Kielitodistukset:</h3>
        <p>
          Monet vaihtokohteet saattavat vaatia kielitodistuksen.
          Kielitodistuksia voi hankkia Movilta. Lisätietoja saat kääntymällä
          Niina Ormashawin puoleen.
        </p>
      </div>
    </div>
  )
}

export default KansainvalisyysPage
