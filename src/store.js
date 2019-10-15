import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

export const INITIAL_STATE = {
  blocks: {
    isLoading: false,
    list: [],
    cached: {},
  },
  contracts: {
    isLoading: false,
    list: [],
    cached: {},
  },
  transactions: {
    isLoading: false,
    list: [],
    cached: {},
  },
  menu: {
    open: false,
  },
}

const loggerMiddleware = createLogger()

export default function configureStore(initialState = INITIAL_STATE) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, loggerMiddleware),
  )
}
