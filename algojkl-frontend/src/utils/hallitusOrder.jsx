export const hallitusOrder = {
  'Puheenjohtaja': 1,
  'Varapuheenjohtaja': 2,
  'Rahastonhoitaja': 3,
  'Sihteeri': 4,
  'Koulutuspoliittinen vastaava': 5,
  'Sosiaalipolittinen vastaava': 6,
}

export const hallitusRoleTranslationKeys = {
  'Puheenjohtaja': 'chair',
  'Varapuheenjohtaja': 'viceChair',
  'Rahastonhoitaja': 'treasurer',
  'Sihteeri': 'secretary',
  'Koulutuspoliittinen vastaava':
    'educationPolicy',
  'Sosiaalipolittinen vastaava':
    'socialAffairs',
  Sopo: 'socialAffairs',
  Kopo: 'educationPolicy',
  Yritysvastaava: 'corporateRelations',
  Yrityssuhdevastaava: 'corporateRelations',
  Tapahtumavastaava: 'events',
  'Tapahtumavastaava(t)': 'events',
  Tapahtumavastaavat: 'events',
  'Projektivastaava(t)': 'projects',
  Projektivastaava: 'projects',
  Kerhovastaava: 'clubs',
  Viestintävastaava: 'communications',
  Tiedottaja: 'communications',
  Ulkosuhdevastaava: 'externalRelations',
  Ulkosuhteet: 'externalRelations',
  KVvastaava: 'internationalRelations',
  'KV-vastaava': 'internationalRelations',
  'Kv-vastaava': 'internationalRelations',
  Kansainvälisyysvastaava: 'internationalRelations',
  Jäsenrekisteri: 'memberRegistry',
  Jäsenrekistri: 'memberRegistry',
  Jäsenrekisterivastaava: 'memberRegistry',
  Nettisivut: 'websites',
  Nettisivuvastaava: 'websites',
  'Tutor- ja fuksivastaava': 'tutorsAndFreshmen',
  'Tutori- ja fuksivastaava': 'tutorsAndFreshmen',
  'Tutor- ja fuksi vastaava': 'tutorsAndFreshmen',
  'Hyvinvointivastaava ja Sopo': 'wellbeing',
  'Fuksivastaava & Sopo': 'freshmenAndSocialAffairs',
  Fuksivastaava: 'freshmen',
  'Tapahtumavastaava(t) ja somevastaava(t)': 'eventsAndSocialMedia',
  'Tapahtuma- ja somevastaava(t)': 'eventsAndSocialMedia',
  'Hyvinvointivastaava ja sosiaalipoliittinen vastaava':
    'wellbeingAndSocialAffairs',
  Excursiovastaava: 'excursions',
  somevastaava: 'socialMedia',
  'somevastaava(t)': 'socialMedia',
}

const normalizeHallitusRole = (role) =>
  role
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('fi-FI')
    .replace(/[()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const normalizedRoleTranslationKeys = new Map(
  Object.entries(hallitusRoleTranslationKeys).map(([role, key]) => [
    normalizeHallitusRole(role),
    key,
  ])
)

export const getHallitusRoleTranslationKey = (role) =>
  typeof role === 'string'
    ? normalizedRoleTranslationKeys.get(normalizeHallitusRole(role))
    : undefined
