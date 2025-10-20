import React from 'react'
import { useContentfulData } from '../services/useContentfulData'

const HallitusHaku = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan hakemuksia...</p>
  if (error) return <p>Virhe ladatessa hakemuksia</p>

  const hallitushaku = data?.hallitushaku || []

  const puheenjohtajisto = hallitushaku.filter(
    (haku) =>
      haku.pesti?.toLowerCase() === 'puheenjohtaja' ||
      haku.pesti?.toLowerCase() === 'varapuheenjohtaja'
  )

  const muutPestit = hallitushaku.filter(
    (haku) =>
      haku.pesti?.toLowerCase() !== 'puheenjohtaja' &&
      haku.pesti?.toLowerCase() !== 'varapuheenjohtaja'
  )

  const renderHakemukset = (list) => (
    <div className="haku-grid">
      {list.map((haku) => (
        <div key={haku.hakuId} className="haku-card">
          {haku.hakuKuva?.fields?.file?.url && (
            <img
              src={haku.hakuKuva.fields.file.url}
              alt={haku.nimi}
              className="haku-image"
            />
          )}
          <div className="haku-info">
            <h3>Nimi: {haku.nimi}</h3>
            <p>Haettava pesti: <strong>{haku.pesti}</strong></p>
            <p>Hakuteksti: {haku.hakuteksti}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="hallihaku-container">
      <h2>Puheenjohtajisto</h2>
      {puheenjohtajisto.length > 0
        ? renderHakemukset(puheenjohtajisto)
        : <p>Ei vielä hakemuksia puheenjohtajistoon.</p>}
      <br />
      <h2>Muut hallituspestit</h2>
      {muutPestit.length > 0
        ? renderHakemukset(muutPestit)
        : <p>Ei vielä hakemuksia muihin hallituspesteihin.</p>}
    <br />
    </div>
  )
}

export default HallitusHaku
