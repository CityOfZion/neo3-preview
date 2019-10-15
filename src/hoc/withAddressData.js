import React from 'react'
import { connect } from 'react-redux'

import {
  fetchAddress,
  fetchAddressTransferHistory,
} from '../actions/addressActions'

const mapStateToProps = ({ address }) => ({
  ...address,
})

const mapDispatchToProps = dispatch => ({
  fetchAddress: address => dispatch(fetchAddress(address)),
  fetchAddressTransferHistory: (address, page = 1) =>
    dispatch(fetchAddressTransferHistory(address, page)),
})

export default function withAddressData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}
