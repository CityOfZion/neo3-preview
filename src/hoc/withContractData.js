import React from 'react'
import { connect } from 'react-redux'

import { fetchContracts } from '../actions/contractActions'

const mapStateToProps = ({ contracts }) => ({
  contracts: contracts.list,
  isLoading: contracts.isLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchContracts: () => dispatch(fetchContracts()),
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
