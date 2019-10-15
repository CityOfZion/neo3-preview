import React from 'react'

import List from '../../components/list/List'
import Pagination from '../../components/pagination/Pagination'
import Spinner from '../../components/spinner/Spinner'
import withContractData from '../../hoc/withContractData'

class Blocks extends React.Component {
  static defaultProps = {
    contracts: [],
  }

  render() {
    const columns = [
      { name: 'Idx', accessor: 'idx' },
      { name: 'Hash', accessor: 'hash' },
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
                console.log(row) ||
                // NOTE: this is beause querying the API by block hash is currently not working
                this.props.history.push(`/contract/${row.hash}`)
              }
              columns={columns}
              data={contracts}
              isLoading={isLoading}
            />

            <Pagination
              numberOfPages={4}
              currPage={Number(page)}
              handleSelectPage={page => this.loadNewContractPage(page)}
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

const WithBlockData = withContractData(Blocks)

export default WithBlockData
