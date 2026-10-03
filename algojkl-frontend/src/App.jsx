import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NavBar, Footer } from './components'
import PageMetadata from './components/PageMetadata'
import { pageRoutes } from './pageRoutes'
import './App.css'

function App() {
  const { t } = useTranslation('common')

  return (
    <Router>
      <a className="skip-link" href="#main-content">
        {t('a11y.skipToContent')}
      </a>
      <NavBar />
      <PageMetadata />
      <main id="main-content" tabIndex="-1">
        <Routes>
          {pageRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
