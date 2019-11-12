import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import App from './App'
import { INITIAL_STATE } from './store'

const createStore = configureStore([thunk])
const store = createStore(INITIAL_STATE)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
