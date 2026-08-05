import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../../common/Section'

const Vaihtovuosi = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <h2>{t('pages.kansainvalisyys.yearClockTitle')}</h2>

      <Section title={t('pages.kansainvalisyys.months.january.title')}>
        <p>{t('pages.kansainvalisyys.months.january.intro')}</p>
        <ul>
          <li>
            <strong>{t('pages.kansainvalisyys.months.january.searches')}</strong>
            <ul>
              <li>{t('pages.kansainvalisyys.months.january.search1')}</li>
              <li>{t('pages.kansainvalisyys.months.january.search2')}</li>
            </ul>
          </li>
        </ul>
      </Section>

      <Section title={t('pages.kansainvalisyys.months.febMarch.title')}>
        <p>{t('pages.kansainvalisyys.months.febMarch.body')}</p>
      </Section>

      <Section title={t('pages.kansainvalisyys.months.april.title')}>
        <p>{t('pages.kansainvalisyys.months.april.body')}</p>
      </Section>

      <Section title={t('pages.kansainvalisyys.months.september.title')}>
        <p>{t('pages.kansainvalisyys.months.september.body')}</p>
      </Section>

      <Section title={t('pages.kansainvalisyys.months.october.title')}>
        <p>{t('pages.kansainvalisyys.months.october.body')}</p>
      </Section>

      <Section title={t('pages.kansainvalisyys.months.mayDecember.title')}>
        <p>{t('pages.kansainvalisyys.months.mayDecember.body')}</p>
      </Section>

      <Section title={t('pages.kansainvalisyys.months.allYear.title')}>
        <p>{t('pages.kansainvalisyys.months.allYear.body')}</p>
      </Section>
    </>
  )
}

export default Vaihtovuosi
