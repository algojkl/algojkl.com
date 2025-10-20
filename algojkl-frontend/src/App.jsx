import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  CollabPage,
  Ohjesaannot,
  EventPage,
  Fuksit,
  HallitusPage,
  AktiiviPage,
  PeriaatteetPage,
  DokumenttiPage,
  KansainvalisyysPage,
  KunniagalleriaPage,
  SalaisuudetPage,
  SaannotPage,
  RekisteriselostePage,
  YhteydenottoPage,
  JasenEdutPage,
  RekrytPage,
  KerhotoimintaPage,
  HakijatPage,
  PrevHalli,
  VujuPage,
  HallihakuPage,
  NotFound,
} from './pages'
import { NavBar, Footer } from './components'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tapahtumat" element={<EventPage />} />
        <Route path="/yhteistyot" element={<CollabPage />} />
        <Route path="/fuksit" element={<Fuksit />} />
        <Route path="/hallitus" element={<HallitusPage />} />
        <Route path="/ohjesaannot" element={<Ohjesaannot />} />
        <Route path="/aktiivit" element={<AktiiviPage />} />
        <Route path="/periaatteet" element={<PeriaatteetPage />} />
        <Route
          path="/yhdenvertaisuus"
          element={<PeriaatteetPage to="/periaatteet" replace />}
        />
        <Route path="/vujuetiketti" element={<VujuPage />} />
        <Route path="/dokumentit" element={<DokumenttiPage />} />
        <Route path="/kansainvalisyys" element={<KansainvalisyysPage />} />
        <Route path="/kunniagalleria" element={<KunniagalleriaPage />} />
        <Route path="/salaisuudet" element={<SalaisuudetPage />} />
        <Route path="/saannot" element={<SaannotPage />} />
        <Route path="/seloste" element={<RekisteriselostePage />} />
        <Route path="/lomakkeet" element={<YhteydenottoPage />} />
        <Route path="/jasenedut" element={<JasenEdutPage />} />
        <Route path="/rekryt" element={<RekrytPage />} />
        <Route path="/kerhotoiminta" element={<KerhotoimintaPage />} />
        <Route path="/hakijalle" element={<HakijatPage />} />
        <Route path="/entiset-hallitukset" element={<PrevHalli />} />
        <Route path="/hallihaku" element={<HallihakuPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
