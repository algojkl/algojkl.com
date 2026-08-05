import React from 'react'
import { useTranslation } from 'react-i18next'
/**
 * FooterFeedback
 *
 * Tämä komponentti vastaa footerin palautelomake-osaa.
 * Se sisältää otsikon, kuvauksen ja linkin Google Forms -lomakkeeseen.
 * Linkki avautuu uuteen välilehteen.
 *
 * Luokat:
 * - feedback-comms: koko palautekomponentin container
 * - feedback: yksittäisen palautelomake-osan sisältö
 */
const FooterFeedback = () => {
  const { t } = useTranslation('common')

  return (
    <div className="feedback-comms">
      <div className="feedback">
        <h3>{t('footer.feedbackTitle')}</h3>
        <p>{t('footer.feedbackDescription')}</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd_uGBf6NpWvJi_v3o7w3iJ2flnCMrxnNWMi6hIgMhD3kPBAw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('footer.feedbackLink')}
        </a>
      </div>
    </div>
  )
}

export default FooterFeedback
