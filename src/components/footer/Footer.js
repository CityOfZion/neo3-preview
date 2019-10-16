import React from 'react'

import { PreviewLogo } from '../navigation/Navigation'
import facebookIcon from '../../images/social-icons/fb-social.svg'
import twitterIcon from '../../images/social-icons/twitter-social.svg'
import linkedinIcon from '../../images/social-icons/linkedin-social.svg'
import telegramIcon from '../../images/social-icons/telegram-social.svg'

import './Footer.css'

export default () => {
  return (
    <footer className="footer">
      <div className="footer-flex-container">
        <PreviewLogo />
      </div>
      <span className="footer-flex-container">© 2019 City Of Zion</span>
      <div id="footer-social-icons" className="footer-flex-container">
        <img alt="facebook-icon" src={facebookIcon} />
        <img alt="twitter-icon" src={twitterIcon} />
        <img alt="linkedin-icon" src={linkedinIcon} />
        <img alt="telegram-icon" src={telegramIcon} />
      </div>
    </footer>
  )
}
