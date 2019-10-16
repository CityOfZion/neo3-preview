import { combineReducers } from 'redux'
import blockReducer from './blockReducer'
import mobileMenuReducer from './mobileMenuReducer'
import contractReducer from './contractReducer'
import transactionReducer from './transactionReducer'
import addressReducer from './addressReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  blocks: blockReducer,
  contracts: contractReducer,
  transactions: transactionReducer,
  menu: mobileMenuReducer,
  address: addressReducer,
  search: searchReducer,
})
