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

export function fetchContract(indexOrHash = 1) {
  return async (dispatch, getState) => {
    if (shouldFetchContract(getState(), indexOrHash)) {
      dispatch(requestContract(indexOrHash))
      try {
        const generateApiUrl = index =>
          `https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_contract/${indexOrHash}`

        const response = await fetch(generateApiUrl(indexOrHash))
        const json = await response.json()
        dispatch(requestContractSuccess(indexOrHash, json))
      } catch (e) {
        dispatch(requestContractError(indexOrHash, e))
      }
    }
  }
}

export function fetchContracts(page = 1) {
  return async (dispatch, getState) => {
    try {
      dispatch(requestContracts(page))

      const generateApiUrl = page =>
        `https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_contracts/${page}`

      const response = await fetch(generateApiUrl(page))
      const json = await response.json()
      console.log({ json })
      dispatch(requestContractsSuccess(page, json))
    } catch (e) {
      dispatch(requestContractError(page, e))
    }
  }
}
