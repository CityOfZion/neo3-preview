import React from 'react'

import { PreviewLogo } from '../navigation/Navigation'
import ThemeToggle from '../toggle/ThemeToggle'
import twitterIcon from '../../images/social-icons/twitter-social.svg'
import githubIcon from '../../images/social-icons/github-social.svg'
import slackIcon from '../../images/social-icons/slack-social.svg'

import './Footer.scss'

export default () => {
  return (
    <footer className="footer">
      <div className="footer-flex-container">
        <PreviewLogo />
      </div>
      <span className="footer-flex-container">© 2020 City Of Zion</span>
      <div id="footer-social-icons" className="footer-flex-container">
        <ThemeToggle />
        <a
          href="https://twitter.com/coz_official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="twitter-icon" src={twitterIcon} />
        </a>
        <a
          href="https://github.com/CityOfZion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="github-icon" src={githubIcon} />
        </a>
        <a
          href="https://join.slack.com/t/cityofzion/shared_invite/enQtMjcwOTUxNDc1ODU5LWFhNzY1NWEyZTgyNWUyMTJiY2UwZTI3ZjlmMmI1ZDI1NDU1M2U0N2NkYjc2MjhhZGEyY2Q5YjJlZjQyYTkxMzU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="slack-icon" src={slackIcon} />
        </a>
      </div>
    </footer>
  )
}
