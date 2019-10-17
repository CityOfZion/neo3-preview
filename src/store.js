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
  address: {
    isLoading: false,
    requestedAddress: null,
    balance: [],
    list: [],
    transferHistory: [],
    transferHistoryPage: 1,
  },
  menu: {
    open: false,
  },
  search: {
    isSearching: false,
    searchType: null,
  },
  stats: {
    // height: 138317,
    // transactions: 197,
    // addresses: 38,
    // assets: 3,
    // contracts: 19,
    // transfers: 168,
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
