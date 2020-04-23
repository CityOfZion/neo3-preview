import { isEmpty } from 'lodash-es'

import { GENERATE_BASE_URL, SEARCH_TYPES } from '../constants'
import { closeMenu } from './mobileMenuActions'

export const SEARCH_INPUT_ENTERED = 'SEARCH_INPUT_ENTERED'
export const searchInputEntered = search => dispatch => {
  dispatch({
    type: SEARCH_INPUT_ENTERED,
    search,
  })
}

export const SEARCH_INPUT_ENTERED_SUCCESS = 'SEARCH_INPUT_ENTERED_SUCCESS'
export const searchInputEnteredSuccess = (search, searchType) => (dispatch) => {
  dispatch({
    type: SEARCH_INPUT_ENTERED_SUCCESS,
    searchType,
    search,
    receivedAt: Date.now(),
  })
}

export const SEARCH_INPUT_ENTERED_ERROR = 'SEARCH_INPUT_ENTERED_ERROR'
export const searchInputEnteredError = (search, error) => dispatch => {
  dispatch({
    type: SEARCH_INPUT_ENTERED_ERROR,
    error,
    receivedAt: Date.now(),
  })
}

export const CLEAR_SEARCH_INPUT_STATE = 'CLEAR_SEARCH_INPUT'
export const clearSearchInputState = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH_INPUT_STATE,
  })
}

export const CLEAR_SEARCH_INPUT_ENTERED_ERROR =
  'CLEAR_SEARCH_INPUT_ENTERED_ERROR'
export const clearSearchInputError = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH_INPUT_ENTERED_ERROR,
  })
}

export function handleSearchInput(rawSearch) {
  const search = rawSearch.replace(',', '')
  return async (dispatch, getState) => {
    dispatch(searchInputEntered(search))

    try {
      const searchType = await determineSearchType(search)
      // TODO: returning the json here would prevent duplicate requests
      // but will introduce added complexity
      if (searchType) {
        dispatch(closeMenu())
        dispatch(searchInputEnteredSuccess(search, searchType))
        return dispatch(clearSearchInputState())
      }

      return dispatch(searchInputEnteredError(search, 'No results found.'))
    } catch (e) {
      dispatch(searchInputEnteredError(search, e))
    }
  }
}

export async function determineSearchType(search) {
  const isPossibleTxOrContract = search.includes('0x')

  const invokePromiseAndIgnoreError = url =>
    fetch(url)
      .then(result => result && result.json())
      .catch(e => undefined)

  const urls = []

  if (isPossibleTxOrContract) {
    urls.push(
      ...[
        `${GENERATE_BASE_URL()}/get_transaction/${search}`,
        `${GENERATE_BASE_URL()}/get_contract/${search}`,
      ],
    )
  } else {
    urls.push(
      ...[
        `${GENERATE_BASE_URL()}/get_transfer_history/${search}/1`,
        `${GENERATE_BASE_URL()}/get_block/${search}`,
      ],
    )
  }

  const results = await Promise.all(
    urls
      .map(url => invokePromiseAndIgnoreError.bind(null, url))
      .map(req => req()),
  )

  if (isPossibleTxOrContract) {
    const [transaction, contract] = results
    if (!isEmpty(transaction)) return SEARCH_TYPES.TRANSACTION
    if (contract) return SEARCH_TYPES.CONTRACT
  } else {
    const [history, block] = results
    if (history && history.items && history.items.length)
      return SEARCH_TYPES.ADDRESS
    if (block) return SEARCH_TYPES.BLOCK
  }
}
