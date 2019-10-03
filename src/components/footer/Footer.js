import React from 'react'

import { PreviewLogo } from '../navigation/Navigation'
import facebookIcon from '../../images/fb-social.svg'
import twitterIcon from '../../images/twitter-social.svg'
import linkedinIcon from '../../images/linkedin-social.svg'
import telegramIcon from '../../images/telegram-social.svg'

import './Footer.css'

export default () => {
  return (
    <footer className="footer">
      <div class="footer-flex-container">
        <PreviewLogo />
      </div>
      <span class="footer-flex-container">© 2019 City Of Zion</span>
      <div id="footer-social-icons" class="footer-flex-container">
        <img src={facebookIcon} />
        <img src={twitterIcon} />
        <img src={linkedinIcon} />
        <img src={telegramIcon} />
      </div>
    </footer>
  )
}
