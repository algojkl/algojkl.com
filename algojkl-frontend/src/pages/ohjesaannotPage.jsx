import React from 'react'
import starterDesktop from '../images/Page_starters/9.jpg'
import starterMobile from '../images/mobiili/11.png'
import lakki from '../images/lakki.jpg'
import useDevice from '../hooks/useDevice'

const Merkit = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop
  return (
    <div>
      <div>
        <img src={starterImage} alt="ohjesäännöt_starter" className="starter" />
        <div className="Lakki-container">
          <p>
            Tältä sivulta löydät tietoa teekkarilakista, haalarietiketistä sekä
            juhlanauha- ja merkkiohjesäännöstä.
          </p>
          <h1>Juhlanauha- ja merkkiohjesääntö</h1>
          <p>
            1§ Algo ry:llä on kunnia-, ansio-, hallitus- ja vuoden algolainen
            -merkki sekä juhlanauha, joista jäljempänä lähemmin määrätään.
            Merkkien mallikappaleet säilytetään yhdistyksen arkistossa, ja
            myönnetyistä sekä ohjesäännön mukaan jaetuista merkeistä, niiden
            myöntämisperusteista ja päivämääristä pidetään luetteloa.
            <br />
            <br />
            2§ Merkkien antamisesta päättää yhdistyksen hallitus. Hallitus voi
            jakaa useamman merkin kuin mitä tämän ohjesäännön enimmäismäärä
            sallii, mikäli hallitus päättää siitä yksimielisesti. Ellei
            päätösehdotusta hyväksytä, ei asian käsittelystä tehdä merkintää
            pöytäkirjaan.
            <br />
            <br />
            3§ Kunniajäsenekseen yhdistys voi hallituksen esityksestä kutsua
            yhdistyksen toimintaa ansiokkaasti tukeneen henkilön, joka on
            antanut siihen suostumuksensa. Kunniajäsenelle myönnetään
            kunniakirja, joka on varustettu istuvan puheenjohtajan
            nimikirjoituksella, ja hänet kutsutaan yhdistyksen vuosijuhliin joka
            vuosi, mikäli sellaiset järjestetään. Kunniajäsenyys on elinikäinen.
            <br />
            <br />
            4§ Kunniamerkki voidaan antaa henkilölle, joka pitkäaikaisella
            toiminnallaan tai erittäin merkittävällä teollaan on huomattavasti
            edistänyt yhdistyksen toimintaa. Kunniamerkki myönnetään myös
            jokaiselle kunniajäsenelle joko kunniajäseneksi myöntämisen
            yhteydessä tai takautuvasti. Kunniamerkkejä voidaan vuosittain
            myöntää enintään kolme (3) kappaletta. Kunniamerkki on väriltään
            kultainen ja kooltaan xx mm.
            <br />
            <br />
            5§ Ansiomerkki voidaan antaa henkilölle, joka on viimeisen vuoden
            aikana edistänyt ansiokkaasti yhdistyksen toimintaa. Ansiomerkkejä
            voidaan vuosittain myöntää enintään viisi (5) kappaletta.
            Ansiomerkki on väriltään hopeinen ja kooltaan xx mm.
            <br />
            <br />
            6§ Hallitusmerkki myönnetään yhdistyksen istuvan hallituksen
            jäsenille. Hallitusmerkki voidaan myöntää myös yhdistyksen
            hallituksen entiselle jäsenelle. Hallitusmerkki on väriltään
            hopeinen ja kooltaan xx mm.
            <br />
            <br />
            7§ Vuoden algolainen -merkki myönnetään Algo ry:n jäsenelle, joka on
            osoittanut merkittävää kiinnostusta yhdistyksen toimintaa kohtaan ja
            edistänyt jäsenten välistä yhteishenkeä. Jäsen valitaan vuosittain
            järjestettävällä äänestyksellä, jossa jokaisella Algo ry:n jäsenellä
            on äänioikeus. Äänestyksestä tiedotetaan yhdistyksen virallisilla
            viestintäkanavilla viimeistään 2 viikkoa ennen
            merkinjakotilaisuutta. Yksittäinen henkilö voi saada merkin vain
            kerran. Vuoden algolainen -merkki on haalarimerkki, joka on
            halkaisijaltaan 80 mm ja väriltään violetti keltaisella pokaalilla.
            <br />
            <br />
            8§ Myönnetyt merkit ja kunniakirjat luovutetaan saajilleen
            seuraavissa yhdistyksen vuosijuhlissa, vuosijuhlasitseillä tai
            muussa hallituksen sopivaksi katsomassa arvokkaassa tilaisuudessa.
            Kaikkien Algo ry:n myöntämien merkkien käyttöoikeus on elinikäinen.
            <br />
            <br />
            9§ Juhlanauha on 35 mm leveä ja väriltään vaaleapuna-valkoinen.
            Jokaisella yhdistyksen varsinaisella jäsenellä on nauhan
            käyttöoikeus, ja nauhan voi ostaa suoraan yhdistykseltä. Juhlanauha
            myönnetään ansiomerkin mukana ilmaiseksi, mikäli ansioituvalla
            henkilöllä ei sellaista vielä ole. Juhlanauhan käyttöoikeus säilyy
            yhdistyksestä eroamisen jälkeen.
            <br />
            <br />
            10§ Juhlanauhaa sekä kunnia-, ansio- ja hallitusmerkkiä käytetään
            vain juhlapuvussa akateemisissa juhlatilaisuuksissa.
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
            juhlanauhan kanssa, eikä niiden asettelulla ole väliä.
            <br />
            <br />
            11§ Tämä ohjesääntö on hyväksytty yhdistyksen kokouksessa 26.5.2023.
            Se on voimassa toistaiseksi. Tämän ohjesäännön muuttamisesta päättää
            yhdistyksen kokous ehdottomalla äänienemmistöllä.
          </p>

          <img
            src={lakki}
            alt="Jyväskylän 8-kulmainen teekkarilakki"
            className="lakki"
          />
          <h1>Teekkarilakki</h1>
          <p>
            Jyväskylän teekkarilakki on kahdeksankulmainen, Jyväskylän
            kävelykadun Kompassin muodon mukaan. Lakin sisäpuoli on Jyväskylän
            yliopiston värien mukainen sini-oranssi. Lakin kokardissa yhdistyy
            Jyväskylä sekä tekniikka, kun kokardista löytyy JYY:n soihtu, jota
            ympäröi tekniikan ratas.
            <br />
            <br />
            Ensimmäisen vuoden diplomi-insinööriopiskelijoista eli fukseista
            tulee teekkareita vappuna, jolloin kasteen jälkeen lakin saa painaa
            päähänsä. Lakin kantoaika alkaa siis vapun kasteesta ja päättyy
            syyskuun viimeisenä päivänä pidettäviin lakinlaskijaisiin.
            <br />
            <br />
            Kaikki Jyväskylän yliopiston teekkariopiskelijat ovat oikeutettuja
            lakin ostoon riippumatta siitä, ovatko he Algo ry:n jäseniä vai
            eivät. Algo ry kuitenkin tilaa lakit ja voit ostaa sen kide.appin
            kautta, kun tilaus aukeaa. Tilauksen aukeamisesta tiedotetaan
            kaikille Jyväskylän yliopiston tekniikan opiskelijoille.
            <br />
            <br />
            <a href="https://kide.app/community/56059c50-ac32-4678-b061-a6bba8369761">
              Linkki Algo ry:n kide.appiin
            </a>
            <br />
            <br />
            <h3>Lakinkäyttösäännöt</h3>
            <br />
            <strong> 1 § Teekkarilakki </strong>
            <br />
            <br />
            Jyväskylän teekkarilakissa on valkoinen samettinen
            kahdeksankulmainen päällys. Päällyksen keskeltä lähtee musta
            silkkitupsu. Lakin lippa sekä samettireunus ovat mustia ja sen
            hikinauha on joko nahkaa tai nahankaltaista valmistetta. Lakin vuori
            on puoliksi tummansininen ja puoliksi oranssi. Lakin
            samettireunuksen keskellä on Jyväskylän teekkarikokardi, jossa on
            puoliratas sekä ylioppilaskunnan soihtu.
            <br />
            <br />
            <strong>2 § Lakin kantoaika</strong>
            <br />
            <br />
            Teekkarilakin kantoaika on 30.4.–30.9. Teekkarilakin saa painaa
            päähänsä 30.4. samaan aikaan, kun Minna Canthin patsas lakitetaan
            kello 18.00. Lakki lasketaan 30.9. kello 00.00. Muina aikoina
            teekkarilakkia ei saa kantaa ilman erillistä lakkilupaa, ellei
            pysyväisohjesääntö erikseen sitä salli. Lakkilupaa haetaan
            kirjallisesti Algo ry:n hallitukselta vähintään kolmea arkipäivää
            etukäteen. Hakemuksessa on käytävä selväksi, mihin tarkoitukseen
            lakkia aikoo käyttää. Lakkia saa käyttää vain lakkiluvassa
            määrättynä aikana ja siinä mainitussa tilaisuudessa.
            <br />
            <br />
            <strong>3 § Lakin kanto-oikeus</strong>
            <br />
            <br />
            Kanto-oikeus voidaan myöntää opiskelijalle, joka opiskelee
            Jyväskylän yliopistossa tekniikan kandidaatiksi ja/tai
            diplomi-insinööriksi tai tekniikan tohtoriksi. Lakki ojennetaan
            opiskelija- ja teekkariperinteisiin perehtyneelle ensimmäisen vuoden
            tekniikan ylioppilaalle 30.4. yhteisessä teekkarikasteessa, muutoin
            lakki ojennetaan äitienpäivänä. Lakin käyttöoikeus on elinikäinen.
            <br />
            <br />
            <strong>4 § Lakin käyttö</strong>
            <br />
            <br />
            Teekkarilakkia käytetään kunnioittaen ja sitä halventamatta. Lakkia
            ei saa luovuttaa henkilöille, joilla ei ole teekkarilakin
            kanto-oikeutta. Teekkareiden kokoontuessa noustaan keskiyöllä
            korkeimmalle mahdolliselle kohdalle, nostetaan lakki käsi
            ojennettuna pään yläpuolelle ja lauletaan Teekkarihymni pimennetyssä
            tilassa, mikäli mahdollista. Lakin kantoaikana lakki lasketaan
            takaisin päähän teekkarihymnin jälkeen, mutta lakinlaskijaisissa se
            lasketaan olkapäälle.
            <br />
            <br />
            <strong>5 § Pysyväisohjesääntö</strong>
            <br />
            <br />
            Teekkarilakkia saa käyttää ilman erillistä lupaa seuraavissa
            tilaisuuksissa:
            <br />
            <br />
            1) Jyväskylän yliopiston esittelytilaisuuksissa
            <br />
            2) Itsenäisyyspäivän soihtukulkueessa
            <br />
            3) Lippuairueessa toimiville
            <br />
            4) Jäynäkisoissa
            <br />
            5) Titeenien taistoissa
            <br />
            6) TEKin valtakunnallisissa tapahtumissa
            <br />
            7) Tietoteekkariyhdistys ry:n valtakunnallisissa tapahtumissa
            <br />
            8) Jyväskylän yliopiston ylioppilaskunnan (JYY) edustajiston
            kokouksissa
            <br />
            9) Suomen ylioppilaskuntien liiton (SYL) liittokokouksissa
            <br />
            <br />
            <strong>6 § Muut säädökset</strong>
            <br />
            <br />
            Teekkarilakkia ei kuulu korjata itse, ja jokaista reikää ja
            repsottavaa kohtaa vaalitaan merkkinä menneistä vuosista. Jos
            kuitenkin lakin kunto heikkenee liikaa, niin lakki kuuluu hävittää
            olemattomiin kaapinperälle ja hankkia uusi lakki tilalle. Jos
            teekkari osoittaa jatkuvaa piittaamattomuutta teekkarilakkia
            kohtaan, niin häntä voidaan rangaista teekkarikerhon päättämällä
            tavalla.
            <br />
            <br />
            <strong>7 § Ohjesäännön muuttaminen</strong>
            <br />
            <br />
            Tämä ohjesääntö hyväksyttiin ensimmäistä kertaa keväällä 2022.
            Ohjesääntöä voidaan muuttaa tätä ohjesääntöä ylläpitävän yhdistyksen
            kokouksessa.
          </p>

          <h1>Haalarietiketti</h1>
          <br />
          <p>
            <strong>1. Haalareiden käyttö</strong>
            <br />
            Haalareita suositellaan pidettävän ylhäällä eli kokonaan päällä.
            Niitä käytetään kaikissa opiskelijatapahtumissa, ellei tapahtuman
            pukeutumisesta erikseen toisin mainita. Kun haalareita pidetään
            vyötäröllä, selkäosa taitetaan siten, että killan logo näkyy.
            Haalareita saa ja tulee muokata oman näköisiksi.
            <br />
            <br />
            <strong>2. Haalarimerkit</strong>
            <br />
            Haalarimerkit tulee ommella käsin. Niitä ei saa liimata eikä ommella
            ompelukoneella. Lisäksi haalarimerkkejä ei tule ommella sponsoreiden
            logojen päälle, mikäli tilaa on.
            <br />
            <br />
            <strong>3. Haalarien pesu</strong>
            <br />
            Haalareita ei saa pestä pesukoneessa tai muulla vastaavalla tavoin.
            Haalarit pestään siten, että olet itse niiden sisällä, esimerkiksi
            järvessä tai suihkussa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Merkit
