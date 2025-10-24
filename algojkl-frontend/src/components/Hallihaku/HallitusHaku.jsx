import React from 'react'
import { useHallitusHaku } from './useHallitusHaku'
import HakuList from './HakuList'

const HallitusHaku = () => {
  const { isLoading, error, puheenjohtajisto, muutPestit } = useHallitusHaku()

  if (isLoading) return <p>Ladataan hakemuksia...</p>
  if (error) return <p>Virhe ladatessa hakemuksia</p>

  return (
    <div className="hallihaku-container">
      <h2>Puheenjohtajisto</h2>
      <HakuList list={puheenjohtajisto} emptyMessage="Ei vielä hakemuksia puheenjohtajistoon." /> <br />

      <h2>Muut hallituspestit</h2>
      <HakuList list={muutPestit} emptyMessage="Ei vielä hakemuksia muihin hallituspesteihin." /> <br />
    </div>
  )
}

export default HallitusHaku
