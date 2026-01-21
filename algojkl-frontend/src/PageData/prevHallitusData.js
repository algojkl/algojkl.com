/**
 * PrevHallitusData
 *
 * Tämä tiedosto sisältää aiempien hallitusten tiedot
 * ja jäsenet rooleineen. Jokainen hallitus on objektina:
 * - year: hallitusvuosi
 * - image: hallituksen kuva
 * - members: lista rooleista ja jäsenistä
 */
import halli2025 from '../images/halli_2025.jpg'
import halli2024 from '../images/halli_2024.png'
import halli2023 from '../images/halli_2023.png'
import halli2022 from '../images/halli_2022.png'

export const hallitukset = [
  {
    year: 2025,
    image: halli2025,
    members: [
      { role: 'Puheenjohtaja', name: 'Rene Kangas' },
      { role: 'Varapuheenjohtaja', name: 'Essi Pakkala' },
      { role: 'Sihteeri', name: 'Eelis Kiiskinen' },
      { role: 'Rahastonhoitaja', name: 'Jimi Kortelainen' },
      { role: 'Yrityssuhdevastaava', name: 'Leevi Kopakkala' },
      { role: 'Koulutuspoliittinen vastaava', name: 'Maiju Sipilä' },
      { role: 'Sosiaalipoliittinen vastaava', name: 'Noora Pura' },
      { role: 'Projektivastaava(t)', name: 'Anna Kärkkäinen & Kasper Pelkonen' },
      {
        role: 'Tapahtumavastaava(t)',
        name: 'Sofia Palola & Sofia Teppo',
      },
    ],
  },
  {
    year: 2024,
    image: halli2024,
    members: [
      { role: 'Puheenjohtaja', name: 'Niko Iljin' },
      { role: 'Varapuheenjohtaja', name: 'Laura Lehtiö' },
      { role: 'Sihteeri', name: 'Ilmo Kurki' },
      { role: 'Rahastonhoitaja', name: 'Lauri Mäkynen' },
      { role: 'Yrityssuhdevastaava', name: 'Rene Kangas' },
      { role: 'Koulutuspoliittinen vastaava', name: 'Olli Terävä' },
      { role: 'Sosiaalipoliittinen vastaava', name: 'Sofia Palola' },
      { role: 'Projektivastaava(t)', name: 'Minea Nupponen & Emilia Rantonen' },
      {
        role: 'Tapahtumavastaava(t)',
        name: 'Venla Veijalainen & Reetta Manninen',
      },
      { role: 'Ulkosuhdevastaava', name: 'Veeti Eloranta' },
      { role: 'Viestintävastaava', name: 'Essi Pakkala' },
    ],
  },
  {
    year: 2023,
    image: halli2023,
    members: [
      { role: 'Puheenjohtaja', name: 'Eemil Hukkanen' },
      { role: 'Varapuheenjohtaja', name: 'Annarella Manninen' },
      { role: 'Sihteeri', name: 'Topias Liljegren' },
      { role: 'Rahastonhoitaja', name: 'Anna-Sofia Paavonen' },
      { role: 'Yrityssuhdevastaava', name: 'Juuso Vuorela' },
      { role: 'Hyvinvointivastaava ja Sopo', name: 'Lassi Laitinen' },
      {
        role: 'Tapahtumavastaava(t) ja somevastaava(t)',
        name: 'Minea Nupponen & Emilia Rantonen',
      },
      { role: 'Tiedottaja', name: 'Niko Iljin' },
      { role: 'Excursiovastaava', name: 'Lassi Karjalainen' },
    ],
  },
  {
    year: 2022,
    image: halli2022,
    members: [
      { role: 'Puheenjohtaja', name: 'Eemil Hukkanen' },
      { role: 'Varapuheenjohtaja', name: 'Annarella Manninen' },
      { role: 'Sihteeri', name: 'Topias Liljegren' },
      { role: 'Rahastonhoitaja', name: 'Anna-Sofia Paavonen' },
      { role: 'Yrityssuhdevastaava', name: 'Juuso Vuorela' },
      { role: 'Fuksivastaava & Sopo', name: 'Lassi Laitinen' },
      {
        role: 'Tapahtuma- ja somevastaava(t)',
        name: 'Minea Nupponen & Jesse Haimi',
      },
    ],
  },
]
