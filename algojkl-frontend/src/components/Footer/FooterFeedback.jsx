import React from 'react'
/**
 * FooterFeedback
 *
 * Tämä komponentti vastaa footerin palautelomake-osaa.
 * Se sisältää otsikon, kuvauksen ja linkin Google Forms -lomakkeeseen.
 * Linkki avautuu uuteen välilehteen.
 *
 * Luokat:
 * - feedback-comms: koko palautekomponentin container
 * - feedback: yksittäisen palautelomake-osan sisältö
 */
const FooterFeedback = () => {
  return (
    <div className="feedback-comms">
      <div className="feedback">
        <h3>Haluatko antaa meille palautetta?</h3>
        <p>
          Se onnistuu, kun täytät alla olevan lomakkeen. Palautteet käsitellään
          anonyymisti.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd_uGBf6NpWvJi_v3o7w3iJ2flnCMrxnNWMi6hIgMhD3kPBAw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Palautelomake
        </a>
      </div>
    </div>
  )
}

export default FooterFeedback
