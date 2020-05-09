import React from 'react'
import classNames from 'classnames'

import Spinner from '../spinner/Spinner'
import SearchIcon from '../../images/search-icon.svg'

import './Search.scss'

export default ({
  handleSearch,
  shouldClearSearch,
  error,
  clearSearchInputError,
  isSearching,
}) => {
  const [inputValue, setInputValue] = React.useState('')

  const onChangeHandler = event => {
    setInputValue(event.target.value)

    if (error) {
      clearSearchInputError()
    }
  }

  const listenForEnterKey = event => {
    if (event.which === 13 || event.keyCode === 13) {
      return handleSearch(inputValue)
    }
  }

  React.useEffect(() => {
    setInputValue('')
  }, [shouldClearSearch])

  const inputClass = classNames({
    'search-error': error,
    'is-searching': isSearching,
    'search-input': true,
  })

  return (
    <div onKeyPress={listenForEnterKey} id="search-input-container">
      <input
        className={inputClass}
        type="text"
        name="name"
        onChange={onChangeHandler}
        value={isSearching ? '' : inputValue}
        placeholder={
          isSearching ? '' : 'Search block height, address, transaction ID'
        }
      />
      {isSearching && <Spinner searchSpinner />}
      <img
        onClick={() => handleSearch(inputValue)}
        id="search-input-icon"
        src={SearchIcon}
        alt="search"
      />
    </div>
  )
}
