import React, { useState, useEffect } from 'react'

const Typewriter = ({ text = '', speed = 45 }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (!text) return
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        const nextChar = text[index] ?? ''
        setDisplayedText((prev) => prev + nextChar)
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <p className="typewrite">{displayedText}</p>
}

export default Typewriter
