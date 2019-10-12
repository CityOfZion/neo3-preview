import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import List from '../../components/list/List'
import { fetchBlock } from '../../actions/blockActions'
import Panel from '../../components/panel/Panel'

import './Block.css'

const mapStateToProps = state => ({
  ...state.blocks,
})

const mapDispatchToProps = dispatch => ({
  fetchBlock: id => dispatch(fetchBlock(id)),
})

const mapTransactionData = (tx, time) => ({
  time: formattedTime(time),
  ...tx,
})

const formattedTime = time => moment(time).format('MM-DD-YYYY | MM:HH:SS')

class Block extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchBlock(id)
  }

  render() {
    const { block } = this.props

    const columns = [
      { name: 'Transaction ID', accessor: 'hash' },
      { name: 'Completed On', accessor: 'time' },
    ]

    return (
      <div className="wrapper">
        {block && (
          <React.Fragment>
            <h1> Block </h1>
            <div className="block-index"> #{block.index.toLocaleString()}</div>
            <div className="block-time">{formattedTime(block.time)}</div>
            <div className="panels-container">
              <div className="panels-row">
                <Panel title="Index" value={block.index.toLocaleString()} />
                <Panel
                  valueStyle={{ fontSize: '12px' }}
                  title="Hash"
                  value={block.hash}
                />
              </div>
              <div className="panels-row">
                <Panel title="Size" value={`${block.size} bytes`} />
                <Panel title="Network Fee" value=".0005 GAS" />
              </div>
              <div className="panels-row">
                <Panel title="Version" value="0" />
                <Panel title="Block Time" value={formattedTime(block.time)} />
              </div>
            </div>
            <div id="block-transactions-list">
              <h1> Transactions({block.tx.length})</h1>
              <List
                handleRowClick={
                  row => console.log(row)
                  // NOTE: this is beause querying the API by block hash is currently not working
                  // this.props.history.push(
                  //   `/block/${
                  //     this.props.blocks.find(block => block.hash === row.hash)
                  //       .height
                  //   }`,
                  // )
                }
                columns={columns}
                data={block.tx.map(tx => ({
                  time: formattedTime(block.time),
                  ...tx,
                }))}
              />
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
