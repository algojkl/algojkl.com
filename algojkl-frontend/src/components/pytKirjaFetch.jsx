import React, { useState } from 'react'
import { useContentfulData } from '../services/useContentfulData'

const PytKirja = () => {
  const { data, isLoading, error } = useContentfulData()
  const [selectedYear, setSelectedYear] = useState('2025')

  if (isLoading) return <p>Ladataan pöytäkirjoja.</p>
  if (error) return <p>Virhe ladattaessa pöytäkirjoja.</p>

  const pytkirjat = data?.pytkirjat || []

  const filteredData = pytkirjat.filter(
    (item) =>
      item.pytkirjaTittle &&
      typeof item.pytkirjaTittle === 'string' &&
      item.pytkirjaTittle.trim().includes(selectedYear)
  )

  const years = [
    ...new Set(
      pytkirjat
        .map((item) => {
          const match = item.pytkirjaTittle?.match(/\b(19|20)\d{2}\b/)
          return match ? match[0] : null
        })
        .filter((year) => year)
    ),
  ].sort((a, b) => b - a)

  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Lataus epäonnistui')
      const blob = await response.blob()
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = `pkirja_${title}.pdf`
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (err) {
      console.error(err)
      alert('Tiedoston lataus epäonnistui.')
    }
  }

  return (
    <div className="pyt-kirja-container">
      <h2>Hallitus {selectedYear}:n pöytäkirjat:</h2>

      <label htmlFor="year-select">Valitse vuosi: </label>
      <select
        id="year-select"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {filteredData.map((item) => (
        <div key={item.id} className="pytkirja-render">
          <button
            onClick={() => handleDownload(item.pytkirja, item.pytkirjaTittle)}
            className="pytkirja-link"
          >
            {item.pytkirjaTittle?.trim() || 'Ilman otsikkoa'}
          </button>
        </div>
      ))}

      {filteredData.length === 0 && <p>Ei pöytäkirjoja valitulle vuodelle.</p>}
    </div>
  )
}

export default PytKirja
