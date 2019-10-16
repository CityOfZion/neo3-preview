import { GENERATE_BASE_URL } from '../constants'

export const REQUEST_ADDRESS = 'REQUEST_ADDRESS'
export const requestAddress = requestedAddress => dispatch => {
  dispatch({
    type: REQUEST_ADDRESS,
    requestedAddress,
  })
}

export const REQUEST_ADDRESS_SUCCESS = 'REQUEST_ADDRESS_SUCCESS'
export const requestAddressSuccess = (requestedAddress, json) => dispatch => {
  dispatch({
    type: REQUEST_ADDRESS_SUCCESS,
    requestedAddress,
    json,
    receivedAt: Date.now(),
  })
}

export const REQUEST_ADDRESS_ERROR = 'REQUEST_ADDRESS_ERROR'
export const requestAddressError = (requestedAddress, error) => dispatch => {
  dispatch({
    type: REQUEST_ADDRESS_ERROR,
    requestedAddress,
    error,
    receivedAt: Date.now(),
  })
}

export const REQUEST_ADDRESS_TRANSFER_HISTORY =
  'REQUEST_ADDRESS_TRANSFER_HISTORY'
export const requestAddressTransferHistory = (
  requestedAddress,
  transferHistoryPage = 1,
) => dispatch => {
  dispatch({
    type: REQUEST_ADDRESS_TRANSFER_HISTORY,
    requestedAddress,
    transferHistoryPage,
  })
}

export const REQUEST_ADDRESS_TRANSFER_HISTORY_SUCCESS =
  'REQUEST_ADDRESS_TRANSFER_HISTORY_SUCCESS'
export const requestAddressTransferHistorySuccess = (
  requestedAddress,
  transferHistoryPage = 1,
  json,
) => dispatch => {
  dispatch({
    type: REQUEST_ADDRESS_TRANSFER_HISTORY_SUCCESS,
    requestedAddress,
    transferHistoryPage,
    json,
    receivedAt: Date.now(),
  })
}

export const REQUEST_ADDRESS_TRANSFER_HISTORY_ERROR =
  'REQUEST_ADDRESS_TRANSFER_HISTORY_ERROR'
export const requestAddressTransferHistoryError = (
  requestedAddress,
  transferHistoryPage = 1,
  error,
) => dispatch => {
  dispatch({
    type: REQUEST_ADDRESS_TRANSFER_HISTORY_ERROR,
    requestedAddress,
    transferHistoryPage,
    error,
    receivedAt: Date.now(),
  })
}

export function fetchAddress(address) {
  return async (dispatch, getState) => {
    dispatch(requestAddress(address))
    try {
      const response = await fetch(
        `${GENERATE_BASE_URL()}/get_balance/${address}`,
      )
      const json = await response.json()
      dispatch(requestAddressSuccess(address, json))
    } catch (e) {
      dispatch(requestAddressError(address, e))
    }
  }
}

export function fetchAddressTransferHistory(address, page = 1) {
  return async (dispatch, getState) => {
    dispatch(requestAddressTransferHistory(address, page))
    try {
      const response = await fetch(
        `${GENERATE_BASE_URL()}/get_transfer_history/${address}/${page}`,
      )
      const json = await response.json()
      dispatch(requestAddressTransferHistorySuccess(address, page, json))
    } catch (e) {
      dispatch(requestAddressTransferHistoryError(address, page, e))
    }
  }
}
