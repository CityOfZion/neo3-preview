import { GENERATE_BASE_URL } from '../constants'

export const REQUEST_STATS = 'REQUEST_STATS'
export const requestStats = indexOrHash => dispatch => {
  dispatch({
    type: REQUEST_STATS,
    indexOrHash,
  })
}

export const REQUEST_STATS_SUCCESS = 'REQUEST_STATS_SUCCESS'
export const requestStatsSuccess = json => dispatch => {
  dispatch({
    type: REQUEST_STATS_SUCCESS,
    json,
    receivedAt: Date.now(),
  })
}

export const REQUEST_STATS_ERROR = 'REQUEST_STATS_ERROR'
export const requestStatsError = error => dispatch => {
  dispatch({
    type: REQUEST_STATS_ERROR,
    error,
    receivedAt: Date.now(),
  })
}

export function shouldFetchStats(state, index) {
  const data = state.stats.stats
  if (!data) {
    return true
  } else if (state.stats.isLoading) {
    return false
  }
  return false
}

export function fetchStats(hash) {
  return async (dispatch, getState) => {
    if (shouldFetchStats(getState())) {
      dispatch(requestStats(hash))
      try {
        const response = await fetch(`${GENERATE_BASE_URL()}/get_stats`)
        const json = await response.json()
        dispatch(requestStatsSuccess(json))
      } catch (e) {
        dispatch(requestStatsError(hash, e))
      }
    }
  }
}
