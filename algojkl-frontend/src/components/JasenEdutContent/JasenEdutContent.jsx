import JasenEtuItem from './JasenEtuItem'
import JasenEdutIntro from './JasenEdutIntro'

const JasenEdutContent = ({ edut }) => (
  <div className="jasenedut-container">
    <h2>Jäsenedut</h2>
    <JasenEdutIntro />
    {edut.length > 0 ? (
      edut.map((etu) => <JasenEtuItem key={etu.id} etu={etu} />)
    ) : (
      <p>Jäsenetuja lisätään pian!</p>
    )}
  </div>
)

export default JasenEdutContent
