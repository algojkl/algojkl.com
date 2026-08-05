const YhteydenottoSection = ({ title, children, headingLevel = 'h2' }) => {
  const HeadingTag = headingLevel

  return (
    <section className="yhteydenotto-container">
      <h1>{title}</h1>
      <div className="yhteydenottoSection">{children}</div>
    </section>
  )
}

export default YhteydenottoSection
