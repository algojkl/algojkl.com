import React from 'react'
/**
 * FooterInfo
 * 
 * Tämä komponentti näyttää footerissa yhdistyksen perustiedot:
 * - Nimi
 * - Yhteystiedot (osoite, sähköposti)
 * - Y-tunnus
 * - Tekijänoikeustiedot
 * 
 */
const FooterInfo = () => (
  <div className="footer-info">
    <h2>Algo ry</h2>
    <p>Yhteystiedot</p>
    <p>Mattilanniemi 2,</p>
    <p>40100 Jyväskylä</p>
    <p>pj@algojkl.com</p>
    <p>Y-tunnus: 3297709-4</p>
    <p><strong>© Algo ry, 2025</strong></p>
  </div>
)

export default FooterInfo
