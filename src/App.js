import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Navigation from './components/navigation'
import LandingPage from './containers/landing-page/LandingPage'
import Transactions from './containers/transaction/Transactions'
import Blocks from './containers/block/Blocks'
import Block from './containers/block/Block'
import Contracts from './containers/contract/Contracts'
import Contract from './containers/contract/Contract'
import Transaction from './containers/transaction/Transaction'
import Address from './containers/address/Address'
import GettingStarted from './containers/getting-started/GettingStarted'
import './App.css'
import withThemeData from './hoc/withThemeData'
import { applyTheme, DARK_THEME } from './components/toggle/ThemeToggle'
import usePrevious from './hooks/userPrevious'

// Causes the router to scroll to the top of the page
// on any route change but not theme changes
const ScrollToTop = ({ theme, ...otherProps }) => {
  const previousProps = usePrevious({ theme }) || {}
  useEffect(() => {
    if (previousProps.theme !== theme) {
      return
    }
    return window.scrollTo(0, 0)
  }, [otherProps, theme, previousProps.theme])

  return null
}

const App = ({ theme, setTheme }) => {
  const { mode } = theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('neo3-preview-theme')
    applyTheme(savedTheme || DARK_THEME, setTheme)
  }, [setTheme])

  return mode ? (
    <Fragment>
      <div className="content">
        <Router>
          <Navigation />
          <div className="router-content">
            <Route
              component={props => <ScrollToTop {...props} theme={theme} />}
            />
            <Switch>
              <Route
                path="/transactions"
                component={props => <Transactions {...props} />}
              />
              <Route
                path="/transaction/:id"
                component={props => <Transaction {...props} />}
              />
              <Route
                path="/block/:id"
                component={props => <Block {...props} />}
              />
              <Route
                path="/blocks/:page"
                component={props => <Blocks {...props} />}
                exact
              />
              <Route
                path="/blocks"
                component={props => <Blocks {...props} />}
                exact
              />
              <Route
                path="/contract/:id"
                component={props => <Contract {...props} />}
              />
              <Route
                path="/contracts/:page"
                component={props => <Contracts {...props} />}
                exact
              />
              <Route
                path="/contracts"
                component={props => <Contracts {...props} />}
                exact
              />
              <Route
                path="/address/:id"
                component={props => <Address {...props} />}
              />
              <Route
                path="/getting-started"
                component={props => <GettingStarted {...props} />}
              />
              <Route path="/" component={props => <LandingPage {...props} />} />
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </Fragment>
  ) : (
    <div />
  )
}

export default withThemeData(App)
