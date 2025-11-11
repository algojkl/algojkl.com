import React from 'react'
import FooterFeedback from './FooterFeedback'
import FooterInfo from './FooterInfo'
import FooterNav from './FooterNav'
/**
 * Footer
 *
 * Tämä komponentti kokoaa footerin kolme pääosaa:
 * 1. FooterInfo – näyttää yhdistyksen tiedot ja yhteystiedot
 * 2. FooterNav – navigaatiolinkit eri osioihin (NAVIGAATIO, TOIMIHENKILÖT, VIRALLISET DOKUMENTIT, JÄSENILLE)
 * 3. FooterFeedback – linkin palautelomakkeeseen
 *
 * Footer sisältää kaksi containeria:
 * - footer-content: Info ja Nav osiot vierekkäin (vaakasuorassa)
 * - FooterFeedback: palautelomake-osio erikseen footerin alaosassa
 */
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <FooterInfo />
      <FooterNav />
    </div>
    <FooterFeedback />
  </footer>
)
export default Footer
