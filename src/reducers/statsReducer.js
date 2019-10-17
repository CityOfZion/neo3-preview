import { REQUEST_STATS, REQUEST_STATS_SUCCESS } from '../actions/statsActions'

export default (
  state = {
    isLoading: false,
    stats: {},
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_STATS:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case REQUEST_STATS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        stats: action.json,
      })
    default:
      return state
  }
}
