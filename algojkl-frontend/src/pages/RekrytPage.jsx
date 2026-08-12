import React from 'react'
import { useTranslation } from 'react-i18next'
import { useContentfulData } from '../services/useContentfulData'
import StarterImage from '../common/StarterImage'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * RekrytPage-komponentti
 * Tämä komponentti renderöi Rekryt-sivun, joka sisältää:
 * 1. StarterImage-komponentin sivun yläosan kuvalle (desktop ja mobiili).
 * 2. Johdantotekstin avoimista rekryilmoituksista.
 * 3. Dynaamisen listan avoimista rekryilmoituksista, jotka haetaan Contentfulista.
 */
const RekrytPage = () => {
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('rekryt')
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>{t('pages.rekryt.loading')}</p>
  if (error) return <p>{t('pages.rekryt.error')}</p>

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt={t('pages.rekryt.alt')}
      />
      <div className="rekryt-container">
        <h1>{t('pages.rekryt.title')}</h1>
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
                    {t('pages.rekryt.moreInfo')}
                  </a>
                ) : (
                  <p style={{ color: 'red' }}></p>
                )}
              </div>
            )
          })
        ) : (
          <p>{t('pages.rekryt.empty')}</p>
        )}
      </div>
    </div>
  )
}

export default RekrytPage
