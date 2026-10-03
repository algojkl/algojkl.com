import React from 'react'
import { useContentfulData } from '../services/useContentfulData'

const CollabCards = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Loading collaborations...</p>
  if (error) return <p>Virhe ladattaessa yhteistyökumppaneita.</p>

  return (
    <div className="collab-logos-container">
      {data.collabs.map((collab) => (
        <a
          key={collab.id}
          href={collab.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {collab.logo?.fields?.file?.url && (
            <img
              src={collab.logo.fields.file.url}
              alt={`Logo of ${collab.url}`}
              className="collab-logo"
              loading="lazy"
              decoding="async"
            />
          )}
        </a>
      ))}
    </div>
  )
}

export default CollabCards
