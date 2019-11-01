import React from 'react'
import moment from 'moment'

import Spinner from '../../components/spinner/Spinner'
import withContractData from '../../hoc/withContractData'
import Panel from '../../components/panel/Panel'
import ExploreButton from '../../components/button/ExploreButton'

const formattedTime = time => moment(time).format('MM-DD-YYYY | HH:mm:ss')

class Contract extends React.Component {
  state = {
    scriptIsOpen: false,
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchContract(id)
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id
    if (prevProps.match.params.id !== id) {
      this.props.fetchBlock(id)
    }
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
                title="Block"
                value={
                  <div
                    className="link"
                    onClick={() =>
                      this.props.history.push(`/block/${contract.block}`)
                    }
                  >
                    {contract.block.toLocaleString()}
                  </div>
                }
              />
              <Panel title="Hash" value={contract.hash} />
            </div>
            <div className="panels-row">
              <Panel title="Idx" value={contract.idx} />
              <div className="panel hidden-panel" />
            </div>
          </div>
          <div className="panel-header-and-explore-row">
            <h1>Script</h1>
            <ExploreButton
              handleOpen={isOpen => this.setState({ scriptIsOpen: isOpen })}
            />
          </div>

          <div
            className="secondary-panels-full-width-row"
            style={{ display: this.state.scriptIsOpen ? 'flex' : 'none' }}
          >
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
