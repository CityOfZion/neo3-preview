import React from 'react'

import SearchIcon from '../../images/search-icon.svg'

import './Search.scss'

export default () => {
  const [inputValue, setInputValue] = React.useState('')

  const onChangeHandler = event => {
    setInputValue(event.target.value)
  }

  return (
    <form id="search-input-container">
      <input
        id="search-input"
        type="text"
        name="name"
        onChange={onChangeHandler}
        value={inputValue}
        placeholder="Search block height, address, transaction ID"
      />
      <img id="search-input-icon" src={SearchIcon} alt="search" />
    </form>
  )
}
