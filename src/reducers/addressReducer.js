import {
  REQUEST_ADDRESS,
  REQUEST_ADDRESS_SUCCESS,
  REQUEST_ADDRESS_TRANSFER_HISTORY,
  REQUEST_ADDRESS_TRANSFER_HISTORY_SUCCESS,
} from '../actions/addressActions'

export default (
  state = {
    isLoading: false,
    transferHistoryLoading: false,
    requestedAddress: null,
    balance: [],
    list: [],
    transferHistory: [],
    transferHistoryPage: 1,
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_ADDRESS:
      return Object.assign({}, state, {
        isLoading: true,
        transferHistory: [],
      })
    case REQUEST_ADDRESS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        requestedAddress: action.requestedAddress,
        balance: action.json,
        lastUpdated: action.receivedAt,
      })
    case REQUEST_ADDRESS_TRANSFER_HISTORY:
      return Object.assign({}, state, {
        transferHistoryLoading: true,
      })
    case REQUEST_ADDRESS_TRANSFER_HISTORY_SUCCESS:
      return Object.assign({}, state, {
        transferHistoryLoading: false,
        transferHistory: action.json,
        lastUpdated: action.receivedAt,
        transferHistoryPage: action.transferHistoryPage,
      })

    default:
      return state
  }
}
