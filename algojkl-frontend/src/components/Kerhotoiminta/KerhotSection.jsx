import React from 'react'
/**
 * KerhotSection
 * 
 * Tämä komponentti renderöi listan kerhoista. 
 * Propsit:
 * - kerhot: array, jossa jokainen kerho sisältää:
 *   - name: kerhon nimi
 *   - description: kuvaus kerhosta
 *   - linkHref: linkki Telegram-ryhmään
 *   - linkText: linkin teksti
 */

const KerhotSection = ({ kerhot }) => (
  <div>
    <h3>Algon kerho(t)</h3>
    {kerhot.map((k, idx) => (
      <div key={idx}>
        <p>
          <strong>{k.name}</strong>
          <br />
          {k.description}
          <br /><br />
          Lisätietoja kerhosta sekä peliaikatauluista saat liittymällä kerhon Telegram-ryhmään:
          <a href={k.linkHref} target="_blank" rel="noopener noreferrer">{k.linkText}</a>
        </p>
      </div>
    ))}
  </div>
)

export default KerhotSection
