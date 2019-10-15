import {
  REQUEST_CONTRACT,
  REQUEST_CONTRACT_SUCCESS,
  REQUEST_CONTRACTS,
  REQUEST_CONTRACTS_SUCCESS,
} from '../actions/contractActions'

export default (
  state = {
    isLoading: false,
    cached: {},
    list: [],
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_CONTRACT:
      return Object.assign({}, state, {
        isLoading: true,
        contract: state.cached[action.indexOrHash],
      })
    case REQUEST_CONTRACT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        contract: action.json,
        lastUpdated: action.receivedAt,
        // cache both the index and the hash in memory
        cached: {
          [action.json.hash]: action.json,
        },
      })
    case REQUEST_CONTRACTS:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case REQUEST_CONTRACTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        list: action.json,
        lastUpdated: action.receivedAt,
      })
    default:
      return state
  }
}
