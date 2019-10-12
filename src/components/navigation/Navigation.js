import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import neoLogo from '../../images/neo-logo.svg'
import cozLogo from '../../images/coz-logo.svg'

import './Navigation.css'

const activeStyle = {
  fontWeight: 'bold',
  color: 'var(--green)',
}

export const PreviewLogo = () => (
  <div className="logo-sub-text" to="/">
    <h3> NEO3 Preview Explorer</h3>
    <p>
      Brought to you by: <img alt="coz-logo" src={cozLogo}></img>
    </p>
  </div>
)

export const Navigation = () => {
  return (
    <nav id="desktop_navigation">
      <div id="desktop_logo">
        <img src={neoLogo} alt="logo" />
        <div id="logo-spacer" />
        <Link className="logo-sub-text" to="/">
          <PreviewLogo />
        </Link>
      </div>
      <div id="desktop_navigation_options">
        <NavLink activeStyle={activeStyle} to="/transactions">
          Transactions
        </NavLink>

        <NavLink activeStyle={activeStyle} to="/blocks">
          Blocks
        </NavLink>

        <NavLink activeStyle={activeStyle} to="/contracts">
          Contracts
        </NavLink>
      </div>
    </nav>
  )
}
