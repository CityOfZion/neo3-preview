import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

import neoLogo from '../../images/neo-logo.svg'
import cozLogo from '../../images/coz-logo.svg'
import cozLogoMobile from '../../images/coz-logo-mobile.png'
import menuIcon from '../../images/menu.svg'
import Search from '../search/Search'

import './Navigation.scss'
import { SEARCH_TYPES } from '../../constants'

const activeStyle = {
  fontWeight: 'bold',
  color: 'var(--green)',
}

export const PreviewLogo = () => (
  <React.Fragment>
    <div id="desktop-coz-logo" className="logo-sub-text" to="/">
      <h3> NEO3 Preview Explorer</h3>
      <p>
        Brought to you by: <img alt="coz-logo" src={cozLogo}></img>
      </p>
    </div>
    <div id="mobile-coz-logo" className="logo-sub-text" to="/">
      <img alt="coz-logo" src={cozLogoMobile}></img>
    </div>
  </React.Fragment>
)

export const NavigationLinks = ({ isMobile = false, closeMenu }) => (
  <React.Fragment>
    <NavLink
      className={isMobile ? 'bm-item' : ''}
      activeStyle={activeStyle}
      to="/transactions"
      isActive={(match, location) => {
        if (location.pathname.includes('transaction')) {
          return true
        }
        return false
      }}
      onClick={closeMenu}
    >
      Transactions
    </NavLink>

    <NavLink
      className={isMobile ? 'bm-item' : ''}
      activeStyle={activeStyle}
      to="/blocks"
      isActive={(match, location) => {
        if (location.pathname.includes('block')) {
          return true
        }
        return false
      }}
      onClick={closeMenu}
    >
      Blocks
    </NavLink>

    <NavLink
      className={isMobile ? 'bm-item' : ''}
      activeStyle={activeStyle}
      isActive={(match, location) => {
        if (location.pathname.includes('contract')) {
          return true
        }
        return false
      }}
      to="/contracts"
      onClick={closeMenu}
    >
      Contracts
    </NavLink>
  </React.Fragment>
)

export const Navigation = props => {
  console.log({ props })
  const {
    mobileMenuIsOpen,
    openMenu,
    closeMenu,
    handleSearchInput,

    shouldClearSearch,
  } = props

  return (
    <React.Fragment>
      <Menu
        customBurgerIcon={<img src={menuIcon} alt="burger-menu" />}
        width={'100%'}
        id="mobile-navigation"
        isOpen={mobileMenuIsOpen}
        onStateChange={state => {
          if (state.isOpen) return openMenu()
          return closeMenu()
        }}
      >
        <div id="close-mobile-menu-button" onClick={closeMenu}>
          Close
        </div>
        <div className="mobile-navigation-links-container">
          <NavigationLinks closeMenu={closeMenu} isMobile />
          <Search
            handleSearch={search => handleSearchInput(search)}
            shouldClearSearch={shouldClearSearch}
          />
        </div>
      </Menu>
      <nav id="navigation">
        <div id="logo">
          <img id="neo-3-logo" src={neoLogo} alt="logo" />
          <div id="logo-spacer" />
          <Link className="logo-sub-text" to="/">
            <PreviewLogo />
          </Link>
        </div>
        <div id="desktop-links-and-search-container">
          <Search
            handleSearch={search => handleSearchInput(search)}
            shouldClearSearch={shouldClearSearch}
          />
          <div id="desktop_navigation_options">
            <NavigationLinks />
          </div>
        </div>
      </nav>
      <div id="nav-bottom-border" />
    </React.Fragment>
  )
}
