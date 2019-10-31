import React from 'react'
import { connect } from 'react-redux'

import { fetchContracts, fetchContract } from '../actions/contractActions'

const mapStateToProps = ({ contracts }) => ({
  ...contracts,
  contracts: contracts.list,
})

const mapDispatchToProps = dispatch => ({
  fetchContracts: page => dispatch(fetchContracts(page)),
  fetchContract: hash => dispatch(fetchContract(hash)),
})

export default function withContractData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      componentDidMount() {
        const { page = 1 } = this.props.match.params
        this.props.fetchContracts(page)
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}
