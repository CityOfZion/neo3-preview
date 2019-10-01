import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const INITIAL_STATE = {
  blocks: {
    isLoading: false,
    isStaleData: false,
    items: [],
    selected: {},
    currentPage: 0,
  },
  // transactions: {
  //   isLoading: false,
  //   isStaleData: false,
  //   items: [],
  //   selected: {},
  //   currentPage: 0,
  // },
}

const loggerMiddleware = createLogger()

export default function configureStore(initialState = INITIAL_STATE) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, loggerMiddleware),
  )
}
