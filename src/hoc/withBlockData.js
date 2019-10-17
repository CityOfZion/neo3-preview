import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { fetchBlocks } from '../actions/blockActions'
import signal from '../images/signal.svg'

export const mapBlockData = block => {
  return {
    ...block,
    time: moment(block.time).format('MM-DD-YYYY | MM:HH:SS'),
    index: () => (
      <div className="list-block-height-container">
        <img src={signal} alt="block-icon" className="block-icon" />
        <span>{block.index.toLocaleString()}</span>
      </div>
    ),
    size: `${block.size} bytes`,
    height: block.index,
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
})

const mapDispatchToProps = dispatch => ({
  fetchBlocks: index => dispatch(fetchBlocks(index)),
})

export default function withBlockData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      componentDidMount() {
        this.props.fetchBlocks()
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}
