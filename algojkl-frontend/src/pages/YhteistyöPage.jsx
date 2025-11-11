import React from 'react'
import CollabCards from '../components/collabLogos'

import starterDesktop from '../images/Page_starters/2.jpg'
import starterMobile from '../images/mobiili/5.png'
import collab_icon from '../images/collab_icon.png'
import event_icon from '../images/event_icon.png'
import ulkosuhteet_icon from '../images/people_icon.png'
import lamppu_icon from '../images/lamppu.png'
import StarterImage from '../common/StarterImage'


const Collab = () => {
  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Yhteistyö"
      />
      <div className="collab-container">
        <h1 className="collab-h1">Hei! Kiinnostaako yhteistyö?</h1>
        <p>
          Algon kanssa voi tehdä yhteistyötä laidasta laitaan! Haluatko
          mainospaikan haalareista tai tukea tapahtumiamme? Vai kiinnostaisiko
          esitellä yritystäsi Jyväskylän DI-opiskelijoille?
        </p>
        <h3>Ota yhteyttä!</h3>
        <br />
        <div className="collab-container-flex">
          <div>
            <img src={collab_icon} alt="yhteistyö icon" />
            <h3>Yritysyhteistyöt</h3>
            <h4>
              <strong>yritys@algojkl.com</strong>
            </h4>
          </div>
          <div>
            <img src={event_icon} alt="event icon" />
            <h3>Tapahtumat</h3>
            <h4>
              <strong>tapahtumat@algojkl.com</strong>
            </h4>
          </div>
          <div>
            <img src={ulkosuhteet_icon} alt="ulkosuhteet_icon" />
            <h3>Killan ulkosuhteet</h3>
            <h4>
              {' '}
              <strong>vpj@algojkl.com</strong>
            </h4>
          </div>
          <div className="collab-overflow">
            <img src={lamppu_icon} alt="muut icon" />
            <h3>Muita ideoita?</h3>
            <h4>
              Meille voi aina ehdottaa uusia yhteistyökuvioita! <br />
              Muista yhteistyökuvioista voi ottaa yhteyttä puheenjohtajaamme:{' '}
              <br />
              <br />
              <strong>pj@algojkl.com</strong>
            </h4>
          </div>
        </div>
        <h2>Yhteistyössä</h2>
      </div>
      <CollabCards />
    </div>
  )
}

export default Collab
