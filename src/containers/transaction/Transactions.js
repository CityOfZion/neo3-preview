import React from 'react'

import List from '../../components/list/List'
import Pagination from '../../components/pagination/Pagination'
import withContractData from '../../hoc/withContractData'
import withTransactionData from '../../hoc/withTransactionData'

class Transactions extends React.Component {
  static defaultProps = {
    contracts: [],
  }

  render() {
    const columns = [
      { name: 'Size', accessor: 'size' },
      { name: 'Hash', accessor: 'hash' },
      { name: 'Created On', accessor: 'time' },
    ]
    const { transactions } = this.props
    let { page = 1 } = this.props.match.params

    return (
      <div id="transactions-list">
        {!!transactions.length && (
          <React.Fragment>
            <List
              handleRowClick={row =>
                console.log(row) ||
                // NOTE: this is beause querying the API by block hash is currently not working
                this.props.history.push(`/transaction/${row.hash}`)
              }
              columns={columns}
              data={transactions}
            />

            <Pagination
              paginated={false}
              currPage={Number(page)}
              handleSelectPage={page => this.loadNewTransactionPage(page)}
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
