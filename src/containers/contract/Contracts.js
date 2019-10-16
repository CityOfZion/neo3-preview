import React from 'react'

import List from '../../components/list/List'
import Pagination from '../../components/pagination/Pagination'
import Spinner from '../../components/spinner/Spinner'
import withContractData from '../../hoc/withContractData'
import moment from 'moment'

const mapContractData = data => ({
  ...data,
  time: moment(data.time).format('MM-DD-YYYY | MM:HH:SS'),
  block: data.block,
})

class Contracts extends React.Component {
  static defaultProps = {
    contracts: [],
  }

  render() {
    const columns = [
      { name: 'Hash', accessor: 'hash' },
      { name: 'Block', accessor: 'block' },
      { name: 'Created On', accessor: 'time' },
    ]

    const { contracts, isLoading } = this.props
    let { page = 1 } = this.props.match.params

    return (
      <div id="contracts-list">
        {isLoading && !contracts.length ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <List
              handleRowClick={row =>
                row.block && this.props.history.push(`/contract/${row.hash}`)
              }
              columns={columns}
              data={contracts.map(mapContractData)}
              isLoading={isLoading}
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
}

const WithContractData = withContractData(Contracts)

export default WithContractData
