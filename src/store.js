import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

export const INITIAL_STATE = {
  blocks: {
    isLoading: false,
    items: [],
    cached: {},
  },
  menu: {
    open: false,
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
