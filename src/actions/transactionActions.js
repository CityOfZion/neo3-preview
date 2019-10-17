import { GENERATE_BASE_URL } from '../constants'

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
        const responses = await Promise.all([
          fetch(`${GENERATE_BASE_URL()}/get_transaction/${indexOrHash}`),
          fetch(`${GENERATE_BASE_URL()}/get_log/${indexOrHash}`),
        ])
        const mergedResponse = {}
        for (const response of responses) {
          const json = await response.json()
          Object.assign(mergedResponse, json)
        }

        dispatch(requestTransactionSuccess(indexOrHash, mergedResponse))
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

      const response = await fetch(
        `${GENERATE_BASE_URL()}/get_transactions/${nextPage}`,
      )
      const json = await response.json()

      dispatch(requestTransactionsSuccess(nextPage, json))
    } catch (e) {
      dispatch(requestTransactionError(nextPage, e))
    }
  }
}
