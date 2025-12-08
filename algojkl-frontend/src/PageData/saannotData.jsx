// src/PageData/saannotData.jsx

/**
 * Yhdistyksen säännöt
 *
 * Tämä sisältää kaikki säännöt järjestettynä otsikkojen ja tekstin mukaan.
 * JSX voidaan käyttää, koska tiedosto on .jsx
 */
export const saannotSections = [
  {
    title: '1. Yhdistyksen nimi ja kotipaikka',
    content: (
      <>
        <p>Yhdistyksen nimi on Algo ry ja sen kotipaikka on Jyväskylä.</p>
      </>
    ),
  },
  {
    title: '2. Tarkoitus ja toiminnan laatu',
    content: (
      <>
        <p>
          Yhdistyksen tarkoituksena on toimia Jyväskylän yliopiston tieto- ja
          ohjelmistotekniikan ja teknologiajohtamisen opiskelijoiden
          yhdyssiteenä informaatioteknologian tiedekuntaan, edistää heidän
          opintojaan, harrastuksiaan ja yhteisiä etujaan sekä huolehtia
          jäsentensä oikeuksista opiskelijoina.
        </p>
        <h5>Tarkoituksensa toteuttamiseksi yhdistys:</h5>
        <ul>
          <li>
            voi järjestää kursseja, harjoitus- ja opetustilaisuuksia sekä muuta
            vastaavaa toimintaa
          </li>
          <li>
            voi järjestää kilpailuja, näytöksiä, retkiä, leirejä ja muita
            tapahtumia
          </li>
          <li>
            voi järjestää juhlia, konsertteja, näyttelyitä tai muita
            tilaisuuksia
          </li>
          <li>voi ylläpitää yhdistyksen sähköisiä viestintäkanavia</li>
          <li>
            voi julkaista yhdistyksen tiedotteita ja muuta viestintää eri
            viestintäkanavissa
          </li>
          <li>neuvoo ja ohjaa jäseniään</li>
          <li>voi kerätä ja jakaa tietoa sekä harjoittaa tutkimustoimintaa</li>
          <li>
            kokoaa jäsenet yhteiseen toimintaan ja ylläpitää yhteyksiä muihin
            alan yhdistyksiin
          </li>
          <li>ylläpitää jäsenistään koostuvaa esiintyvää ryhmää</li>
          <li>
            voi järjestää yhdistyksen tarkoitukseen liittyviä matkoja
            jäsenilleen
          </li>
          <li>voi osallistua jäsentensä välittömiin kilpailukustannuksiin</li>
          <li>
            voi hankkia tarvittavia aineistoja ja välineitä yhdistyksen käyttöön
          </li>
          <li>
            pyrkii järjestämään käyttöönsä tilat, joita yhdistyksen jäsenet
            voivat käyttää
          </li>
          <li>
            voi tehdä esityksiä ja aloitteita harrastusmahdollisuuksien
            lisäämiseksi
          </li>
          <li>
            toimii yhteistyössä viranomaisten, järjestöjen, yritysten ja
            yksityishenkilöiden kanssa
          </li>
        </ul>
        <h5>
          Toimintansa tukemiseksi yhdistys voi, hankittuaan tarvittaessa
          asianomaisen luvan:
        </h5>
        <ul>
          <li>järjestää rahankeräyksiä ja arpajaisia</li>
          <li>järjestää myyjäisiä, kirpputori- ja muita tapahtumia</li>
          <li>järjestää maksullisia tilaisuuksia</li>
          <li>ottaa vastaan avustuksia, lahjoituksia ja testamentteja</li>
          <li>
            omistaa toimintansa kannalta tarpeellista irtainta ja kiinteää
            omaisuutta
          </li>
          <li>harjoittaa kahvilatoimintaa</li>
          <li>
            harjoittaa anniskelutoimintaa järjestämiensä tilaisuuksien
            yhteydessä
          </li>
          <li>tehdä talkootyötä</li>
          <li>myydä mainostilaa</li>
          <li>solmia sponsorisopimuksia</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Jäsenet',
    content: (
      <>
        <p>
          Yhdistykseen varsinaiseksi jäseneksi voidaan hyväksyä henkilö, joka on
          Jyväskylän yliopistossa tieto- ja ohjelmistotekniikan tai
          teknologiajohtamisen opintoja suorittava perus- tai jatko-opiskelija
          tai henkilö, jonka yhdistyksen hallituksen kokous muuten hyväksyy
          jäseneksi. Kannattavaksi jäseneksi voidaan hyväksyä yksityinen henkilö
          tai oikeuskelpoinen yhteisö, joka haluaa tukea yhdistyksen tarkoitusta
          ja toimintaa. Varsinaiset jäsenet ja kannattavat jäsenet hyväksyy
          hakemuksesta yhdistyksen hallitus. Jäsenistä pidetään jäsenrekisteriä.
          Jäsen on velvollinen ilmoittamaan yhdistyksen hallitukselle, mikäli
          hänen yhteystietonsa muuttuvat. Kunniajäsenekseen yhdistys voi
          hallituksen esityksestä kutsua yhdistyksen toimintaa ansiokkaasti
          tukeneen henkilön, joka on antanut siihen suostumuksensa. Kunniajäsen
          voidaan nimittää joko hallituksen kokouksessa yksimielisellä
          äänestyksellä koko hallituksen ollessa paikalla tai yhdistyksen
          kokouksessa äänienemmistöllä. Kunniajäsenyys on elinikäinen.
          Saavutetut jäsenoikeudet säilyvät.
        </p>

        <p>
          Varsinaisten jäsenten jäsenmaksu maksetaan kahdeksan (8) vuoden
          välein. Jäsenen tulee erota tai hänet voidaan hallituksen päätöksellä
          erottaa, kun hänen opintonsa IT-tiedekunnassa päättyvät. Jäsen voidaan
          katsoa eronneeksi, mikäli hän ei ole maksanut jäsenmaksuaan 1
          kuukauden kuluessa uuden jäsenmaksukauden alkamisen jälkeen. Jäsen
          voidaan erottaa yhdistyksen jäsenyydestä, jos jäsen on laiminlyönyt
          jäsenmaksun maksamisen, jos jäsen ei ole enää jäsenyyskriteerien
          perusteella jäsenkelpoinen tai jos jäsen on toiminnallaan aiheuttanut
          merkittävää haittaa yhdistykselle tai sen maineelle. Jäsenen
          erottamisesta päättää yhdistyksen hallitus enemmistö äänillä.
          Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä
          kirjallisesti hallitukselle tai sen puheenjohtajalle tai ilmoittamalla
          erosta yhdistyksen kokouksessa merkittäväksi pöytäkirjaan.
        </p>
      </>
    ),
  },
  {
    title: '4. Liittymis- ja jäsenmaksu',
    content: (
      <>
        <p>
          Varsinaisilta jäseniltä ja kannattavilta jäseniltä perittävän
          liittymismaksun ja vuotuisen jäsenmaksun suuruudesta erikseen
          kummallekin jäsenryhmälle päättää kevätkokous. Kunniajäsenet eivät
          suorita jäsenmaksuja.
        </p>
        <p>Liittymis- ja jäsenmaksun keräämiskausi on 1.9.–31.8.</p>
      </>
    ),
  },
  {
    title: '5. Hallitus',
    content: (
      <>
        <p>
          Yhdistyksen asioita hoitaa hallitus, johon kuuluu syyskokouksessa
          valittu puheenjohtaja, varapuheenjohtaja, sihteeri, rahastonhoitaja ja
          enintään kaksikymmentä (20) muuta varsinaista jäsentä. Puheenjohtaja,
          varapuheenjohtaja, sihteeri, rahastonhoitaja ja mahdolliset muut
          hallituksen jäsenet valitaan ehdottomalla äänten enemmistöllä. Jos
          ehdokkaita yhteen pestiin on useampi kuin kaksi (2), eikä kukaan saa
          ensimmäisellä kierroksella enempää kuin puolet annetuista äänistä,
          käydään toinen kierros ensimmäisellä kierroksella kahden eniten ääniä
          saaneen kesken. Lopullisessa äänestyksessä äänten mennessä tasan
          ratkaisee arpa.
        </p>
        <p>
          Hallituksen toimikausi on kalenterivuosi. Hallitus kokoontuu
          puheenjohtajan tai hänen estyneenä ollessaan varapuheenjohtajan
          kutsusta, kun he katsovat siihen olevan aihetta tai kun vähintään
          puolet hallituksen jäsenistä sitä vaatii. Hallitus on päätösvaltainen,
          kun vähintään puolet sen jäsenistä, puheenjohtaja tai
          varapuheenjohtaja mukaan luettuna on läsnä. Äänestykset ratkaistaan
          ehdottomalla äänienemmistöllä. Äänten mennessä tasan ratkaisee
          kokouksen puheenjohtajan ääni, vaaleissa kuitenkin arpa.
        </p>
        <p>
          Hallituksen jäsenen erotessa kesken toimikauden eronneen jäsenen
          tilalle voidaan valita uusi jäsen. Uuden jäsenen toimikausi kestää
          siihen asti kuin eronneen toimikausi olisi kestänyt.
        </p>
        <p>
          Kaikilla jäsenillä on oikeus osallistua hallituksen kokouksiin ilman
          äänivaltaa.
        </p>
      </>
    ),
  },
  {
    title: '6. Yhdistyksen nimen kirjoittaminen',
    content: (
      <>
        <p>
          Yhdistyksen nimen kirjoittaa hallituksen puheenjohtaja,
          varapuheenjohtaja tai yritysvastaava kukin yksin.
        </p>
      </>
    ),
  },
  {
    title: '7. Tilikausi',
    content: (
      <>
        <p>
          Yhdistyksen tilikausi on kalenterivuosi. Tilinpäätös tarvittavine
          asiakirjoineen ja hallituksen vuosikertomus on annettava
          toiminnantarkastajalle viimeistään kolme viikkoa ennen kevätkokousta.
          Toiminnantarkastajan tulee antaa kirjallinen lausuntonsa viimeistään
          viikko ennen kevätkokousta hallitukselle.
        </p>
      </>
    ),
  },
  {
    title: '8. Yhdistyksen kokoukset',
    content: (
      <>
        <p>
          Yhdistys pitää vuosittain kaksi varsinaista kokousta. Yhdistyksen
          kevätkokous pidetään tammi-toukokuussa ja syyskokous syys-joulukuussa
          hallituksen määräämänä päivänä. Yhdistyksen kokouksissa jokaisella
          varsinaisella jäsenellä on yksi ääni. Kannattavalla jäsenellä ja
          kunniajäsenellä on kokouksessa läsnäolo- ja puheoikeus.
        </p>
        <p>
          Yhdistyksen kokouksen päätökseksi tulee, ellei säännöissä ole toisin
          määrätty, se mielipide, jota on kannattanut yli puolet annetuista
          äänistä. Äänten mennessä tasan ratkaisee kokouksen puheenjohtajan
          ääni, vaaleissa kuitenkin arpa. Kokous on päätösvaltainen, kun se on
          laillisesti koolle kutsuttu. Yhdistyksen kokoukseen voidaan osallistua
          hallituksen tai yhdistyksen kokouksen niin päättäessä myös postitse,
          tietoliikenneyhteyden tai muun teknisen apuvälineen avulla kokouksen
          aikana tai ennen kokousta.
        </p>
      </>
    ),
  },
  {
    title: '9. Yhdistyksen kokousten koollekutsuminen',
    content: (
      <>
        <p>
          Hallituksen on kutsuttava yhdistyksen kokoukset koolle vähintään
          seitsemän vuorokautta ennen kokousta sähköpostitse jäsenen
          ilmoittamaan osoitteeseen sekä jäsenille tarkoitetulla some-kanavalla.
        </p>
      </>
    ),
  },
  {
    title: '10. Varsinaiset kokoukset',
    content: (
      <>
        <h5>Yhdistyksen kevätkokouksessa käsitellään seuraavat asiat:</h5>
        <ul>
          <li>
            esitetään tilinpäätös ja toiminnantarkastajien/tilintarkastajien
            lausunto
          </li>
          <li>
            päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden
            myöntämisestä hallitukselle ja muille vastuuvelvollisille
          </li>
          <li>
            vahvistetaan liittymis- ja jäsenmaksujen suuruudet seuraavalle
            keräämiskaudelle (määritelty sääntöjen kohdassa 4. “Liittymis- ja
            jäsenmaksu”)
          </li>
        </ul>
        <h5>Yhdistyksen syyskokouksessa käsitellään seuraavat asiat:</h5>
        <ul>
          <li>vahvistetaan toimintasuunnitelma, tulo- ja menoarvio</li>
          <li> valitaan hallituksen puheenjohtaja ja muut jäsenet</li>
          <li>
            valitaan yksi tai kaksi toiminnantarkastajaa ja
            varatoiminnantarkastajaa
          </li>
        </ul>

        <p>
          Mikäli yhdistyksen jäsen haluaa saada jonkin asian yhdistyksen kevät-
          tai syyskokouksen käsiteltäväksi, on hänen ilmoitettava siitä
          kirjallisesti hallitukselle niin hyvissä ajoin, että asia voidaan
          sisällyttää kokouskutsuun.
        </p>
      </>
    ),
  },
  {
    title: '11. Sääntöjen muuttaminen ja yhdistyksen purkaminen',
    content: (
      <>
        <p>
          Päätös sääntöjen muuttamisesta ja yhdistyksen purkamisesta on tehtävä
          yhdistyksen kokouksessa vähintään kolmen neljäsosan (3/4) enemmistöllä
          annetuista äänistä. Kokouskutsussa on mainittava sääntöjen
          muuttamisesta tai yhdistyksen purkamisesta. Yhdistyksen purkautuessa
          annetaan yhdistyksen varat kokouksen päättämään
          hyväntekeväisyyskohteeseen. Yhdistyksen tullessa lakkautetuksi
          käytetään sen varat samaan tarkoitukseen.
        </p>
      </>
    ),
  },
]
