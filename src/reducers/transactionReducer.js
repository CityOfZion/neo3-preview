import {
  REQUEST_TRANSACTION,
  REQUEST_TRANSACTION_SUCCESS,
  REQUEST_TRANSACTIONS,
  REQUEST_TRANSACTIONS_SUCCESS,
} from '../actions/transactionActions'

export default (
  state = {
    isLoading: false,
    cached: {},
    list: [],
    cursor: 1,
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_TRANSACTION:
      return Object.assign({}, state, {
        isLoading: true,
        transaction: state.cached[action.indexOrHash],
      })
    case REQUEST_TRANSACTION_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        transaction: action.json,
        lastUpdated: action.receivedAt,
        // cache both the index and the hash in memory
        cached: {
          [action.json.hash]: action.json,
        },
      })
    case REQUEST_TRANSACTIONS:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case REQUEST_TRANSACTIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        list: action.json.transactions,
        lastUpdated: action.receivedAt,
        cursor: action.json.last_evaluated_key,
      })
    default:
      return state
  }
}
