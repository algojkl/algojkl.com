import React from 'react'
import Roles from './Pestit'

const PestitDescription = () => (
  <div className="hallitus-pesti-info">
    <h3>Lyhyet kuvaukset hallituspesteistä</h3>
    <p>
      {Roles.map((role, i) => (
        <span key={i}>
          <strong>{role.title}</strong> {role.description}
          <br />
          <br />
        </span>
      ))}
      <i>
        ps: Hallituksessa tehdään yhteistyössä muitakin kuin vain oman vastuualueen tehtäviä.
      </i>
    </p>

    <p>
      Aiemmat hallitukset näet{' '}
      <a href="/entiset-hallitukset">
        <strong>täältä</strong>
      </a>
    </p>
  </div>
)

export default PestitDescription
