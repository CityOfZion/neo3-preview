import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import List from '../../components/list/List'
import { fetchBlock } from '../../actions/blockActions'
import Panel from '../../components/panel/Panel'
import transferIcon from '../../images/transfer-icon.svg'
import './Block.css'
import Spinner from '../../components/spinner/Spinner'

const mapStateToProps = state => ({
  ...state.blocks,
})

const mapDispatchToProps = dispatch => ({
  fetchBlock: id => dispatch(fetchBlock(id)),
})

const formattedTime = time => moment(time).format('MM-DD-YYYY | HH:mm:ss')

export const mapTxData = data => {
  return {
    ...data,
    time: formattedTime(data.time),
    displayTransactionId: () => (
      <div className="list-block-height-container">
        <img src={transferIcon} alt="block-icon" className="block-icon" />
        <span className="transaction-id-row">{data.hash} </span>
      </div>
    ),
  }
}

class Block extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchBlock(id)
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id
    if (prevProps.match.params.id !== id) {
      this.props.fetchBlock(id)
    }
  }

  render() {
    const { block, isLoading } = this.props

    const columns = [
      { name: 'Transaction ID', accessor: 'displayTransactionId' },
      { name: 'Completed On', accessor: 'time' },
    ]

    return (
      <div className="wrapper">
        {block && !isLoading ? (
          <React.Fragment>
            <h1> Block </h1>
            <div className="bold-subtitle">#{block.index.toLocaleString()}</div>
            <div className="block-time">{formattedTime(block.time)}</div>
            <div className="panels-container">
              <div className="panels-row">
                <Panel title="Index" value={block.index.toLocaleString()} />
                <Panel title="Hash" value={block.hash} />
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
              {!!block.tx.length && (
                <List
                  rowId={'hash'}
                  handleRowClick={({ id }) =>
                    this.props.history.push(`/transaction/${id}`)
                  }
                  columns={columns}
                  data={block.tx.map(mapTxData)}
                />
              )}
            </div>
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Block)
