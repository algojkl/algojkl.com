import { useQuery } from '@tanstack/react-query'
import client from '../components/contentful'

const fetchContentfulData = async () => {
  const [
    eventsRes,
    collabsRes,
    diamondCollabsRes,
    hallitusRes,
    tutorRes,
    pytkirjatRes,
    jasenedutRes,
    hiringRes,
    hallitushakuRes,
    toimaritRes,
  ] = await Promise.all([
    client.getEntries({ content_type: 'events' }),
    client.getEntries({ content_type: 'collabs' }),
    client.getEntries({ content_type: 'diamondCollab' }),
    client.getEntries({ content_type: 'hallitus' }),
    client.getEntries({ content_type: 'tutorit' }),
    client.getEntries({ content_type: 'pytkirjat' }),
    client.getEntries({ content_type: 'jedut' }),
    client.getEntries({ content_type: 'hiring' }),
    client.getEntries({ content_type: 'hallitushaku' }),
    client.getEntries({ content_type: 'toimarit' }),
  ])

  return {
    events: eventsRes.items.map((item) => ({
      id: item.fields.eventId || null,
      title: item.fields.eventTitle || null,
      description: item.fields.eventDesc || null,
      date: item.fields.eventDateTime || null,
      picture: item.fields.eventPicture || null,
      url: item.fields.eventUrl || null,
    })),
    collabs: collabsRes.items.map((item) => ({
      id: item.fields.collabId || null,
      logo: item.fields.collabLogo || null,
      url: item.fields.collabUrl || null,
    })),
    diamondCollabs: diamondCollabsRes.items.map((item) => ({
      id: item.fields.diamondCollabId || null,
      logo: item.fields.diamondCollabLogo || null,
      url: item.fields.diamondCollabUrl || null,
    })),
    hallitus: hallitusRes.items.map((item) => ({
      pesti: item.fields.pesti || null,
      lispesti: item.fields.lispesti || null,
      telegram: item.fields.telegram || null,
      sahkoposti: item.fields.sahkoposti || null,
      nimi: item.fields.nimi || null,
      kuva: item.fields.kuva.fields.file.url || null,
      id: item.fields.halliId || null,
    })),
    tutorit: tutorRes.items.map((item) => ({
      tutorKuva: item.fields.tutorKuva.fields.file.url || null,
      nimi: item.fields.nimi || null,
      esittelyteksti: item.fields.esittelyteksti || null,
      kieli: item.fields.kieli || null,
    })),
    pytkirjat: pytkirjatRes.items.map((item) => ({
      id: item.fields.kirjaId || null,
      pytkirjaTittle: item.fields.pytkirjaTittle || null,
      pytkirja: `https:${item.fields.pytkirja.fields.file.url}`,
    })),
    jasenedut: jasenedutRes.items.map((item) => ({
      id: item.fields.jedutId || null,
      otsikkofirma: item.fields.otsikkofirma || null,
      kuvaus: item.fields.jedutDesc || null,
      kuvaUrl: item.fields.jedutKuva?.fields?.file?.url || null,
    })),
    hiring: hiringRes.items.map((item) => ({
      id: item.fields.id || null,
      otsikko: item.fields.otsikko || null,
      rekryInfo: item.fields.rekryInfo || null,
      rekryKuva: item.fields.rekryKuva?.fields?.file?.url || null,
      rekrytiedosto: item.fields.rekrytiedosto?.fields?.file?.url || null,
    })),
    hallitushaku: hallitushakuRes.items.map((item) => ({
      hakuId: item.fields.hakuId || null,
      nimi: item.fields.nimi || null,
      pesti: item.fields.pesti || null,
      hakuteksti: item.fields.hakuteksti || null,
      hakuKuva: item.fields.hakuKuva || null,
    })),
    toimarit: toimaritRes.items.map((item) => ({
      id: item.fields.id || null,
      nimi: item.fields.nimi || null,
      pesti: item.fields.pesti || null,
      telegram: item.fields.telegram || null,
      kuva: item.fields.kuva?.fields?.file?.url || null,
    })),
  }
}

export const useContentfulData = () => {
  return useQuery({
    queryKey: ['contentfulData'],
    queryFn: fetchContentfulData,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60 * 24,
  })
}
