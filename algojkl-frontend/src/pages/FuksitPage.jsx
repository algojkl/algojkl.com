import React from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import Panu from '../components/simple'
import TutorList from '../components/Tutorlist'
import Typewriter from '../components/Typewriter'
import { useContentfulData } from '../services/useContentfulData'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * Fuksit-komponentti
 * Tämä komponentti esittää fuksisivun, joka sisältää:
 * 1. StarterImage-komponentin, joka näyttää sivun yläosan kuvan
 *    (desktop- ja mobiiliversiot propsien kautta).
 * 2. Panu-komponentin, joka voi toimia visuaalisena elementtinä tai lisäinformaationa.
 * 3. Tietosisällön eri osiot, jotka on jaettu:
 *    - Ennen opiskeluiden alkua (ennenOpiskelua)
 *    - Opintojen alku (opintojenAlku)
 *    - Kiltatoiminta (kiltatoiminta)
 *    - Jäsenyys (jasenyys)
 *    Jokainen osio renderöidään joko listana tai kappaleina.
 * 4. (Valinnainen) TutorList-komponentti, joka listaa tutorit Contentful-datan perusteella
 *    – tämä osa on kommentoitu pois, mutta voidaan ottaa käyttöön tarvittaessa.
 * 5. Data haetaan Contentful-palvelusta useContentfulData-hookin avulla,
 *    ja lataustila ja virhetilanteet käsitellään erikseen.
 */

const Fuksit = () => {
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('fuksit')
  const { data, isLoading, error } = useContentfulData()
  const beforeStudies = t('pages.fuksit.beforeStudies', { returnObjects: true })
  const studyStart = t('pages.fuksit.studyStart', { returnObjects: true })
  const guildActivity = t('pages.fuksit.guildActivity', { returnObjects: true })
  const membership = t('pages.fuksit.membership', { returnObjects: true })

  if (isLoading) return <p>{t('pages.fuksit.loading')}</p>
  if (error) return <p>{t('pages.fuksit.error')}</p>

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.fuksit.alt')}
      />
      <div className="Freshman-container">
        <h1>{t('pages.fuksit.title')}</h1>
        <div className="fuksi-leveys">
          <div className="header">
            <div className="container-info">
              <h1>{t('pages.fuksit.subtitle')}</h1>
              <div className="typewrite">
                <Typewriter
                  text={t('pages.fuksit.typewriter')}
                  prefix="$ "
                />
              </div>
            </div>
            <Panu />
          </div>

          <h2>{t('pages.fuksit.beforeStudiesTitle')}</h2>
          <ul>
            {beforeStudies.map((item, idx) => (
              <li key={idx}>
                <strong>
                  {idx + 1}. {item.title}
                </strong>
                <br />
                {item.description}
                {item.link && <a href={item.link.href}> {item.link.text}</a>}
                {item.links &&
                  item.links.map((l, i) => (
                    <span key={i}>
                      {' '}
                      <a href={l.href}>{l.text}</a>
                      {i < item.links.length - 1 ? ', ' : ''}
                    </span>
                  ))}
              </li>
            ))}
          </ul>
          <p>
            <i>{t('pages.fuksit.important')}</i>
          </p>
          <br />

          <h2>{t('pages.fuksit.studyStartTitle')}</h2>
          {studyStart.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}

          <h2>{t('pages.fuksit.guildActivityTitle')}</h2>
          {guildActivity.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}

          <h2>{t('pages.fuksit.membershipTitle')}</h2>
          {membership.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
          <h2>{t('pages.fuksit.tutorTitle')}</h2>
          <p>{t('pages.fuksit.tutorNote')}</p>
          <br />
          <TutorList tutorit={data?.tutorit} />
        </div>
      </div>
    </div>
  )
}

export default Fuksit
