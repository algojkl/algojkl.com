import React from 'react'
import { useContentfulData } from '../services/useContentfulData'

const DiamondCollabs = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan timanttikumppaneita.</p>
  if (error) return <p>Virhe ladattaessa timanttikumppaneita.</p>

  return (
    <div className="collab-logos-container">
      {data.diamondCollabs.map((collab) => (
        <div key={collab.id} className="diamond-collab-card">
          <a href={collab.url} target="_blank" rel="noopener noreferrer">
            {collab.logo && (
              <img
                src={collab.logo.fields.file.url}
                alt={`Logo of ${collab.diamondCollabTitle}`}
                className="collab-logo"
                loading="lazy"
                decoding="async"
              />
            )}
          </a>
        </div>
      ))}
    </div>
  )
}

export default DiamondCollabs
