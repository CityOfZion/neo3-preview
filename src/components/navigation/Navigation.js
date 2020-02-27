import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import ThemeToggle from '../toggle/ThemeToggle'
import noScroll from 'no-scroll'

import cozLogo from '../../images/coz-logo.svg'
import cozLogoMobile from '../../images/coz-logo-mobile.png'
import menuIcon from '../../images/menu.svg'
import Search from '../search/Search'

import './Navigation.scss'

const activeStyle = {
  fontWeight: 'bold',
  color: 'var(--tertiary-color)',
}

export const PreviewLogo = () => (
  <React.Fragment>
    <div id="desktop-coz-logo" className="logo-sub-text" to="/">
      <h3> Neo3 Preview Explorer</h3>
      <p>
        Brought to you by: <img alt="coz-logo" src={cozLogo}></img>
      </p>
    </div>
    <div id="mobile-coz-logo" to="/">
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
  const {
    mobileMenuIsOpen,
    openMenu,
    closeMenu,
    handleSearchInput,
    shouldClearSearch,
    error,
    clearSearchInputError,
    isSearching,
  } = props

  // Prevent the background from scrolling if mobile nav is open
  React.useEffect(() => {
    if (mobileMenuIsOpen) {
      noScroll.on()
    } else {
      noScroll.off()
    }
  }, [mobileMenuIsOpen])

  return (
    <React.Fragment>
      <Menu
        customBurgerIcon={
          <img
            onClick={openMenu}
            id="burger-menu-icon"
            src={menuIcon}
            alt="burger-menu"
          />
        }
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
            error={error}
            handleSearch={search => handleSearchInput(search)}
            clearSearchInputError={clearSearchInputError}
            shouldClearSearch={shouldClearSearch}
            isSearching={isSearching}
          />
        </div>
      </Menu>
      <nav id="navigation">
        <Link id="coz-logo-home-link" to="/">
          <div id="logo">
            <span id="neo-3-logo" alt="logo" ></span>
            <div id="logo-spacer" />

            <PreviewLogo />
          </div>
        </Link>
        <div id="desktop-links-and-search-container">
          <Search
            error={error}
            clearSearchInputError={clearSearchInputError}
            handleSearch={search => handleSearchInput(search)}
            shouldClearSearch={shouldClearSearch}
            isSearching={isSearching}
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
