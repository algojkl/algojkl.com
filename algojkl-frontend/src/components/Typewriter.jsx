import React, { useState, useEffect } from 'react'

const Typewriter = ({ text = '', speed = 45, prefix = '$ ' }) => {
  const [displayedText, setDisplayedText] = useState('')
  const isComplete = displayedText === text

  useEffect(() => {
    const characters = Array.from(text)
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (!characters.length || motionPreference.matches) {
      setDisplayedText(text)
      return
    }

    setDisplayedText('')
    let index = 0
    let timeoutId

    const typeNextCharacter = () => {
      index += 1
      setDisplayedText(characters.slice(0, index).join(''))

      if (index < characters.length) {
        timeoutId = window.setTimeout(typeNextCharacter, speed)
      }
    }

    const handleMotionPreferenceChange = (event) => {
      if (event.matches) {
        window.clearTimeout(timeoutId)
        setDisplayedText(text)
      }
    }

    motionPreference.addEventListener('change', handleMotionPreferenceChange)
    timeoutId = window.setTimeout(typeNextCharacter, speed)

    return () => {
      window.clearTimeout(timeoutId)
      motionPreference.removeEventListener(
        'change',
        handleMotionPreferenceChange
      )
    }
  }, [text, speed])

  return (
    <div className="typewrite">
      <span className="typewrite-sr-only">{prefix}{text}</span>
      <span className="typewrite-visual" aria-hidden="true">
        <span className="typewrite-prompt">{prefix}</span>
        <span>{displayedText}</span>
        <span
          className={`typewrite-cursor${isComplete ? ' is-complete' : ''}`}
        />
      </span>
    </div>
  )
}

export default Typewriter
