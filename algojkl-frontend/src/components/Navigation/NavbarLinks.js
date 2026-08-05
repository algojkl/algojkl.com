/**
 * navbarLinks.js
 *
 * Sisältää yhteiset dropdown-linkit, joita käytetään sekä
 * desktop- että mobiiliversioissa Navbarissa.
 */

const getDropdownLinks = (t) => [
  {
    section: t('nav.sections.staff'),
    items: [
      { label: t('nav.links.board'), path: '/hallitus' },
      { label: t('nav.links.active'), path: '/aktiivit' },
    ],
  },
  {
    section: t('nav.sections.officialDocuments'),
    items: [
      { label: t('nav.links.rules'), path: '/saannot' },
      { label: t('nav.links.guidelines'), path: '/ohjesaannot' },
      { label: t('nav.links.vuju'), path: '/vujuetiketti' },
      { label: t('nav.links.privacy'), path: '/seloste' },
      { label: t('nav.links.honours'), path: '/kunniagalleria' },
      { label: t('nav.links.principles'), path: '/periaatteet' },
    ],
  },
  {
    section: t('nav.sections.members'),
    items: [
      { label: t('nav.links.benefits'), path: '/jasenedut' },
      { label: t('nav.links.clubs'), path: '/kerhotoiminta' },
      { label: t('nav.links.recruitment'), path: '/rekryt' },
      { label: t('nav.links.forms'), path: '/lomakkeet' },
      { label: t('nav.links.international'), path: '/kansainvalisyys' },
      { label: t('nav.links.kattila'), path: 'https://kattila.linkkijkl.fi/' },
      { label: t('nav.links.secrets'), path: '/salaisuudet' },
      { label: t('nav.links.songbook'), path: 'https://ritmi.algojkl.com/' },
    ],
  },
]

export default getDropdownLinks
