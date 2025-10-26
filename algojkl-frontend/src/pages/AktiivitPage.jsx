import React from 'react'
import useDevice from '../hooks/useDevice'
import {
  starterImages,
  tiimit,
  muutAktiivit,
  aktiivimerkit,
} from '../PageData/aktiivitData'

const AktiiviPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterImages.mobile : starterImages.desktop

  return (
    <div className="aktiivi">
      <img src={starterImage} alt="starter_img_aktiivit" className="starter" />

      <div className="aktiivi-container">
        <div className="aktiivi-start">
          <h2>MIKÄ IHMEEN AKTIIVI???</h2>
          <p>
            Aktiivit koostuvat kiltamme jäsenistä, jotka haluavat auttaa ja
            vaikuttaa kiltamme toimintaan. Aktiivit auttavat hallituksemme
            jäseniä matalalla kynnyksellä.
          </p>
        </div>

        <div className="aktiivi-pestit">
          <h2>AKTIIVIEN PESTIT</h2>
          <ul>
            {tiimit.map((tiimi, idx) => (
              <li key={idx}>
                <strong>{tiimi.title}</strong>
                <ul>
                  {tiimi.tasks.map((task, i) => (
                    <li key={i}>
                      {task.title}
                      {task.subTasks && (
                        <ul>
                          {task.subTasks.map((st, j) => (
                            <li key={j}>{st}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                  {tiimi.responsibles?.map((v, k) => (
                    <li key={k}>
                      {v.href ? <a href={v.href}>{v.nimi}</a> : v.nimi}
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {muutAktiivit.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}</strong>
                {m.subTasks && (
                  <ul>
                    {m.subTasks.map((st, i) => (
                      <li key={i}>{st}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <br />

        <div className="aktiivi-consent">
          <h3>Kiinnostuitko?</h3>
          <p>Hae aktiiviksi täyttämällä alla olevan lomakkeen!</p>
          <button className="aktiivit-button">
            <a href="https://forms.gle/iwLcCpC3bscAhbhN8">Hae Aktiiviksi</a>
          </button>
        </div>

        <div className="aktiivi-container-merkit">
          <h2>Aktiivimerkit</h2>
          <div className="aktiivit-container-merkit-background">
            {aktiivimerkit.map((src, idx) => (
              <img key={idx} src={src} alt={`aktiivi_${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AktiiviPage
