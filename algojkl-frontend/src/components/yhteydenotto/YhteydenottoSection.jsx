const YhteydenottoSection = ({ title, children }) => {
  return (
    <section className="yhteydenotto-container">
      <h1>{title}</h1>
      <div className="yhteydenottoSection">{children}</div>
    </section>
  )
}

export default YhteydenottoSection
