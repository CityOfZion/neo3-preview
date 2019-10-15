export const REQUEST_TRANSACTION = 'REQUEST_TRANSACTION'
export const requestTransaction = indexOrHash => dispatch => {
  dispatch({
    type: REQUEST_TRANSACTION,
    indexOrHash,
  })
}

export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS'
export const requestTransactions = page => dispatch => {
  dispatch({
    type: REQUEST_TRANSACTIONS,
    page,
  })
}

export const REQUEST_TRANSACTION_SUCCESS = 'REQUEST_TRANSACTION_SUCCESS'
export const requestTransactionSuccess = (hash, json) => dispatch => {
  dispatch({
    type: REQUEST_TRANSACTION_SUCCESS,
    hash,
    json,
    receivedAt: Date.now(),
  })
}

export const REQUEST_TRANSACTIONS_SUCCESS = 'REQUEST_TRANSACTIONS_SUCCESS'
export const requestTransactionsSuccess = (page, json) => dispatch => {
  dispatch({
    type: REQUEST_TRANSACTIONS_SUCCESS,
    page,
    json,
    receivedAt: Date.now(),
  })
}

export const REQUEST_TRANSACTION_ERROR = 'REQUEST_TRANSACTION_ERROR'
export const requestTransactionError = (hash, error) => dispatch => {
  dispatch({
    type: REQUEST_TRANSACTION_ERROR,
    hash,
    error,
    receivedAt: Date.now(),
  })
}

export const REQUEST_TRANSACTIONS_ERROR = 'REQUEST_TRANSACTIONS_ERROR'
export const requestTransactionsError = (page, error) => dispatch => {
  dispatch({
    type: REQUEST_TRANSACTIONS_ERROR,
    page,
    error,
    receivedAt: Date.now(),
  })
}

export function shouldFetchTransaction(state, index) {
  const transaction = state.transactions.cached[index]
  if (!transaction) {
    return true
  } else if (state.transactions.isLoading) {
    return false
  }
  return false
}

export function fetchTransaction(indexOrHash = 1) {
  return async (dispatch, getState) => {
    if (shouldFetchTransaction(getState(), indexOrHash)) {
      dispatch(requestTransaction(indexOrHash))
      try {
        const generateApiUrl = index =>
          `https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_contract/${indexOrHash}`

        const response = await fetch(generateApiUrl(indexOrHash))
        const json = await response.json()
        dispatch(requestTransactionSuccess(indexOrHash, json))
      } catch (e) {
        dispatch(requestTransactionError(indexOrHash, e))
      }
    }
  }
}

export function fetchTransactions(page) {
  return async (dispatch, getState) => {
    const { cursor } = getState().transactions

    const nextPage = page ? page : cursor

    try {
      dispatch(requestTransactions(nextPage))

      const generateApiUrl = page =>
        `https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_transactions/${nextPage}`

      const response = await fetch(generateApiUrl(nextPage))
      const json = await response.json()
      console.log({ json })
      dispatch(requestTransactionsSuccess(nextPage, json))
    } catch (e) {
      dispatch(requestTransactionError(nextPage, e))
    }
  }
}
