import React from 'react'

/**
 * Section-komponentti
 * Props:
 * - title: otsikko (string)
 * - content: sisältö (JSX | string[] | object[])
 */
const renderContent = (item, idx) => {
  if (typeof item === 'string') {
    return <p key={idx}>{item}</p>
  }

  if (item?.type === 'heading') {
    return <h5 key={idx}>{item.text}</h5>
  }

  if (item?.type === 'paragraph') {
    return <p key={idx}>{item.text}</p>
  }

  if (item?.type === 'list') {
    return (
      <ul key={idx}>
        {item.items.map((listItem, listIdx) => (
          <li key={listIdx}>{listItem}</li>
        ))}
      </ul>
    )
  }

  if (Array.isArray(item)) {
    return item.map((subItem, subIdx) => renderContent(subItem, `${idx}-${subIdx}`))
  }

  return null
}

const Section = ({ title, content }) => {
  return (
    <div className="saannot-section">
      <h2>{title}</h2>
      <div className="saannot-content">
        {Array.isArray(content)
          ? content.map((item, idx) => renderContent(item, idx))
          : content}
      </div>
    </div>
  )
}

export default Section
