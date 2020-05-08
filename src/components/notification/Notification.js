import React from 'react'
import Select from '../select/Select'
import { Link } from 'react-router-dom'

import ExploreButton from '../button/ExploreButton'
import './Notification.scss'

import {
  TX_STATE_TYPE_MAPPINGS,
  ADDRESS_OPTION,
  HEX_STRING_OPTION,
  STRING_OPTION,
} from '../../constants'

export const NotificationRow = ({ value, type, options = [] }) => {
  const [selectedOption, setSelectedOption] = React.useState()
  const [convertedValue, setConvertedvalue] = React.useState('')

  React.useEffect(() => {
    const convert = async () => {
      if (selectedOption.convert) {
        const convertedValue = await selectedOption.convert(value)
        setConvertedvalue(convertedValue)
      }
    }
    if (selectedOption) {
      convert()
    }
  }, [selectedOption, options, value])

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption)
  }

  let filteredOptions
  // indicative of an address
  if (type === 'ByteArray' && value.length === 40) {
    filteredOptions = [ADDRESS_OPTION, HEX_STRING_OPTION]
  }
  if (type === 'ByteArray' && value.length !== 40) {
    filteredOptions = [HEX_STRING_OPTION, STRING_OPTION]
  }

  return (
    <Select
      selectedOption={selectedOption || options[0]}
      handleChange={handleChange}
      options={filteredOptions || options}
      computedDisplayValue={convertedValue || value}
    />
  )
}

export const NotificationPanel = ({ notification }) => {
  return (
    <div className="notification-panel">
      <div className="notification-panel-header">State</div>
      {notification.state.value.map((state, i) => (
        <div className="notification-state-row-container" key={i}>
          <span> [{i}] </span>
          <p
            style={{
              background:
                TX_STATE_TYPE_MAPPINGS[state.type] &&
                TX_STATE_TYPE_MAPPINGS[state.type].color,
            }}
          >
            {state.type}
          </p>
          {state.value && (
            <NotificationRow
              value={state.value}
              type={state.type}
              options={
                TX_STATE_TYPE_MAPPINGS[state.type] &&
                TX_STATE_TYPE_MAPPINGS[state.type].options
              }
            />
          )}
        </div>
      ))}
    </div>
  )
}

export const Notification = ({ notification }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      <div className="panel-header-and-explore-row">
        <h1>
          Notifications
          <div className="bold-subtitle">
            <Link to={`/contract/${notification.contract}`}>
              {' '}
              {notification.contract}{' '}
            </Link>
          </div>
        </h1>

        <ExploreButton handleOpen={isOpen => setIsOpen(isOpen)} />
      </div>
      <div
        className="secondary-panels-row"
        style={{
          display: isOpen ? 'flex' : 'none',
        }}
      >
        <NotificationPanel notification={notification} />
      </div>
    </React.Fragment>
  )
}

export default Notification
