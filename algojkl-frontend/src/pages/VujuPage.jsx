import StarterImage from '../common/StarterImage'
import starterDesktop from '../images/Page_starters/vujut.jpg'
import starterMobile from '../images/mobiili/vujut_m.jpg'
/*import { vujuContent } from '../PageData/vujuData'*/
/**
 *  Vujut-sivu
 * Tämä komponentti renderöi Vujut-sivun sisällön.
 * Sivulla näytetään:
 * 1. Starter-kuva (desktop ja mobiili)
 * 2. Vuosijuhlaetiketti-osio, joka kertoo vuosijuhlien käytänteistä, pukeutumisesta,
 *    arvokkaasta juhlakäyttäytymisestä, juhlan kulusta sekä akateemisesta silliaamiaisesta.
 * refraktorointi kesken
 */
const Vujut = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Events"
      />
      <div className="vuju-container">
        <h1>Vuosijuhlaetiketti</h1>
        <p>
          Algo täyttää virallisesti vuosia heinäkuun 4. päivä, mutta sen
          vuosijuhlaa juhlitaan perinteisesti syksyn puolella. Vuosijuhla on
          kiltamme arvokkain akateeminen tilaisuus, jossa käyttäydytään sen
          mukaisesti. Juhlaan ovat tervetulleita niin Algon jäsenet,
          kutsuvieraat kuin avecitkin. Tämä etiketti tutustuttaa juhlavieraat
          vuosijuhlien käytänteisiin, jotta itse juhlassa ei tarvitsisi
          hermoilla käytännön asioista.
        </p>
        <h2>Pukeutuminen</h2>
        <p>
          Vuosijuhlilla pukeudutaan joko frakkiin, tummaan pukuun tai
          iltapukuun.
          <br />
          <br />
          <strong>Frakkiin</strong> kuuluu musta hännystakki ja housut,
          valkoinen frakkiliivi, valkoinen frakkipaita helmiäisnapeilla sekä
          valkoinen solmuke. Frakin kanssa käytetään mustia sukkia ja mustia
          kiiltonahkakenkiä. Rannekelloa ei suositella käytettäväksi frakin
          kanssa. Smokki tai muut variaatiot eivät ole etiketin mukainen
          vaihtoehto frakille.
          <br />
          <br />
          <strong>Tumma puku</strong> tarkoittaa tumman harmaata, tumman sinistä
          tai mustaa pukua. Puku voi olla yksivärinen tai hillitysti
          raidallinen, mutta ei liituraitaa. Tumman puvun kanssa käytetään
          valkoista tai vaaleanpunaista paitaa (muutkin vaaleat värit käyvät
          mainiosti), juhlavaa solmiota tai solmuketta, mustia kenkiä sekä
          tummia ja pitkävartisia sukkia.
          <br />
          <br />
          <strong>Iltapuku</strong> on juhlavasta materiaalista valmistettu
          nilkka- tai lattiapituinen il­ta­- tai juh­la­pu­ku­. Iltapuku voi
          olla avonainen, umpinainen, olkaimeton tai pitkähihainen. Iltapuvun
          kanssa voi käyttää myös har­ti­a­hui­vi­a, kyynärmittaisia hansikkaita
          tai ol­kai­me­ton­ta lauk­ku­a. Ruokailun aikana ei ole soveliasta
          laskea käsilaukkua pöydälle tai pitää hanskoja käsissään.
          <br />
          <br />
          Pukeutumista voi täydentää akateemisilla ansiomerkeillä ja
          juhlanauhalla. Juhlanauha- ja merkkiohjesääntöjen pykälän 10 mukaan:
          <br />
          <br />
          <i>
            “Juhlanauhaa sekä kunnia-, ansio- ja hallitusmerkkiä käytetään vain
            juhlapuvussa akateemisissa juhlatilaisuuksissa.
            <br />
            <br />
            Juhlanauhaa kannetaan siten, että se kulkee oikealta olkapäältä
            rinnan yli vasemmalle lantiolle, vaaleanpunainen väri yläpuolella.
            Juhlanauhaa kannetaan juhlapuvussa liivin alla ja tummassa puvussa
            liivin ja solmion päällä. Mekon kanssa juhlanauhaa voi kantaa
            taiteltuna ruusukkeena vasemmalla puolella rintaa, vaaleanpunainen
            väri päällimmäisenä, tai kuten juhlapuvussa. Juhlanauha ei saa
            koskettaa paljasta ihoa.
            <br />
            <br />
            Algo ry:n omissa tilaisuuksissa juhlanauhaa kannetaan ylimpänä, jos
            kantajalla on myös muiden organisaatioiden nauhoja. Muissa
            tilaisuuksissa noudatetaan soveltuvia ohjesääntöjä.
            <br />
            <br />
            Kunnia-, ansio- ja hallitusmerkkejä voi käyttää samanaikaisesti
            juhlanauhan kanssa, eikä niiden asettelulla ole väliä.”
          </i>
          <br />
        </p>
        <h2>Arvokas juhlakäyttäytyminen</h2>
        <p>
          Vuosijuhla on ennen kaikkea akateeminen pöytäjuhla, jossa kunnolliset
          pöytätavat ovat vaatimus. Juhlaan on tehty istumajärjestys eli
          jokaisen paikka on merkitty nimikortilla. Jos omassa pöydässä on
          ihmisiä, joita ei tunne entuudestaan, on kohteliasta aluksi
          esittäytyä, ja pitää puhetta yllä myös muiden kuin tuttujen kanssa
          koko tilaisuuden ajan.
          <br />
          <br />
          Juhlan kulusta vastaavat seremoniamestarit, joita tulee kuunnella.
          Myös puheiden, laulujen ja muun ohjelman aikana on oltava hiljaa ja
          syömättä. Seurustelulle on varattu paljon aikaa, joten puhumaan kyllä
          ehtii. Kunnianosoitukset puheille ja muulle ohjelmalle esitetään
          taputtamalla käsiä.
          <br />
          <br />
          Skoolatessa eli lasia kohotettaessa katsotaan ensin pöydän toisella
          puolella vasemmalla istuvaa, sitten pöydän toisella puolella oikealla
          istuvaa ja viimeiseksi itseään vastapäätä istuvaa henkilöä.
          Kohotettaessa lasit eivät kosketa toisiaan vaan kilistelyn korvaa
          pieni nyökkäys.
          <br />
          <br />
          Tauoille saa poistua vain ohjelmaan merkittyjen taukojen aikana. Jos
          omalta paikalta poistumiseen tulee kuitenkin pakottava tarve muulloin,
          on poistuminen tehtävä huomiota herättämättä ja pöytäseurueelle
          pahoitellen eikä missään nimessä puheiden tai esitysten aikana.
          <br />
          <br />
          Juhlasta ei ole soveliasta myöhästyä, joten saavuthan ajoissa
          juhlapaikalle.
        </p>
        <h2>Juhlan kulku</h2>
        <p>
          Juhla alkaa perinteisesti cocktail-tilaisuudella eli kokkareilla.
          Tähän tilaisuuteen osallistuvat vain kutsuvieraat eli vieraat, jotka
          ovat saaneet erillisen kutsun juhliin. Tällaisia vieraita ovat muun
          muassa killan kunniajäsenet, opettajat tai muiden kiltojen tai
          ainejärjestöjen edustajat. Kokkareilla kutsuvieraat pitävät
          vuorotellen onnittelupuheita vuosia täyttävälle Algolle ja antavat
          lahjoja. Tarjolla on yleensä kuohuvaa ja pientä purtavaa. Tilaisuus on
          yleensä seisomatilaisuus, ja se kestää noin pari tuntia.
          <br />
          <br />
          Cocktail-tilaisuudesta siirrytään suoraan pääjuhlaan. Pääjuhlaan
          osallistuvat kaikki, jotka ovat ostaneet lipun vuosijuhliin. Juhla
          alkaa, kun lippuairue tuo Suomen lipun juhlasaliin. Tällöin
          juhlavieraat nousevat seisomaan ja odottavat hiljaisuudessa lipun
          paikalleen viemistä, jonka jälkeen lauletaan yhteisesti Finlandia.
          Tässä vaiheessa seremoniamestarit esittäytyvät ja jakavat yleisiä
          ohjeita. Sen jälkeen lauletaan Helan Går, jonka yhteydessä nautitaan
          alkushotti. Laulujen jälkeen raikuvat tervetuliaissanat ja juhla voi
          alkaa.
          <br />
          <br />
          Alkupuheiden jälkeen aloitetaan seurustelu ja laulaminen. Lauluja ja
          puheenvuoroja voi toivoa kilistämällä omaa lasiaan. Yleensä laulut
          toivotaan omalle istumapaikalle jaetusta lauluvihosta. Pääruoan ajaksi
          julistetaan ruokarauha, jonka aikana lauluja saa kyllä toivoa, mutta
          poikkeuksellisesti saa myös syödä laulujen aikana. Ei ole kuitenkaan
          soveliasta laulaa ruoka suussa.
          <br />
          <br />
          Ruokailua ennen ja sen jälkeen on kaikennäköistä ohjelmaa: puheita,
          palkitsemisia, esityksiä, laulamista. Juhlan loppupuolella syödään
          jälkiruokaa, jonka kanssa nautitaan kahvia yleensä avecin kera. Tässä
          yhteydessä avec voi tarkoittaa esim. konjakkia tai likööriä.
          Jälkiruoan aikana kohotetaan Jallu-shotti, ja lauletaan Jallutähden
          alla. Juhla päättyy puheenjohtajan sanoihin ja Suomen lipun
          uloskantoon.
          <br />
          <br />
          Cocktail-tilaisuudessa ja pääjuhlassa on yleensä kuvaaja, joka ottaa
          kuvia niin kuvausseinän edessä kuin itse juhlassakin. Kuvat jaetaan
          vieraille jälkikäteen juhlien järjestäjien valitsemalla tavalla.
          <br />
          <br />
          Pääjuhlan loppuessa meno ei lannistu, vaan juhlimista jatketaan
          virallisilla jatkoilla. Vuosijuhlilla saattaa olla tarjolla
          drinkkilippuja ja narikka on yleensä etukäteen maksettu, mikä
          sujuvoittaa jatkoille siirtymistä. Keskiyöllä juhlaväki kokoontuu
          pimennettyyn tilaan laulamaan teekkarihymnin.
        </p>
        <h2>Akateeminen silliaamiainen</h2>
        <p>
          Vuosijuhlista palautuminen tapahtuu silliaamiaisella eli silliksellä,
          joka järjestetään vuosijuhlien jälkeisenä päivänä. Se järjestetään
          jossain rennossa paikassa, kuten esimerkiksi Opinkiven saunalla.
          Silliksellä on yleensä tarjolla rasvaista ruokaa ja virvokkeita, ja
          pukukoodina toimivat haalarit.
        </p>
      </div>
    </div>
  )
}

export default Vujut
