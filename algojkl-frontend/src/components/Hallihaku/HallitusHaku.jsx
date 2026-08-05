import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHallitusHaku } from './useHallitusHaku'
import HakuList from './HakuList'

const HallitusHaku = () => {
  const { t } = useTranslation('common')
  const { isLoading, error, puheenjohtajisto, muutPestit } = useHallitusHaku()

  if (isLoading) return <p>{t('pages.hallihaku.loading')}</p>
  if (error) return <p>{t('pages.hallihaku.error')}</p>

  return (
    <div className="hallihaku-container">
      <h2>{t('pages.hallihaku.chair')}</h2>
      <HakuList
        list={puheenjohtajisto}
        emptyMessage={t('pages.hallihaku.emptyChair')}
      />{' '}
      <br />
      <h2>{t('pages.hallihaku.other')}</h2>
      <HakuList
        list={muutPestit}
        emptyMessage={t('pages.hallihaku.emptyOther')}
      />{' '}
      <br />
    </div>
  )
}

export default HallitusHaku
