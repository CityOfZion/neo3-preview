import React from 'react'
import Select from '../select/Select'
import { Link } from 'react-router-dom'

import ExploreButton from '../button/ExploreButton'
import './Notification.scss'
import NeoConvertor from 'neo-convertor'
import { hexToAscii, asciiToByteArray } from '../../constants'

const HEX_STRING_OPTION = {
  value: 'Hexstring',
  label: 'Hexstring',
  // BUG: assumes the input will always be plain string
  // we need to create a better API here for
  convert: async value => asciiToByteArray(value),
}

const STRING_OPTION = {
  value: 'String',
  label: 'String',
  convert: async value => hexToAscii(value),
}

const INTEGER_OPTION = {
  value: 'Integer',
  label: 'Integer',
}

const ADDRESS_OPTION = {
  value: 'Address',
  label: 'Address',
  convert: value =>
    value.length === 40 &&
    NeoConvertor.Address.scriptHashToAddress(value, true),
}

const TX_STATE_TYPE_MAPPINGS = {
  Signature: {
    color: '#E9005B',
    options: [HEX_STRING_OPTION, STRING_OPTION],
  },
  Boolean: {
    color: '#E800BA',
    options: [STRING_OPTION],
  },
  Integer: {
    color: '#A001FF',
    options: [INTEGER_OPTION],
  },
  Hash160: {
    color: '#3B01FF',
    options: [HEX_STRING_OPTION, STRING_OPTION],
  },
  Null: {
    color: 'rgba(255, 255, 255, 0.08)',
    options: [STRING_OPTION],
  },
  Hash256: {
    color: '#1DB5FF',
    options: [HEX_STRING_OPTION, STRING_OPTION],
  },
  ByteArray: {
    color: '#00D69D',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  PublicKey: {
    color: '#008529',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  String: {
    color: '#A4B500',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  Array: {
    color: '#F28F00',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  InteropInterface: {
    color: '#A50000',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  Void: {
    color: '#528D93',
    options: [STRING_OPTION],
  },
}

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
          <p style={{ background: TX_STATE_TYPE_MAPPINGS[state.type].color }}>
            {state.type}
          </p>
          {state.value && (
            <NotificationRow
              value={state.value}
              type={state.type}
              options={TX_STATE_TYPE_MAPPINGS[state.type].options}
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
