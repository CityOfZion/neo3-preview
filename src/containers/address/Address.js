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
    time: moment(data.time).format('MM-DD-YYYY | MM:HH:SS'),
    displayTransactionId: () => (
      <div className="list-block-height-container">
        <img src={transferIcon} alt="block-icon" className="block-icon" />
        {data.txid}
      </div>
    ),
  }
}

class Address extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchAddress(id)
    this.props.fetchAddressTransferHistory(id)
  }

  render() {
    const {
      requestedAddress,
      isLoading,
      balance,
      transferHistory,
      transferHistoryPage,
    } = this.props
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

    // const columns = [
    //   { name: 'Transaction ID', accessor: 'hash' },
    //   { name: 'Completed On', accessor: 'time' },
    // ]

    return balance && !isLoading ? (
      <React.Fragment>
        <div className="wrapper">
          <h1> Address </h1>
          <div className="bold-subtitle">{requestedAddress}</div>
          <div id="address-transactions-list">
            {!!balance.length && (
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
                columns={balanceColumns}
                data={mappedBalanceData}
              />
            )}
          </div>
          <div id="address-transactions-list">
            <h1> Transactions </h1>
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
              paginated={false}
              currPage={Number(transferHistoryPage)}
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
}

const AddressWithAddressData = withAddressData(Address)

export default AddressWithAddressData

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Block)
