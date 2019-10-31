import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { fetchTransactions } from '../actions/transactionActions'

export const mapTransactionData = tx => {
  return {
    hash: tx.hash,
    time: moment(tx.time).format('MM-DD-YYYY | HH:mm:ss'),
    size: `${tx.size} bytes`,
  }
}
const mapStateToProps = ({ transactions }) => ({
  cursor: transactions.cursor,
  transactions: transactions.list.map(mapTransactionData),
  isLoading: transactions.isLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchTransactions: index => dispatch(fetchTransactions(index)),
})

export default function withTransactionData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      componentDidMount() {
        this.props.fetchTransactions()
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}
