import React from 'react'
import { useTranslation } from 'react-i18next'
/**
 * FooterInfo
 *
 * Tämä komponentti näyttää footerissa yhdistyksen perustiedot:
 * - Nimi
 * - Yhteystiedot (osoite, sähköposti)
 * - Y-tunnus
 * - Tekijänoikeustiedot
 *
 */
const FooterInfo = () => {
  const { t } = useTranslation('common')

  return (
    <div className="footer-info">
      <h2>{t('nav.brand')}</h2>
      <p>{t('footer.contactTitle')}</p>
      <p>{t('footer.addressLine1')}</p>
      <p>{t('footer.addressLine2')}</p>
      <p>{t('footer.email')}</p>
      <p>{t('footer.vat')}</p>
      <p>
        <strong>© {t('nav.brand')}, 2025</strong>
      </p>
    </div>
  )
}

export default FooterInfo
