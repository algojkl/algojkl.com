import React from 'react'

const questionsFi = [
  'Kuka olen',
  'Mistä olen kotoisin',
  'Mitä opiskelen?',
  'Paras muisto fuksivuodelta ❤️',
  'Paras kurssi fuksivuonna oli...',
  'Lempipaikka Jyväskylässä',
  'Paras vinkkini fukseille/fuksivuodelle',
  'Toteemieläimeni',
  'Muut terveiset'
]

const questionsEn = [
  'Who I am',
  'Where you are from / home city',
  'What you’re studying / your role at university',
  'Best memory from your first year',
  'Favourite course',
  'Favourite place in Jyväskylä',
  'Your best tip for new students / the first year of studying',
  "Free word / anything you'd like to say"
]

const TutorList = ({ tutorit }) => {
  if (!tutorit || tutorit.length === 0) {
    return <p>Tutorit lisätään pian!</p>
  }

  return (
    <div className="tutorit">
      {tutorit.map((tutor) => {
        const questions = tutor.kieli === 'eng' ? questionsEn : questionsFi

        const answers =
          tutor.esittelyteksti?.content
            ?.filter((node) => node.nodeType === 'paragraph')
            .map((node) =>
              node.content.map((text) => text.value).join('').trim()
            )
            .filter(Boolean) || []

        return (
          <div key={tutor.id} className="tutor-card">
            <img
              src={tutor.tutorKuva}
              alt={tutor.nimi}
              className="tutor-image"
            />

            <div className="tutor-info">
              <h3 className="tutor-name">{tutor.nimi}</h3>

              <div className="tutor-text">
                {answers.map((answer, index) => (
                  <div key={index} className="qa-row">
                    <div className="question">
                      {questions[index]}
                    </div>

                    <div className="answer">
                      {answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TutorList