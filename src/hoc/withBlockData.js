import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { fetchBlocks } from '../actions/blockActions'
import signal from '../images/signal.svg'
import { convertMilliseconds } from '../utils/time'
import useWindowWidth from '../hooks/useWindowWith'
import { arrayExpression } from '@babel/types'

export const mapBlockData = block => {
  return {
    ...block,
    time: moment(block.time).format('MM-DD-YYYY | HH:mm:ss'),
    index: () => (
      <div className="list-block-height-container">
        <img src={signal} alt="block-icon" className="block-icon" />
        <span>{block.index.toLocaleString()}</span>
      </div>
    ),
    size: `${block.size} bytes`,
    height: block.index,
    transactions: block.txCount,
    blocktime: convertMilliseconds(block.blocktime),
  }
}

const mapStateToProps = ({ blocks }) => ({
  filteredBlocks:
    (blocks.list &&
      blocks.list.length &&
      blocks.list.slice(0, 5).map(mapBlockData)) ||
    [],
  blocks: blocks.list && blocks.list.map(mapBlockData),
  isLoading: blocks.isLoading,
  totalCount: blocks.totalCount,
})

const mapDispatchToProps = dispatch => ({
  fetchBlocks: index => dispatch(fetchBlocks(index)),
})

export default function withBlockData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(props => {
    const { page = 1 } = props.match.params
    const { fetchBlocks } = props
    const width = useWindowWidth()

    const columns = [
      { name: 'Height', accessor: 'index' },
      { name: 'Size', accessor: 'size' },
      { name: 'Transactions', accessor: 'transactions' },
      { name: 'Created On', accessor: 'time' },
      { name: 'Block Time', accessor: 'blocktime' },
    ]

    if (width < 436) {
      columns.forEach(
        (column, i) => column.name === 'Transactions' && columns.splice(i, 1),
      )
    }

    React.useEffect(() => {
      fetchBlocks(page)
    }, [page, fetchBlocks])

    return <WrappedComponent columns={columns} {...props} />
  })
}
