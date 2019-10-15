import React, { Fragment } from 'react'
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

import './App.css'

export default () => (
  <Fragment>
    <div className="content">
      <Router>
        <Navigation />
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
            <Route path="/" component={props => <LandingPage {...props} />} />
          </Switch>
        </div>
      </Router>
    </div>
    <Footer />
  </Fragment>
)
