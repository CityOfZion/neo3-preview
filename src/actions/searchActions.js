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
export const searchInputEnteredSuccess = (search, searchType) => dispatch => {
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
  let searchType

  const isPossibleTxOrContract = search.includes('0x')

  if (isPossibleTxOrContract) {
    let transaction = await fetch(
      `${GENERATE_BASE_URL()}/get_transaction/${search}`,
    )
    transaction = await transaction.json()
    if (!isEmpty(transaction)) {
      searchType = SEARCH_TYPES.TRANSACTION
      return searchType
    }

    let contractResponse = await fetch(
      `${GENERATE_BASE_URL()}/get_contract/${search}`,
    )
    contractResponse = await contractResponse.json()
    if (!isEmpty(contractResponse)) searchType = SEARCH_TYPES.CONTRACT
  } else {
    let balance = await fetch(
      `${GENERATE_BASE_URL()}/get_transfer_history/${search}/1`,
    ).catch(e => Promise.resolve())
    if (balance) {
      balance = await balance.json()
      if (balance.length) {
        searchType = SEARCH_TYPES.ADDRESS
        return searchType
      }
    }
    let block = await fetch(`${GENERATE_BASE_URL()}/get_block/${search}`)
    block = await block.json()
    if (!isEmpty(block)) {
      searchType = SEARCH_TYPES.BLOCK
      return searchType
    }
  }

  return searchType
}
