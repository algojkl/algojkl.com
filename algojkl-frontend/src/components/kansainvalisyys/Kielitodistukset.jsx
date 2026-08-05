import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../../common/Section'

const Kielitodistukset = () => {
  const { t } = useTranslation('common')

  return (
    <Section title={t('pages.kansainvalisyys.languageCertificates.title')}>
      <p>{t('pages.kansainvalisyys.languageCertificates.body')}</p>
    </Section>
  )
}

export default Kielitodistukset
