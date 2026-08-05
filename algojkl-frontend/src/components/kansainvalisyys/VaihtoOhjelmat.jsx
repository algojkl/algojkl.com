import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../../common/Section'

const VaihtoOhjelmat = () => {
  const { t } = useTranslation('common')

  return (
    <Section title={t('pages.international.title')}>
      <ul>
        <li>
          <strong>{t('pages.international.erasmusName')}</strong>
          <p>{t('pages.international.erasmusDescription')}</p>
          <ul>
            <li>
              <a href="https://www.jyu.fi/fi/opiskelijalle/.../erasmus">
                {t('pages.international.erasmusLink')}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <strong>{t('pages.international.bilateralName')}</strong>
          <p>{t('pages.international.bilateralDescription')}</p>
        </li>
        <li>
          <strong>{t('pages.international.isepName')}</strong>
          <p>{t('pages.international.isepDescription')}</p>
        </li>
        <li>
          <strong>{t('pages.international.northName')}</strong>
          <p>{t('pages.international.northDescription')}</p>
        </li>
        <li>
          <strong>{t('pages.international.forthemName')}</strong>
          <p>{t('pages.international.forthemDescription')}</p>
        </li>
      </ul>
    </Section>
  )
}

export default VaihtoOhjelmat
