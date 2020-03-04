import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'

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
import { applyTheme, DARK_THEME } from './components/toggle/ThemeToggle'
import withThemeData from './hoc/withThemeData'
import './App.css'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return null
}

const RetrieveTheme = withThemeData(({ setTheme }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('neo3-preview-theme')
    applyTheme(savedTheme || DARK_THEME, setTheme)
  }, [setTheme])

  return null
})

const App = () => {
  return (
    <Fragment>
      <div className="content">
        <Router>
          <Navigation />
          <ScrollToTop />
          <RetrieveTheme />
          <div className="router-content">
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
  )
}

export default App
