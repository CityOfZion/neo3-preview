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
        <span className="transaction-id-row">{data.hash} </span>
      </div>
    ),
  }
}

class Transactions extends React.Component {
  state = {
    page: 1,
    paginationData: '',
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
    const { paginationData } = this.state

    return (
      <div id="transactions-list">
        {isLoading && !transactions.length ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <div className="list-header-and-pagination-info-row">
              <h1> Transactions </h1>
              {paginationData && <span> {paginationData}</span>}
            </div>
            <List
              handleRowClick={row =>
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
              returnPaginationData={this.handleUpdatePaginationData}
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
    this.props.fetchTransactions(page)
  }

  handleUpdatePaginationData = data => {
    const { beginningCount, endCount } = data

    const paginationData = `Transactions ${beginningCount} to ${endCount}`
    this.setState({
      paginationData,
    })
  }
}

const WithTransactionData = withTransactionData(Transactions)

export default WithTransactionData
