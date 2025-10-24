import React from 'react'
import FooterFeedback from './FooterFeedback'
import FooterInfo from './FooterInfo'
import FooterNav from './FooterNav'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterInfo />
        <FooterNav />
      </div>
      <FooterFeedback />
    </footer>
  )
}

export default Footer
