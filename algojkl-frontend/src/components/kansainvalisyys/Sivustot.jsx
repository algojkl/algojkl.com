import React from 'react'
import Section from '../../common/Section'

const Sivustot = () => (
  <Section title="Sivustot">
    <ul>
      <li>
        <strong>Hakuprosessi Mobility Online -portaalissa:</strong>
        <a href="https://www.service4mobility.com/europe/MobilitySearchServlet?sprache=en&identifier=JYVASKY01">
          Mobility Online -portaali
        </a>
      </li>
      <li>
        <strong>Ohjeita hakuvaiheeseen:</strong>{' '}
        <a href="https://www.jyu.fi/fi/opiskelijalle/.../vaihtoon-hakeminen">
          Step by step -hakuohjeet
        </a>
      </li>
      <li>
        <strong>Valmistautuminen vaihtoon:</strong>{' '}
        <a href="https://www.jyu.fi/fi/opiskelijalle/.../ennen-vaihtoa">
          Valmistautumisohjeet
        </a>
      </li>
      <li>
        <strong>Vaihdon rahoitus:</strong>{' '}
        <a href="https://www.jyu.fi/fi/opiskelijalle/.../opiskelijavaihdon-rahoitus">
          Vaihdon rahoitus
        </a>
      </li>
    </ul>
  </Section>
)

export default Sivustot
