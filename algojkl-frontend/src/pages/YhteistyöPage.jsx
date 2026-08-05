import React from 'react'
import { useTranslation } from 'react-i18next'
import CollabCards from '../components/collabLogos'

import starterDesktop from '../images/Page_starters/2.jpg'
import starterMobile from '../images/mobiili/5.png'
import collab_icon from '../images/collab_icon.png'
import event_icon from '../images/event_icon.png'
import ulkosuhteet_icon from '../images/people_icon.png'
import lamppu_icon from '../images/lamppu.png'
import StarterImage from '../common/StarterImage'

/**
 *  Collab-sivu
 * Tämä komponentti renderöi Yhteistyö-sivun sisällön.
 * Sivulla näytetään:
 * 1. Starter-kuva (desktop ja mobiili)
 * 2. Yhteistyöosio, jossa on yhteystiedot eri yhteistyömahdollisuuksista
 * 3. CollabCards-komponentti, joka esittelee yhteistyökumppaneiden logot
 */
const Collab = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt={t('pages.yhteistyo.alt')}
      />
      <div className="collab-container">
        <h1>{t('pages.yhteistyo.title')}</h1>
        <p>{t('pages.yhteistyo.intro')}</p>
        <h3>{t('pages.yhteistyo.contactUs')}</h3>
        <br />
        <div className="collab-container-flex">
          <div>
            <img src={collab_icon} alt="yhteistyö icon" />
            <h3>{t('pages.yhteistyo.corporate')}</h3>
            <h4>
              <strong>yritys@algojkl.com</strong>
            </h4>
          </div>
          <div>
            <img src={event_icon} alt="event icon" />
            <h3>{t('pages.yhteistyo.events')}</h3>
            <h4>
              <strong>tapahtumat@algojkl.com</strong>
            </h4>
          </div>
          <div>
            <img src={ulkosuhteet_icon} alt="ulkosuhteet_icon" />
            <h3>{t('pages.yhteistyo.external')}</h3>
            <h4>
              {' '}
              <strong>vpj@algojkl.com</strong>
            </h4>
          </div>
          <div className="collab-overflow">
            <img src={lamppu_icon} alt="muut icon" />
            <h3>{t('pages.yhteistyo.otherIdeas')}</h3>
            <h4>
              {t('pages.yhteistyo.otherDescription')}
              <br />
              {t('pages.yhteistyo.otherContact')}{' '}
              <br />
              <br />
              <strong>pj@algojkl.com</strong>
            </h4>
          </div>
        </div>
        <h2>{t('pages.yhteistyo.partnersTitle')}</h2>
      </div>
      <CollabCards />
    </div>
  )
}

export default Collab
