import React from 'react'
import FooterNavSection from './FooterNavSection'
/** 
 * FooterNav
 * 
 * Tämä komponentti vastaa footerin navigaatiosta.
 * Se renderöi useita FooterNavSection-komponentteja, 
 * jotka sisältävät otsikon ja linkit eri osioille.
 * 
 * Footerin osiot:
 * 1. NAVIGAATIO – pääsivujen linkit
 * 2. TOIMIHENKILÖT – hallitus ja aktiiviset jäsenet
 * 3. VIRALLISET DOKUMENTIT – säännöt ja ohjesäännöt
 * 4. JÄSENILLE – jäsenetuun ja kerhotoimintaan liittyvät linkit
 * 
 * Mikäli halutaan lisätä linkkejä, niin lisää vain uusia to ja label osioita samaan tyyliin oikean titlen alle.
 * 
 */
const FooterNav = () => (
  <nav className="footer-nav">
    <ul>
      <FooterNavSection
        title="NAVIGAATIO"
        links={[
          { to: '/', label: 'ETUSIVU' },
          { to: '/tapahtumat', label: 'TAPAHTUMAT' },
          { to: '/yhteistyot', label: 'YHTEISTYÖT' },
          { to: '/fuksit', label: 'UUDET OPISKELIJAT' },
          { to: '/hakijalle', label: 'HAKIJAT' },
        ]}
      />
      </ul>
      <ul>
      <FooterNavSection
        title="TOIMIHENKILÖT"
        links={[
          { to: '/hallitus', label: 'HALLITUS' },
          { to: '/aktiivit', label: 'AKTIIVIT' },
        ]}
      />
      </ul>
      <ul>
      <FooterNavSection
        title="VIRALLISET DOKUMENTIT"
        links={[
          { to: '/saannot', label: 'SÄÄNNÖT' },
          { to: '/ohjesaannot', label: 'OHJESÄÄNNÖT' },
          { to: '/seloste', label: 'REKISTERISELOSTE' },
          { to: '/dokumentit', label: 'DOKUMENTIT' },
          { to: '/kunniagalleria', label: 'KUNNIAGALLERIA' },
          { to: '/periaatteet', label: 'TOIMINNAN PERIAATTEET' },
        ]}
      />
      </ul>
      <ul>
      <FooterNavSection
        title="JÄSENILLE"
        links={[
          { to: '/jasenedut', label: 'JÄSENEDUT' },
          { to: '/kerhotoiminta', label: 'KERHOTOIMINTA' },
          { to: '/rekryt', label: 'REKRYT' },
          { to: '/lomakkeet', label: 'LOMAKKEET' },
          { to: '/kansainvalisyys', label: 'KANSAINVÄLISYYS' },
          { to: 'https://kattila.linkkijkl.fi/', label: 'KATTILAN KAHVIKAMERA' },
          { to: '/salaisuudet', label: 'SALAISUUDET' },
          { to: 'https://ritmi.algojkl.com/', label: 'LAULUKIRJA' },
        ]}
      />
    </ul>
  </nav>
)

export default FooterNav
