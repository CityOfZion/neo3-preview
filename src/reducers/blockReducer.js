import { REQUEST_BLOCK, REQUEST_BLOCK_SUCCESS } from '../actions/blockActions'

export default (
  state = {
    isLoading: false,
    cached: {},
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_BLOCK:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case REQUEST_BLOCK_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        json: action.json,
        lastUpdated: action.receivedAt,
        cached: {
          [action.blockHeight]: action.json,
        },
      })
    default:
      return state
  }
}
