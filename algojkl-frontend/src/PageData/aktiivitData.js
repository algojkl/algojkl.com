import aktiivi_s from '../images/aktiivit_s.png'
import aktiivi_1 from '../images/aktiivit_1.png'
import aktiivi_2 from '../images/aktiivit-2.png'
import aktiivi_3 from '../images/aktiivi_3.png'

export const tiimit = [
  {
    title: 'Tapahtumatiimi',
    tasks: [
      {
        title: 'Tapahtumien suunnittelu ja järjestäminen',
        subTasks: [
          'Sisältää esimerkiksi tapahtumapaikan varaamista ja järjestelemistä sekä yleistä tapahtuman suunnittelua',
        ],
      },
      { title: 'Tapahtumamerkkien suunnittelu' },
      { title: 'Liikuntatapahtumien järjestäminen' },
      { title: 'Tapahtumatiimiä ylläpitää' },
    ],
    responsibles: [{ nimi: 'Tapahtumavastaava(t)', href: '/hallitus' }],
  },
  {
    title: 'Yritysyhteistyötiimi',
    tasks: [
      {
        title: 'Yritysyhteistöiden kontaktointi ja hankinta',
        subTasks: [
          'Myös esimerkiksi pienten kertaluontoisten sponsoreiden hankinta',
        ],
      },
      { title: 'Yritysyhteistyötiimiä ylläpitää' },
    ],
    responsibles: [{ nimi: 'Yrityssuhdevastaava', href: '/hallitus' }],
  },
  {
    title: 'Some- ja viestintätiimi',
    tasks: [
      {
        title: 'Somekanavien ylläpito',
        subTasks: ['Instagram & TikTok'],
      },
      { title: 'Tapahtumien kuvaaminen' },
      { title: 'Killan mainostaminen' },
      { title: 'Killan jäsenviestintä sähköpostitse' },
      {
        title: 'Some- ja viestintätiimiä ylläpitää',
      },
    ],
    responsibles: [{ nimi: 'Viestintävastaava', href: '/hallitus' }],
  },
]

export const muutAktiivit = [
  {
    title: 'Yhdenvertaisuus-vastaava tapahtumissa',
  },
  {
    title: 'Juhlatiimi',
    subTasks: ['Vapun ja vuosijuhlien järjestäminen'],
  },
  {
    title: 'Nettimestari',
    subTasks: [
      'Nettisivujen päivitys ja ylläpito',
      'Alidomainien sovellusten ylläpito',
      'Palvelimen ylläpito',
    ],
  },
  {
    title: 'Lisätietoja eri aktiivitehtävistä voi kysyä hallituksen jäseneltä',
  },
]

export const aktiivimerkit = [aktiivi_3, aktiivi_2, aktiivi_1, aktiivi_s]
