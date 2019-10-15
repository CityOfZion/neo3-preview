import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { fetchBlocks } from '../actions/blockActions'
import signal from '../images/signal.svg'
import { fetchTransactions } from '../actions/transactionActions'

export const mapTransactionData = tx => {
  return {
    hash: tx.hash,
    time: moment(tx.time).format('MM-DD-YYYY | MM:HH:SS'),
    size: `${tx.size} bytes`,
  }
}
const mapStateToProps = ({ transactions }) => ({
  // filteredBlocks:
  //   (blocks.list &&
  //     blocks.list.length &&
  //     blocks.list.slice(0, 5).map(massageBlockData)) ||
  //   [],
  // blocks: blocks.list && blocks.list.map(massageBlockData),
  // isLoading: blocks.isLoading,
  cursor: transactions.cursor,
  transactions: transactions.list.map(mapTransactionData),
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
