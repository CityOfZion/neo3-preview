import React from 'react'
import moment from 'moment'

import tokens from '../../images/tokens'
import Spinner from '../../components/spinner/Spinner'
import withAddressData from '../../hoc/withAddressData'
import { ASSETS, CONVERT_TO_DECIMAL } from '../../constants'
import List from '../../components/list/List'
import transferIcon from '../../images/transfer-icon.svg'

// import './Address.scss'
import Pagination from '../../components/pagination/Pagination'
import withContractData from '../../hoc/withContractData'
import Panel from '../../components/panel/Panel'

const formattedTime = time => moment(time).format('MM-DD-YYYY | MM:HH:SS')

class Contract extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchContract(id)
  }

  render() {
    const { contract, isLoading } = this.props

    return contract && !isLoading ? (
      <React.Fragment>
        <div className="wrapper">
          <h1> Contract </h1>
          <div className="bold-subtitle">{contract.hash}</div>
          <div className="block-time">{formattedTime(contract.time)}</div>
          <div className="panels-container">
            <div className="panels-row">
              <Panel
                valueStyle={{ fontSize: '12px' }}
                title="Block"
                value={
                  <a
                    onClick={() =>
                      this.props.history.push(`/block/${contract.block}`)
                    }
                  >
                    {contract.block.toLocaleString()}
                  </a>
                }
              />
              <Panel title="Hash" value={contract.hash} />
            </div>
            <div className="panels-row">
              <Panel title="Idx" value={contract.idx} />
              <div className="panel hidden-panel" />
            </div>
          </div>
          <h1 className="panel-header">Script</h1>
          <div className="secondary-panels-full-width-row">
            <Panel secondary value={contract.script} />
          </div>
        </div>
      </React.Fragment>
    ) : (
      <Spinner />
    )
  }
}

const WithContractData = withContractData(Contract)

export default WithContractData
