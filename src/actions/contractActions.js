import { GENERATE_BASE_URL } from '../constants'

export const REQUEST_CONTRACT = 'REQUEST_CONTRACT'
export const requestContract = indexOrHash => dispatch => {
  dispatch({
    type: REQUEST_CONTRACT,
    indexOrHash,
  })
}

export const REQUEST_CONTRACTS = 'REQUEST_CONTRACTS'
export const requestContracts = page => dispatch => {
  dispatch({
    type: REQUEST_CONTRACTS,
    page,
  })
}

export const REQUEST_CONTRACT_SUCCESS = 'REQUEST_CONTRACT_SUCCESS'
export const requestContractSuccess = (blockHeight, json) => dispatch => {
  dispatch({
    type: REQUEST_CONTRACT_SUCCESS,
    blockHeight,
    json,
    receivedAt: Date.now(),
  })
}

export const REQUEST_CONTRACTS_SUCCESS = 'REQUEST_CONTRACTS_SUCCESS'
export const requestContractsSuccess = (page, json) => dispatch => {
  dispatch({
    type: REQUEST_CONTRACTS_SUCCESS,
    page,
    json,
    receivedAt: Date.now(),
  })
}

export const REQUEST_CONTRACT_ERROR = 'REQUEST_CONTRACT_ERROR'
export const requestContractError = (blockHeight, error) => dispatch => {
  dispatch({
    type: REQUEST_CONTRACT_ERROR,
    blockHeight,
    error,
    receivedAt: Date.now(),
  })
}

export const REQUEST_CONTRACTS_ERROR = 'REQUEST_CONTRACTS_ERROR'
export const requestContractsError = (page, error) => dispatch => {
  dispatch({
    type: REQUEST_CONTRACTS_ERROR,
    page,
    error,
    receivedAt: Date.now(),
  })
}

export function shouldFetchContract(state, index) {
  const block = state.contracts.cached[index]
  if (!block) {
    return true
  } else if (state.contracts.isLoading) {
    return false
  }
  return false
}

export function fetchContract(hash) {
  return async (dispatch, getState) => {
    if (shouldFetchContract(getState(), hash)) {
      dispatch(requestContract(hash))
      try {
        const response = await fetch(
          `${GENERATE_BASE_URL()}/get_contract/${hash}`,
        )
        const json = await response.json()
        dispatch(requestContractSuccess(hash, json))
      } catch (e) {
        dispatch(requestContractError(hash, e))
      }
    }
  }
}

export function fetchContracts(page = 1) {
  return async (dispatch, getState) => {
    try {
      dispatch(requestContracts(page))
      const response = await fetch(
        `${GENERATE_BASE_URL()}/get_contracts/${page}`,
      )
      const json = await response.json()
      console.log({ json })
      dispatch(requestContractsSuccess(page, json))
    } catch (e) {
      dispatch(requestContractError(page, e))
    }
  }
}
