import Rive from '@rive-app/react-canvas'
import React from 'react'
import liityjaseneksi from '../../liityjaseneksinappi.riv'

export default function Join() {
  const openLink = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="liityjaseneksiAnim">
      <Rive
        src={liityjaseneksi}
        stateMachines="Hover"
        onClick={() =>
          openLink(
            'https://kide.app/memberships/2a49d555-1856-4ad7-bac6-b1838e7481fc'
          )
        }
      />
    </div>
  )
}
