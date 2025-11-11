import { useContentfulData } from '../../services/useContentfulData'
import JasenEdutContent from './JasenEdutContent'

const JasenEdut = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan jäsenetuja...</p>
  if (error) return <p>Virhe ladattaessa jäsenetuja</p>

  const edut = data?.jasenedut || []

  return <JasenEdutContent edut={edut} />
}

export default JasenEdut
