import React from 'react'

import List from '../../components/list/List'
import Pagination from '../../components/pagination/Pagination'
import Spinner from '../../components/spinner/Spinner'
import withTransactionData from '../../hoc/withTransactionData'
import transferIcon from '../../images/transfer-icon.svg'

export const mapTxData = data => {
  return {
    ...data,
    displayTransactionId: () => (
      <div className="list-block-height-container">
        <img src={transferIcon} alt="block-icon" className="block-icon" />
        <span class="transaction-id-row">{data.hash} </span>
      </div>
    ),
  }
}

class Transactions extends React.Component {
  state = {
    page: 1,
  }

  static defaultProps = {
    transactions: [],
  }

  render() {
    const columns = [
      { name: 'Transaction ID', accessor: 'displayTransactionId' },
      { name: 'Size', accessor: 'size' },
      { name: 'Created On', accessor: 'time' },
    ]
    const { transactions, isLoading } = this.props

    return (
      <div id="transactions-list">
        {isLoading && !transactions.length ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <List
              handleRowClick={row =>
                console.log(row) ||
                // NOTE: this is beause querying the API by block hash is currently not working
                this.props.history.push(`/transaction/${row.id}`)
              }
              rowId="hash"
              columns={columns}
              data={transactions.map(mapTxData)}
              isLoading={isLoading}
            />

            <Pagination
              paginated={false}
              currPage={this.state.page}
              handleSelectPage={page => {
                if (!page) {
                  this.setState(state => ({
                    page: state.page + 1,
                  }))
                } else {
                  this.setState({ page: 1 })
                }
                this.loadNewTransactionPage(page)
              }}
            />
          </React.Fragment>
        )}
      </div>
    )
  }

  loadNewTransactionPage = page => {
    //this.props.history.push(`/transactions/${page}`)
    this.props.fetchTransactions(page)
  }
}

const WithTransactionData = withTransactionData(Transactions)

export default WithTransactionData
