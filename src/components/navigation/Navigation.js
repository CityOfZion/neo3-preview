import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../logo.svg'

import './Navigation.css'

const activeStyle = {
  fontWeight: 'bold',
}

export default () => {
  return (
    <nav id="desktop_navigation">
      <div id="desktop_logo">
        <Link to="/">
          <img src={logo} alt="logo" />
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
