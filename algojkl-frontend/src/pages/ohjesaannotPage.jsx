import React from "react";
import StarterImage from "../common/StarterImage"
import starterDesktop from "../images/Page_starters/9.jpg"
import starterMobile from "../images/mobiili/11.png"
import JuhlanauhaMerkit from "../ohjesäännöt/JuhlanauhaMerkit"
import Haalarietiketti from "../ohjesäännöt/Haalarietiketti"
import Teekkari from "../ohjesäännöt/Teekkari"
const Merkit = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Kerhotoiminta"
      />
      <div className="Lakki-container">
        <JuhlanauhaMerkit />
        <Haalarietiketti />
        <Teekkari />
      </div>
    </div>
  )
}

export default Merkit
