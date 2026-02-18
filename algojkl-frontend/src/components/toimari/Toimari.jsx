import React from 'react'

function Toimari({ member }) {
  return (
    <div className="toimari-card">
      <div className="toimari-image">
        {member.kuva ? (
          <img src={member.kuva} alt={member.nimi} />
        ) : (
          <div className="placeholder-image">Ei kuvaa</div>
        )}
      </div>
      <div className="toimari-info">
        <h3>{member.nimi}</h3>
        <p>{member.pesti}</p>
        <p>Telegram: {member.telegram}</p>
      </div>
    </div>
  )
}

export default Toimari
