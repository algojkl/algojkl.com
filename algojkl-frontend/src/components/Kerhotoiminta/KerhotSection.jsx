import React from 'react'
import { useTranslation } from 'react-i18next'
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

const KerhotSection = ({ kerhot }) => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h3>{t('pages.kerhotoiminta.sectionTitle')}</h3>
      {kerhot.map((k, idx) => (
        <div key={idx}>
          <p>
            <strong>{k.name}</strong>
            <br />
            {k.description}
            <br />
            <br />
            {t('pages.kerhotoiminta.infoPrefix')}{' '}
            <a href={k.linkHref} target="_blank" rel="noopener noreferrer">
              {k.linkText}
            </a>
          </p>
        </div>
      ))}
    </div>
  )
}

export default KerhotSection
