/**
 * navbarLinks.js
 *
 * Sisältää yhteiset dropdown-linkit, joita käytetään sekä
 * desktop- että mobiiliversioissa Navbarissa.
 */

const dropdownLinks = [
  {
    section: 'TOIMIHENKILÖT',
    items: [
      { label: 'HALLITUS', path: '/hallitus' },
      { label: 'AKTIIVIT', path: '/aktiivit' },
    ],
  },
  {
    section: 'VIRALLISET DOKUMENTIT',
    items: [
      { label: 'SÄÄNNÖT', path: '/saannot' },
      { label: 'OHJESÄÄNNÖT & ETIKETIT', path: '/ohjesaannot' },
      { label: 'VUOSIJUHLAT', path: '/vujuetiketti' },
      { label: 'REKISTERISELOSTE', path: '/seloste' },
      { label: 'KUNNIAGALLERIA', path: '/kunniagalleria' },
      { label: 'TOIMINNAN PERIAATTEET', path: '/periaatteet' },
    ],
  },
  {
    section: 'JÄSENILLE',
    items: [
      { label: 'JÄSENEDUT', path: '/jasenedut' },
      { label: 'KERHOTOIMINTA', path: '/kerhotoiminta' },
      { label: 'REKRYT', path: '/rekryt' },
      { label: 'YHTEYDENOTTOLOMAKKEET', path: '/lomakkeet' },
      { label: 'KANSAINVÄLISYYS', path: '/kansainvalisyys' },
      { label: 'KATTILAN KAHVIKAMERA', path: 'https://kattila.linkkijkl.fi/' },
      { label: 'SALAISUUDET', path: '/salaisuudet' },
      { label: 'LAULUKIRJA', path: 'https://ritmi.algojkl.com/' },
    ],
  },
]

export default dropdownLinks
