import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { isEmpty } from 'lodash-es'

import { fetchTransaction } from '../../actions/transactionActions'
import { disassemble } from '../../utils/disassemble'
import Panel from '../../components/panel/Panel'
import {
  CONVERT_TO_DECIMAL,
  TRANSFER,
  ASSETS,
  getAddressFromSriptHash,
} from '../../constants'
import Transfer from '../../components/transfer/Transfer'
import Spinner from '../../components/spinner/Spinner'
import ExploreButton from '../../components/button/ExploreButton'
import Notification from '../../components/notification/Notification'

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

          const integerNotfication = notification.state.value.find(
            value => value.type === 'Integer',
          )
          const amount = integerNotfication ? integerNotfication.value : 0

          const from_address = await getAddressFromSriptHash(
            notification.state.value[1].value,
          )
          const to_address = await getAddressFromSriptHash(
            notification.state.value[2].value,
          )
          transfers.push({
            name: asset.name,
            amount: asset.name === 'NEO' ? amount : CONVERT_TO_DECIMAL(amount),
            to: to_address,
            from: from_address,
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

const formattedTime = time => moment(time).format('MM-DD-YYYY | HH:mm:ss')

class Transaction extends React.Component {
  state = {
    transfers: [],
    hasParsedTransfers: false,
    rawScriptIsOpen: false,
    disassembledScriptIsOpen: false,
  }

  async componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchTransaction(id)

    if (!isEmpty(this.props.transaction)) {
      const transfers = await generateTransfersArr(this.props.transaction)
      this.setState({ transfers, hasParsedTransfers: true })
    }
  }

  async componentDidUpdate(prevProps) {
    const id = this.props.match.params.id
    if (prevProps.match.params.id !== id) {
      this.props.fetchTransaction(id)
    }

    if (this.props.transaction !== prevProps.transaction) {
      const transfers = await generateTransfersArr(this.props.transaction)
      this.setState({ transfers, hasParsedTransfers: true })
    }
  }

  render() {
    const { transaction, isLoading } = this.props
    const { transfers } = this.state
    const pre = { whiteSpace: 'pre-wrap' }
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
                <Panel title="Hash" value={transaction.hash} />
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

            <div className="panel-header-and-explore-row">
              <h1> Raw Script</h1>
              <ExploreButton
                handleOpen={isOpen =>
                  this.setState({ rawScriptIsOpen: isOpen })
                }
              />
            </div>

            <div
              className="secondary-panels-row"
              style={{ display: this.state.rawScriptIsOpen ? 'flex' : 'none' }}
            >
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

            <div
              className="secondary-panels-row"
              style={{ display: this.state.rawScriptIsOpen ? 'flex' : 'none' }}
            >
              <div className="secondary-panels-column">
                <div className="bold-subtitle">Script</div>
                <Panel secondary value={transaction.script} />
              </div>
              <div className="secondary-panels-column">
                <div className="bold-subtitle"></div>
                <div className="secondary-panel hidden-panel" />
              </div>
            </div>

            <div className="panel-header-and-explore-row">
              <h1>Disassembled Script</h1>
              <ExploreButton
                handleOpen={isOpen =>
                  this.setState({ disassembledScriptIsOpen: isOpen })
                }
              />
            </div>

            <div
              className="secondary-panels-row"
              style={{
                display: this.state.disassembledScriptIsOpen ? 'flex' : 'none',
              }}
            >
              <div className="secondary-panels-column">
                <div className="bold-subtitle"> Opcode invocation script</div>
                <Panel
                  style={pre}
                  secondary
                  value={disassemble(transaction.witnesses[0].invocation)}
                />
              </div>
              <div className="secondary-panels-column">
                <div className="bold-subtitle"> Opcode verification script</div>
                <Panel
                  style={pre}
                  secondary
                  value={disassemble(transaction.witnesses[0].verification)}
                />
              </div>
            </div>

            <div
              className="secondary-panels-row"
              style={{
                display: this.state.disassembledScriptIsOpen ? 'flex' : 'none',
              }}
            >
              <div className="secondary-panels-column">
                <div className="bold-subtitle">Script</div>
                <Panel
                  style={pre}
                  secondary
                  value={disassemble(transaction.script)}
                />
              </div>
              <div className="secondary-panels-column">
                <div className="bold-subtitle"></div>
                <div className="secondary-panel hidden-panel" />
              </div>
            </div>
            {transaction.Item.notifications.map(notification => (
              <Notification
                key={notification.contract}
                notification={notification}
              />
            ))}
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
