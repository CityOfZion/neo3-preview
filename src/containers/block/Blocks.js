import React from 'react'

import List from '../../components/list/List'
import Pagination from '../../components/pagination/Pagination'
import withBlockData from '../../hoc/withBlockData'
import Spinner from '../../components/spinner/Spinner'

class Blocks extends React.Component {
  state = {
    paginationData: '',
  }

  static defaultProps = {
    blocks: [],
  }

  render() {
    const columns = [
      { name: 'Height', accessor: 'index' },
      { name: 'Size', accessor: 'size' },
      { name: 'Hash', accessor: 'hash' },
      { name: 'Created On', accessor: 'time' },
    ]

    const { blocks, isLoading, totalCount } = this.props
    const { paginationData } = this.state
    const { page = 1 } = this.props.match.params

    return (
      <div id="blocks-list">
        {isLoading && !blocks.length ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <div className="list-header-and-pagination-info-row">
              <h1> Blocks </h1>
              {totalCount && <span> {paginationData}</span>}
            </div>
            <List
              isLoading={isLoading}
              handleRowClick={row =>
                this.props.history.push(
                  `/block/${
                    this.props.blocks.find(block => block.hash === row.hash)
                      .height
                  }`,
                )
              }
              columns={columns}
              data={blocks}
            />
            <Pagination
              currPage={Number(page)}
              handleSelectPage={page => this.loadNewBlockPage(page)}
              returnPaginationData={this.handleUpdatePaginationData}
              totalCount={totalCount}
            />
          </React.Fragment>
        )}
      </div>
    )
  }

  loadNewBlockPage = page => {
    this.props.history.push(`/blocks/${page}`)
    this.props.fetchBlocks(page)
  }

  handleUpdatePaginationData = data => {
    const { totalCount } = this.props
    const { beginningCount, endCount } = data

    const paginationData = `Blocks ${beginningCount} to ${endCount} of ${Number(
      totalCount,
    ).toLocaleString()}`
    this.setState({
      paginationData,
    })
  }
}

const WithBlockData = withBlockData(Blocks)

export default WithBlockData
