import React from 'react'
import HakuCard from './HakuCard'

const HakuList = ({ list, emptyMessage }) => {
  if (!list || list.length === 0) return <p>{emptyMessage}</p>

  return (
    <div className="haku-grid">
      {list.map((haku) => (
        <HakuCard key={haku.hakuId} haku={haku} />
      ))}
    </div>
  )
}

export default HakuList
