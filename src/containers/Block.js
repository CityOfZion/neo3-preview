import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { fetchBlock } from '../actions/blockActions'
import Panel from '../components/panel/Panel'

import './Block.css'

const mapStateToProps = state => ({
  ...state.blocks,
})

const mapDispatchToProps = dispatch => ({
  fetchBlock: id => dispatch(fetchBlock(id)),
})

class Block extends React.Component {
  componentDidMount() {
    console.log('mounted')
    const id = this.props.match.params.id
    this.props.fetchBlock(id)
  }

  render() {
    const { block } = this.props

    return (
      <div className="wrapper">
        {block && (
          <React.Fragment>
            <h1> Block </h1>
            <div className="block-index"> #{block.index.toLocaleString()}</div>
            <div> {moment(block.time).format('MM-DD-YYYY | MM:HH:SS')}</div>
            <div className="panels-container">
              <div className="panels-row">
                <Panel title="Index" value={block.index.toLocaleString()} />
                <Panel title="Hash" value={block.hash} />
              </div>
              <div className="panels-row">
                <Panel title="Size" value={`${block.size} bytes`} />
                <Panel title="Network Fee" value=".0005 GAS" />
              </div>
            </div>
            <div id="block-transactions-list">
              <h1> Transactions({block.tx.legth || '0'})</h1>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Block)
