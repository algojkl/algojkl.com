import React from 'react'
import { Link } from 'react-router-dom'

/**
 *  Palauttaa 404 Not Found -sivun, jos etsitään sivua, jota ei ole olemassa.
 */
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Sivua ei löytynyt</h2>
      <p>
        Etsimääsi sivua ei ole olemassa. Tarkista osoite tai palaa etusivulle.
      </p>
      <Link to="/" className="notfound-link">
        Palaa etusivulle
      </Link>
    </div>
  )
}

export default NotFound
