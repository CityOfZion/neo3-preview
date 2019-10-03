import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'
import { Navigation } from './components/navigation/Navigation'
import { fetchBlock } from './actions/blockActions'
import LandingPage from './containers/LandingPage'
import Transactions from './containers/Transactions'
import Blocks from './containers/Blocks'
import Block from './containers/Block'
import './App.css'

export default () => (
  <Fragment>
    <div className="content">
      <Router>
        <Navigation />

        <div className="router-content">
          <Switch>
            <Route path="/transactions">
              <Transactions />
            </Route>
            <Route
              path="/blocks/:id"
              component={props => <Block {...props} />}
            />

            <Route path="/blocks">
              <Blocks />
            </Route>

            <Route path="/" component={props => <LandingPage {...props} />} />
          </Switch>
        </div>
      </Router>
    </div>
    <Footer />
  </Fragment>
)
