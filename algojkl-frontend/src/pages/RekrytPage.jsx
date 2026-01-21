import React from 'react'
import starterDesktop from '../images/Page_starters/16.jpg'
import starterMobile from '../images/mobiili/18.png'
import { useContentfulData } from '../services/useContentfulData'
import StarterImage from '../common/StarterImage'

/**
 * RekrytPage-komponentti
 * Tämä komponentti renderöi Rekryt-sivun, joka sisältää:
 * 1. StarterImage-komponentin sivun yläosan kuvalle (desktop ja mobiili).
 * 2. Johdantotekstin avoimista rekryilmoituksista.
 * 3. Dynaamisen listan avoimista rekryilmoituksista, jotka haetaan Contentfulista.
 */
const RekrytPage = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan rekryjä...</p>
  if (error) return <p>Virhe ladatessa rekryjä</p>

  return (
    <div>
      <StarterImage
        desktopImage={starterDesktop}
        mobileImage={starterMobile}
        alt="Seloste"
      />
      <div className="rekryt-container">
        <h1>Täällä julkaistaan avoimia rekryilmotuksia!</h1>
        {data?.hiring && data.hiring.length > 0 ? (
          data.hiring.map((item, index) => {
            const kuvaUrl =
              typeof item.rekryKuva === 'string'
                ? item.rekryKuva
                : item.rekryKuva?.fields?.file?.url

            const tiedostoUrl =
              typeof item.rekrytiedosto === 'string'
                ? item.rekrytiedosto
                : item.rekrytiedosto?.fields?.file?.url

            return (
              <div key={item.id || index} className="rekry-card">
                <h2>{item.otsikko}</h2>
                <p style={{ whiteSpace: 'pre-wrap' }}>{item.rekryInfo}</p>

                {kuvaUrl && (
                  <img
                    src={`https:${kuvaUrl}`}
                    alt={item.otsikko}
                    className="rekry-image"
                  />
                )}

                {tiedostoUrl ? (
                  <a
                    href={
                      tiedostoUrl.startsWith('http')
                        ? tiedostoUrl
                        : `https:${tiedostoUrl}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lisätietoja tästä!
                  </a>
                ) : (
                  <p style={{ color: 'red' }}></p>
                )}
              </div>
            )
          })
        ) : (
          <p>Tällä hetkellä ei ole aktiivisia rekrytointeja.</p>
        )}
      </div>
    </div>
  )
}

export default RekrytPage
