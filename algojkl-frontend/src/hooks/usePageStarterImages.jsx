import { useTranslation } from 'react-i18next'
import { getLocalizedStarterImages } from '../utils/pageStarterImages'

const usePageStarterImages = (pageKey) => {
  const { t, i18n } = useTranslation('common')
  const imageNames = t(`media.pageStarters.${pageKey}`, { returnObjects: true })

  return getLocalizedStarterImages(
    imageNames,
    i18n.resolvedLanguage || i18n.language,
  )
}

export default usePageStarterImages
