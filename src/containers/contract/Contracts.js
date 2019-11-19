import React from 'react'

import List from '../../components/list/List'
import Spinner from '../../components/spinner/Spinner'
import withContractData from '../../hoc/withContractData'
import moment from 'moment'
import Pagination from '../../components/pagination/Pagination'

const mapContractData = data => ({
  ...data,
  time: moment(data.time).format('MM-DD-YYYY | HH:mm:ss'),
  block: data.block,
})

class Contracts extends React.Component {
  state = {
    paginationData: '',
  }

  static defaultProps = {
    contracts: [],
  }

  render() {
    const columns = [
      { name: 'Hash', accessor: 'hash' },
      { name: 'Block', accessor: 'block' },
      { name: 'Created On', accessor: 'time' },
    ]

    const { contracts, isLoading, totalCount } = this.props
    const { paginationData } = this.state
    const { page = 1 } = this.props.match.params

    return (
      <div id="contracts-list">
        {isLoading && !contracts.length ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <div className="list-header-and-pagination-info-row">
              <h1> Contracts </h1>
              {totalCount && <span> {paginationData}</span>}
            </div>
            <List
              handleRowClick={row =>
                this.props.history.push(`/contract/${row.hash}`)
              }
              columns={columns}
              data={contracts.map(mapContractData)}
              isLoading={isLoading}
            />
            <Pagination
              currPage={Number(page)}
              handleSelectPage={page => this.loadNewContractPage(page)}
              returnPaginationData={this.handleUpdatePaginationData}
              totalCount={totalCount}
            />
          </React.Fragment>
        )}
      </div>
    )
  }

  loadNewContractPage = page => {
    this.props.history.push(`/contracts/${page}`)
    this.props.fetchContracts(page)
  }

  handleUpdatePaginationData = data => {
    const { totalCount } = this.props
    const { beginningCount, endCount } = data

    const paginationData = `Contracts ${beginningCount} to ${endCount} of ${Number(
      totalCount,
    ).toLocaleString()}`
    this.setState({
      paginationData,
    })
  }
}

const WithContractData = withContractData(Contracts)

export default WithContractData
