import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../../common/Section'

const Vaihtovinkit = () => {
  const { t } = useTranslation('common')

  return (
    <Section title={t('pages.kansainvalisyys.tips.title')}>
      <ul>
        <li>
          <strong>{t('pages.kansainvalisyys.tips.creditsLabel')}</strong>{' '}
          {t('pages.kansainvalisyys.tips.creditsText')}
        </li>
        <li>
          <strong>{t('pages.kansainvalisyys.tips.studyPlanLabel')}</strong>{' '}
          {t('pages.kansainvalisyys.tips.studyPlanText')}
          <ul>
            <li>{t('pages.kansainvalisyys.tips.studyPlanPoint1')}</li>
            <li>{t('pages.kansainvalisyys.tips.studyPlanPoint2')}</li>
          </ul>
        </li>
        <li>
          <strong>{t('pages.kansainvalisyys.tips.levelLabel')}</strong>
          <ul>
            <li>{t('pages.kansainvalisyys.tips.levelPoint1')}</li>
            <li>{t('pages.kansainvalisyys.tips.levelPoint2')}</li>
            <li>{t('pages.kansainvalisyys.tips.levelPoint3')}</li>
          </ul>
        </li>
      </ul>
    </Section>
  )
}

export default Vaihtovinkit
