import { isEmpty } from 'lodash-es'

import { GENERATE_BASE_URL, SEARCH_TYPES } from '../constants'

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

export async function handleSearchInput(search) {
  return async (dispatch, getState) => {
    dispatch(searchInputEntered(search))
    try {
      const searchType = await determineSearchType(search)
      // TODO: returning the json here would prevent duplicate requests
      if (searchType)
        return dispatch(searchInputEnteredSuccess(search, searchType))
    } catch (e) {
      dispatch(searchInputEnteredError(search, e))
    }
  }
}

export async function determineSearchType(search) {
  let searchType
  const isPossibleTxOrContract = search.includes('0x')

  if (!isPossibleTxOrContract) {
    let balanceResponse = await fetch(
      `${GENERATE_BASE_URL()}/get_balance/${search}`,
    )
    balanceResponse = await balanceResponse.json()
    if (balanceResponse.length) {
      searchType = SEARCH_TYPES.ADDRESS
      return searchType
    }

    let contractResponse = await fetch(
      `${GENERATE_BASE_URL()}/get_contract/${search}`,
    )
    contractResponse = await contractResponse.json()
    if (!isEmpty(contractResponse)) searchType = SEARCH_TYPES.CONTRACT
    return searchType
  }
}
