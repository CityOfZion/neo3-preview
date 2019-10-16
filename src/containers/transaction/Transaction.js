import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import NeoConvertor from 'neo-convertor'
import { isEmpty } from 'lodash-es'

import { fetchTransaction } from '../../actions/transactionActions'
import Panel from '../../components/panel/Panel'
import { CONVERT_TO_DECIMAL, TRANSFER, ASSETS } from '../../constants'
import Transfer from '../../components/transfer/Transfer'
import Spinner from '../../components/spinner/Spinner'

// import './Block.css'

const generateTransfersArr = async transaction => {
  const transfers = []
  if (transaction) {
    for (const notification of transaction.Item.notifications) {
      if (notification.state.type === 'Array') {
        let isTransfer = false
        notification.state.value.forEach(value => {
          if (value.value === TRANSFER) {
            isTransfer = true
          }
        })

        if (isTransfer) {
          const asset = ASSETS.find(
            asset => asset.scripthash === notification.contract,
          )
          const amount = notification.state.value.find(
            value => value.type === 'Integer',
          ).value
          const address = await NeoConvertor.Address.scriptHashToAddress(
            notification.state.value[2].value,
            true,
          )
          transfers.push({
            name: asset.name,
            amount: asset.name === 'NEO' ? amount : CONVERT_TO_DECIMAL(amount),
            to: address,
            from: transaction.sender,
          })
        }
      }
    }
  }
  return transfers
}

const mapStateToProps = state => ({
  isLoading: state.transactions.isLoading,
  transaction: state.transactions.transaction,
})

const mapDispatchToProps = dispatch => ({
  fetchTransaction: id => dispatch(fetchTransaction(id)),
})

const formattedTime = time => moment(time).format('MM-DD-YYYY | MM:HH:SS')

class Block extends React.Component {
  state = {
    transfers: [],
    hasParsedTransfers: false,
  }

  async componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchTransaction(id)

    if (!isEmpty(this.props.transaction)) {
      const transfers = await generateTransfersArr(this.props.transaction)
      this.setState({ transfers, hasParsedTransfers: true })
    }
  }

  async componentDidUpdate() {
    if (!isEmpty(this.props.transaction) && !this.state.hasParsedTransfers) {
      const transfers = await generateTransfersArr(this.props.transaction)
      this.setState({ transfers, hasParsedTransfers: true })
    }
  }

  render() {
    const { transaction, isLoading } = this.props
    const { transfers } = this.state
    return (
      <div className="wrapper">
        {transaction && !isLoading ? (
          <React.Fragment>
            <h1> Transaction Information </h1>
            <div className="bold-subtitle"> {transaction.hash}</div>
            <div className="block-time">{formattedTime(transaction.time)}</div>

            <Transfer
              transfers={transfers}
              handleAddressClick={address =>
                this.props.history.push(`/address/${address}`)
              }
            />
            <div className="panels-container">
              <div className="panels-row">
                <Panel
                  title="Block"
                  value={
                    <div
                      className="panel-link"
                      onClick={() =>
                        this.props.history.push(`/block/${transaction.block}`)
                      }
                    >
                      {transaction.block.toLocaleString()}
                    </div>
                  }
                />
                <Panel title="Size" value={`${transaction.size} bytes`} />
              </div>
              <div className="panels-row">
                <Panel
                  valueStyle={{ fontSize: '12px' }}
                  title="Hash"
                  value={transaction.hash}
                />
                <Panel
                  title="Network Fee"
                  value={`${CONVERT_TO_DECIMAL(transaction.net_fee)} GAS`}
                />
              </div>
              <div className="panels-row">
                <Panel title="Sender" value={transaction.sender} />
                <Panel
                  title="System Fee"
                  value={`${CONVERT_TO_DECIMAL(transaction.sys_fee)} GAS`}
                />
              </div>
              <div className="panels-row">
                <Panel
                  title="Transaction Result"
                  value={transaction.Item.vmstate}
                />
                <div className="panel hidden-panel" />
              </div>
            </div>

            <h1 className="panel-header">Raw Script</h1>
            <div className="secondary-panels-row">
              <div className="secondary-panels-column">
                <div className="bold-subtitle"> Bytecode invocation script</div>
                <Panel secondary value={transaction.witnesses[0].invocation} />
              </div>
              <div className="secondary-panels-column">
                <div className="bold-subtitle">
                  {' '}
                  Bytecode verification script
                </div>
                <Panel
                  secondary
                  value={transaction.witnesses[0].verification}
                />
              </div>
            </div>

            <div className="secondary-panels-row">
              <div className="secondary-panels-column">
                <div className="bold-subtitle">Script</div>
                <Panel secondary value={transaction.script} />
              </div>
              <div className="secondary-panels-column">
                <div className="bold-subtitle"></div>
                <div className="secondary-panel hidden-panel" />
              </div>
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
