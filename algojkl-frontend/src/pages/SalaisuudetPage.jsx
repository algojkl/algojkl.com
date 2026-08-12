import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import StarterImage from '../common/StarterImage'
import usePageStarterImages from '../hooks/usePageStarterImages'

/**
 * SalaisuudetPage-komponentti
 * Tämä komponentti renderöi salaisuudet-sivun, joka sisältää:
 * 1. StarterImage-komponentin pääbannerin kuvan renderöintiin (desktop ja mobile).
 * 2. Salasanasuojatun sisällön, johon pääsee käsiksi syöttämällä oikean salasanan.
 * 3. Lomakkeen salasanan syöttämistä varten ja virheilmoitukset väärästä salasanasta tai palvelinvirheistä.
 */
const SalaisuudetPage = () => {
  const { t } = useTranslation('common')
  const starterImages = usePageStarterImages('salaisuudet')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const [content, setContent] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setContent(data.content)
        setIsAuthenticated(true)
        setError('')
      } else {
        setError(data.message || t('pages.salaisuudet.wrongPassword'))
      }
    } catch (err) {
      setError(t('pages.salaisuudet.serverError', { message: err.message }))
    }
  }

  if (!isAuthenticated) {
    return (
      <div>
        <StarterImage
          desktopImage={starterImages.desktop}
          mobileImage={starterImages.mobile}
          alt="Seloste"
        />
        <div className="login-container">
          <h2>{t('pages.salaisuudet.prompt')}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('pages.salaisuudet.placeholder')}
            />
            <button type="submit">{t('pages.salaisuudet.loginButton')}</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    )
  }

  if (!content) return <p>{t('pages.salaisuudet.loading')}</p>

  return (
    <div>
      <StarterImage
        desktopImage={starterImages.desktop}
        mobileImage={starterImages.mobile}
        alt="Seloste"
      />
      <div className="salaisuudet-page-content">
        {content.secretText.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  )
}

export default SalaisuudetPage
