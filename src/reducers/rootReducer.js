import { combineReducers } from 'redux'
import blockReducer from './blockReducer'
import mobileMenuReducer from './mobileMenuReducer'

export default combineReducers({
  blocks: blockReducer,
  menu: mobileMenuReducer,
})
