import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { fetchBlocks } from '../actions/blockActions'
import signal from '../images/signal.svg'
import { fetchContracts } from '../actions/contractActions'

export const massageBlockData = block => {
  return {
    // ...block,
    // time: moment(block.time).format('MM-DD-YYYY | MM:HH:SS'),
    // index: () => (
    //   <div className="list-block-height-container">
    //     <img src={signal} alt="block-icon" class="block-icon" />
    //     {block.index.toLocaleString()}
    //   </div>
    // ),
    // size: `${block.size} bytes`,
    // height: block.index,
  }
}

const mapStateToProps = ({ contracts }) => ({
  // filteredBlocks:
  //   (blocks.list &&
  //     blocks.list.length &&
  //     blocks.list.slice(0, 5).map(massageBlockData)) ||
  //   [],
  // blocks: blocks.list && blocks.list.map(massageBlockData),
  // isLoading: blocks.isLoading,
  contracts: contracts.list,
})

const mapDispatchToProps = dispatch => ({
  fetchContracts: () => dispatch(fetchContracts()),
})

export default function withContractData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      componentDidMount() {
        this.props.fetchContracts()
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}
