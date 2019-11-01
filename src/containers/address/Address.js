import React from 'react'
import moment from 'moment'

import tokens from '../../images/tokens'
import Spinner from '../../components/spinner/Spinner'
import withAddressData from '../../hoc/withAddressData'
import { ASSETS, CONVERT_TO_DECIMAL } from '../../constants'
import List from '../../components/list/List'
import transferIcon from '../../images/transfer-icon.svg'

import './Address.scss'
import Pagination from '../../components/pagination/Pagination'

const mapBalanceData = balanceInfo => {
  const name = ASSETS.find(asset => asset.scripthash === balanceInfo.asset).name
  return {
    logo: tokens[name],
    name,
    balance:
      name === 'NEO'
        ? balanceInfo.balance
        : CONVERT_TO_DECIMAL(balanceInfo.balance),
  }
}

const mapAssetDisplay = balanceInfo => {
  const displayAssetBalance = () => (
    <div className="address-asset-display-container">
      <img src={balanceInfo.logo} alt="asset-icon" className="asset-icon" />
      {balanceInfo.name}
    </div>
  )

  return {
    ...balanceInfo,
    displayAssetBalance,
  }
}

export const mapTransferData = data => {
  return {
    ...data,
    time: moment(data.time).format('MM-DD-YYYY | HH:mm:ss'),
    displayTransactionId: () => (
      <div className="list-block-height-container">
        <img src={transferIcon} alt="block-icon" className="block-icon" />
        <span className="transaction-id-row">{data.txid}</span>
      </div>
    ),
  }
}

class Address extends React.Component {
  state = {
    paginationData: '',
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchAddress(id)
    this.props.fetchAddressTransferHistory(id)
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id
    if (prevProps.match.params.id !== id) {
      this.props.fetchBlock(id)
    }
  }

  render() {
    const {
      requestedAddress,
      isLoading,
      balance,
      transferHistory,
      transferHistoryPage,
      totalCount,
    } = this.props
    const { paginationData } = this.state
    const mappedBalanceData = balance.map(mapBalanceData).map(mapAssetDisplay)
    const mappedTransferData = transferHistory.map(mapTransferData)
    const balanceColumns = [
      { name: 'Token', accessor: 'displayAssetBalance' },
      { name: 'Balance', accessor: 'balance' },
    ]
    const historyColumns = [
      {
        name: 'Transaction ID',
        accessor: 'displayTransactionId',
      },
      {
        name: 'Completed On',
        accessor: 'time',
      },
    ]

    return balance && !isLoading ? (
      <React.Fragment>
        <div className="wrapper">
          <h1> Address </h1>
          <div className="bold-subtitle">{requestedAddress}</div>
          <div id="address-transactions-list">
            {!!balance.length && (
              <List
                columns={balanceColumns}
                data={mappedBalanceData}
                withoutPointer
              />
            )}
          </div>
          <div id="address-transactions-list">
            <div className="list-header-and-pagination-info-row">
              <h1> Transactions ({totalCount})</h1>
              {totalCount && <span> {paginationData}</span>}
            </div>
            {!!transferHistory.length && (
              <List
                rowId="txid"
                handleRowClick={row =>
                  this.props.history.push(`/transaction/${row.id}`)
                }
                columns={historyColumns}
                data={mappedTransferData}
              />
            )}
            <Pagination
              returnPaginationData={this.handleUpdatePaginationData}
              paginated={false}
              currPage={Number(transferHistoryPage)}
              totalCount={totalCount}
              handleSelectPage={page =>
                this.props.fetchAddressTransferHistory(
                  requestedAddress,
                  page ? transferHistoryPage - 1 : transferHistoryPage + 1,
                )
              }
            />
          </div>
        </div>
      </React.Fragment>
    ) : (
      <Spinner />
    )
  }

  handleUpdatePaginationData = data => {
    const { totalCount } = this.props
    const { beginningCount, endCount } = data

    const paginationData = `Transactions ${beginningCount} to ${endCount} of ${totalCount}`
    this.setState({
      paginationData,
    })
  }
}

const AddressWithAddressData = withAddressData(Address)

export default AddressWithAddressData
