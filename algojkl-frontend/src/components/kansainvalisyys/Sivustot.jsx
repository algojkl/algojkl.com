import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../../common/Section'

const Sivustot = () => {
  const { t } = useTranslation('common')

  return (
    <Section title={t('pages.kansainvalisyys.sites.title')}>
      <ul>
        <li>
          <strong>{t('pages.kansainvalisyys.sites.mobilityLabel')}</strong>
          <a href="https://www.service4mobility.com/europe/MobilitySearchServlet?sprache=en&identifier=JYVASKY01">
            {t('pages.kansainvalisyys.sites.mobilityLink')}
          </a>
        </li>
        <li>
          <strong>{t('pages.kansainvalisyys.sites.applicationLabel')}</strong>{' '}
          <a href="https://www.jyu.fi/fi/opiskelijalle/.../vaihtoon-hakeminen">
            {t('pages.kansainvalisyys.sites.applicationLink')}
          </a>
        </li>
        <li>
          <strong>{t('pages.kansainvalisyys.sites.preparationLabel')}</strong>{' '}
          <a href="https://www.jyu.fi/fi/opiskelijalle/.../ennen-vaihtoa">
            {t('pages.kansainvalisyys.sites.preparationLink')}
          </a>
        </li>
        <li>
          <strong>{t('pages.kansainvalisyys.sites.fundingLabel')}</strong>{' '}
          <a href="https://www.jyu.fi/fi/opiskelijalle/.../opiskelijavaihdon-rahoitus">
            {t('pages.kansainvalisyys.sites.fundingLink')}
          </a>
        </li>
      </ul>
    </Section>
  )
}

export default Sivustot
