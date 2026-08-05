import { useTranslation } from 'react-i18next'
import JasenEtuItem from './JasenEtuItem'
import JasenEdutIntro from './JasenEdutIntro'

const JasenEdutContent = ({ edut }) => {
  const { t } = useTranslation('common')

  return (
    <div className="jasenedut-container">
      <h2>{t('pages.jasenedut.title')}</h2>
      <JasenEdutIntro />
      {edut.length > 0 ? (
        edut.map((etu) => <JasenEtuItem key={etu.id} etu={etu} />)
      ) : (
        <p>{t('pages.jasenedut.empty')}</p>
      )}
    </div>
  )
}

export default JasenEdutContent
