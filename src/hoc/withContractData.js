import React from 'react'
import { connect } from 'react-redux'

import { fetchContracts, fetchContract } from '../actions/contractActions'

const mapStateToProps = ({ contracts }) => ({
  ...contracts,
  contracts: contracts.list,
})

const mapDispatchToProps = dispatch => ({
  fetchContracts: () => dispatch(fetchContracts()),
  fetchContract: hash => dispatch(fetchContract(hash)),
})

export default function withContractData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      componentDidMount() {
        this.props.fetchContracts()
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}
