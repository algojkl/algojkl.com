import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Join() {
  const { t } = useTranslation('common')

  const openLink = (url) => {
    window.open(url, '_blank')
  }

  return (
    <button
      type="button"
      className="join-button-cta"
      onClick={() =>
        openLink(
          'https://kide.app/memberships/2a49d555-1856-4ad7-bac6-b1838e7481fc'
        )
      }
    >
      {t('nav.joinButton')}
    </button>
  )
}
