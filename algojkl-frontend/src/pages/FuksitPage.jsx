import React from 'react'
import useDevice from '../hooks/useDevice'
import Panu from '../components/simple'
import TutorList from '../components/Tutorlist'
import { useContentfulData } from '../services/useContentfulData'

import { 
  starterImages, 
  ennenOpiskelua, 
  opintojenAlku, 
  kiltatoiminta, 
  jasenyys 
} from '../PageData/fuksitData'

const Fuksit = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterImages.mobile : starterImages.desktop
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan...</p>
  if (error) return <p>Virhe ladattaessa tietoja!</p>

  return (
    <div>
      <img src={starterImage} alt="freshman_starter_img" className="starter" />

      <div className="Freshman-container">
        <div className="fuksi-leveys">
          <div className="header">
            <div>
              <h1>Heippa Fuksi* ~: cd /fuksisyksy</h1>
              <p>
                <i>*Fuksi on ensimmäisen vuoden opiskelija</i>
              </p>
            </div>
            <Panu />
          </div>

          <p><i>Koko opiskeluajan tärkein asia: Seuraa sähköpostia!</i></p>
          <br />

          <h2>Ennen opiskeluiden alkua:</h2>
          <ul>
            {ennenOpiskelua.map((item, idx) => (
              <li key={idx}>
                <strong>{idx + 1}. {item.title}</strong>
                <br />
                {item.description}
                {item.link && <a href={item.link.href}> {item.link.text}</a>}
                {item.links && item.links.map((l, i) => (
                  <span key={i}>
                    {' '}
                    <a href={l.href}>{l.text}</a>
                    {i < item.links.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </li>
            ))}
          </ul>

          <h2>Opintojen alku</h2>
          {opintojenAlku.map((text, idx) => <p key={idx}>{text}</p>)}

          <h2>Kiltatoiminta</h2>
          {kiltatoiminta.map((text, idx) => <p key={idx}>{text}</p>)}

          <h2>Jäsenyys</h2>
          {jasenyys.map((text, idx) => <p key={idx}>{text}</p>)}

          {/*
          <h2>Tutorit 2025 esittäytyvät:</h2>
          <TutorList tutorit={data?.tutorit} />
          */}
        </div>
      </div>
    </div>
  )
}

export default Fuksit
