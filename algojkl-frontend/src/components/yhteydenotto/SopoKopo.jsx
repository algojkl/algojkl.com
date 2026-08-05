import { useTranslation } from 'react-i18next'
import YhteydenottoSection from './YhteydenottoSection'

const SopoKopo = () => {
  const { t } = useTranslation('common')

  return (
    <YhteydenottoSection title={t('pages.sopokopo.title')} headingLevel="h3">
      <p>{t('pages.sopokopo.description')}</p>
      <p>
        {t('pages.sopokopo.formLinkLabel')}{' '}
        <a href="https://forms.gle/5vLF7HQQosCeov5s8">
          {t('pages.sopokopo.formLinkText')}
        </a>
      </p>
    </YhteydenottoSection>
  )
}

export default SopoKopo
