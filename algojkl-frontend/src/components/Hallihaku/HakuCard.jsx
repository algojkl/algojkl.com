import React from 'react'

const HakuCard = ({ haku }) => (
  <div className="haku-card">
    {haku.hakuKuva?.fields?.file?.url && (
      <img
        src={haku.hakuKuva.fields.file.url}
        alt={haku.nimi}
        className="haku-image"
      />
    )}
    <div className="haku-info">
      <h3>Nimi: {haku.nimi}</h3>
      <p>
        Haettava(t) pesti(t): <strong>{haku.pesti}</strong>
      </p>
      <p style={{ whiteSpace: 'pre-wrap' }}>{haku.hakuteksti}</p>
    </div>
  </div>
)

export default HakuCard
