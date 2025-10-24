import React from 'react'
import Carousel from '../components/Carousel/carousel.jsx'
import EventCards from '../components/Events/EventCards.jsx'
import DiamondLogos from '../components/diamondLogos.jsx'
import { IoDiamondSharp } from 'react-icons/io5'

const HomePage = () => {
  return (
    <div className="container">
      <Carousel />
      <div className="container-info">
        <p>
          Algo ry on vuonna 2022 perustettu kilta, joka yhdistää Jyväskylän
          yliopiston tieto- ja ohjelmistotekniikan sekä teknologiajohtamisen
          opiskelijat.
        </p>
      </div>
      <div className="events">
        <h2>TULEVAT TAPAHTUMAT</h2>
        <EventCards />
      </div>

      <div className="diamond-partners">
        <IoDiamondSharp />
        <h2>TIMANTTIKUMPPANIT</h2>
        <IoDiamondSharp />
      </div>
      <DiamondLogos />
    </div>
  )
}

export default HomePage
