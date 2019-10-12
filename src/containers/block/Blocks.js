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

    return (
      <div id="blocks-list">
        {!!blocks.length && (
          <React.Fragment>
            <List
              handleRowClick={row =>
                console.log(row) ||
                // NOTE: this is beause querying the API by block hash is currently not working
                this.props.history.push(
                  `/blocks/${
                    this.props.blocks.find(block => block.hash === row.hash)
                      .height
                  }`,
                )
              }
              columns={columns}
              data={blocks}
            />

            <Pagination />
          </React.Fragment>
        )}
      </div>
    )
  }
}

const WithBlockData = withBlockData(Blocks)

export default WithBlockData
