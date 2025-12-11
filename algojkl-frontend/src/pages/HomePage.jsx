import React from 'react'
import Carousel from '../components/Carousel/carousel.jsx'
import EventCards from '../components/Events/EventCards.jsx'
import DiamondLogos from '../components/diamondLogos.jsx'
import { IoDiamondSharp } from 'react-icons/io5'
import Typewriter from '../components/Typewriter.jsx'

/**
 * HomePage-komponentti
 * Tämä komponentti renderöi etusivun sisällön, joka sisältää:
 * 1. Carousel-komponentin pääbannerin ja kuvien selaamiseen.
 * 2. Lyhyen esittelytekstin Algo ry:stä.
 * 3. Tapahtumat-osio, jossa renderöidään tulevat tapahtumat EventCards-komponentilla.
 * 4. Timanttikumppanit-osio, joka sisältää:
 *    - IoDiamondSharp-ikonit otsikon molemmin puolin.
 *    - DiamondLogos-komponentin, joka renderöi timanttikumppaneiden logot.
 */
const HomePage = () => {
  return (
    <div className="container">
      <Carousel />
      <div className="container-info">
        <div>
          <p className="terminal">AlgoWeb$: cat Algo.ry </p>
          <Typewriter
            text="Algo ry on vuonna 2022 perustettu kilta, joka yhdistää Jyväskylän yliopiston tieto- ja ohjelmistotekniikan sekä teknologiajohtamisen opiskelijat."
            prefix="$ "
          />
        </div>
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
