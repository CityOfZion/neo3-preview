import React from 'react'

import List from '../../components/list/List'
import Pagination from '../../components/pagination/Pagination'
import withBlockData from '../../hoc/withBlockData'

class Blocks extends React.Component {
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

    const { blocks } = this.props
    let { page } = this.props.match.params

    return (
      <div id="blocks-list">
        {!!blocks.length && (
          <React.Fragment>
            <List
              handleRowClick={row =>
                console.log(row) ||
                // NOTE: this is beause querying the API by block hash is currently not working
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
}

const WithBlockData = withBlockData(Blocks)

export default WithBlockData
