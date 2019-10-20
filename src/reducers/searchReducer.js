import {
  SEARCH_INPUT_ENTERED,
  SEARCH_INPUT_ENTERED_SUCCESS,
  SEARCH_INPUT_ENTERED_ERROR,
  CLEAR_SEARCH_INPUT_STATE,
  CLEAR_SEARCH_INPUT_ENTERED_ERROR,
} from '../actions/searchActions'

export default (
  state = {
    isSearching: false,
    searchType: null,
    searchValue: null,
    shouldClearSearch: false,
    error: false,
  },
  action,
) => {
  switch (action.type) {
    case SEARCH_INPUT_ENTERED:
      return Object.assign({}, state, {
        isSearching: true,
      })
    case SEARCH_INPUT_ENTERED_SUCCESS:
      return Object.assign({}, state, {
        isSearching: false,
        searchType: action.searchType,
        lastUpdated: action.receivedAt,
        searchValue: action.search,
        shouldClearSearch: true,
      })
    case SEARCH_INPUT_ENTERED_ERROR:
      return Object.assign({}, state, {
        isSearching: false,
        error: true,
      })
    case CLEAR_SEARCH_INPUT_ENTERED_ERROR:
      return Object.assign({}, state, {
        isSearching: false,
        error: false,
      })
    case CLEAR_SEARCH_INPUT_STATE:
      return Object.assign({}, state, {
        isSearching: false,
        searchType: null,
        searchValue: null,
        shouldClearSearch: false,
        error: false,
      })
    default:
      return state
  }
}
