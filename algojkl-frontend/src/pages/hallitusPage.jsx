import React from 'react'

import starterDesktop from '../images/Page_starters/6.jpg'
import starterMobile from '../images/mobiili/8.png'

import useDevice from '../hooks/useDevice'
import { useContentfulData } from '../services/useContentfulData'

import HallitusCard from '../components/HallitusCard'
import PestitDescription from '../components/Pestit/PestitDescription'
import { hallitusOrder } from '../utils/hallitusOrder'

const HallitusPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop

  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan...</p>
  if (error) return <p>Virhe ladattaessa tietoja.</p>

  const sortedHallitus = [...data.hallitus].sort((a, b) => {
    const orderA = hallitusOrder[a.pesti] ?? 99
    const orderB = hallitusOrder[b.pesti] ?? 99
    return orderA - orderB
  })

  return (
    <div>
      <img src={starterImage} alt="hallitus_starter_img" className="starter" />
      <div className="hallitus">
        <h1>Algo ry:n hallitus 2025</h1>
        <div className="hallitus-grid">
          {sortedHallitus.map((member) => (
            <HallitusCard key={member.id} member={member} />
          ))}
        </div>
      </div>
      <PestitDescription />
    </div>
  )
}

export default HallitusPage
