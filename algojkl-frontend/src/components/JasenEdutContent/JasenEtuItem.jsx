import ReactMarkdown from 'react-markdown'
import { jasenEtuPropType } from './JasenEtuPropTypes'

const JasenEtuItem = ({ etu }) => (
  <div className="jasenedut-item">
    {etu.kuvaUrl && (
      <img
        src={
          etu.kuvaUrl.startsWith('//') ? 'https:' + etu.kuvaUrl : etu.kuvaUrl
        }
        alt={etu.otsikkofirma}
        className="jasenedut-image"
      />
    )}
    <div className="jasenedut-text">
      <h3>{etu.otsikkofirma}</h3>
      <ReactMarkdown>{etu.kuvaus}</ReactMarkdown>
    </div>
  </div>
)

JasenEtuItem.propTypes = {
  etu: jasenEtuPropType.isRequired,
}

export default JasenEtuItem
