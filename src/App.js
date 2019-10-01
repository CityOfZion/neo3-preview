import React from 'react'
import { connect } from 'react-redux'

import { fetchBlock } from './actions/blockActions'
import logo from './logo.svg'
import './App.css'

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  fetchBlock: index => dispatch(fetchBlock(index)),
})

function App(props) {
  return (
    <div className="App">
      <button onClick={() => props.fetchBlock(1)}>Test redux action</button>
      <pre>{JSON.stringify(props)}</pre>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
