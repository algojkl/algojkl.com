import React from 'react'
import { useTranslation } from 'react-i18next'

import starterDesktop from '../images/Page_starters/6.jpg'
import starterMobile from '../images/mobiili/8.png'
import StarterImage from '../common/StarterImage'

import { useContentfulData } from '../services/useContentfulData'

import HallitusCard from '../components/HallitusCard/HallitusCard'
import Toimari from '../components/toimari/Toimari'
import PestitDescription from '../components/Pestit/PestitDescription'
import { hallitusOrder } from '../utils/hallitusOrder'

/**
 * HallitusPage-komponentti
 * Tämä komponentti renderöi Algo ry:n hallitus-sivun, joka sisältää:
 * 1. StarterImage-komponentin sivun yläosan kuvalle (desktop ja mobiili).
 * 2. Hallitus-jäsenet Contentful-datan perusteella.
 *    - Data ladataan useContentfulData-hookilla.
 *    - Jos data on latauksessa, näytetään "Ladataan..."-teksti.
 *    - Jos virhe, näytetään virheilmoitus.
 *    - Jäsenet järjestetään pestiOrderin mukaisesti ennen renderöintiä.
 *    - Kukin jäsen renderöidään HallitusCard-komponentilla.
 * 3. PestitDescription-komponentti, joka renderöi kuvauksen hallituksen pesteistä. Näitä voi muokata pestitdescription tiedostosssa.
 */

const HallitusPage = () => {
  const { t } = useTranslation('common')
  const { data, isLoading, error } = useContentfulData()
  if (isLoading) return <p>{t('pages.hallitus.loading')}</p>
  if (error) return <p>{t('pages.hallitus.error')}</p>

  const sortedHallitus = [...data.hallitus].sort((a, b) => {
    const orderA = hallitusOrder[a.pesti] ?? 99
    const orderB = hallitusOrder[b.pesti] ?? 99
    return orderA - orderB
  })

  const date = new Date().getFullYear()

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt={t('pages.hallitus.alt')}
      />
      <div className="hallitus">
        <h1>{t('pages.hallitus.title', { year: date })}</h1>
        <div className="hallitus-grid">
          {sortedHallitus.map((member) => (
            <HallitusCard key={member.id} member={member} />
          ))}
        </div>
        <div className="hallitus-contact">
          <p>
            {t('pages.hallitus.contactIntro')}{' '}
            <a href="mailto:hallitus@algojkl.com"> hallitus@algojkl.com</a>.
            {' '}
            {t('pages.hallitus.contactMembers')}{' '}
            <a href="mailto:etunimi.sukunimi@algojkl.com">
              {' '}
              etunimi.sukunimi@algojkl.com
            </a>.
          </p>
        </div>
      </div>
      <PestitDescription />
      <div className="toimarit">
        <h2>{t('pages.hallitus.staffTitle', { year: date })}</h2>
        <div className="toimarit-grid">
          {data.toimarit.map((toimari) => (
            <Toimari key={toimari.id} member={toimari} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HallitusPage
