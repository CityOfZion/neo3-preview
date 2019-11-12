import React from 'react'
import Select from 'react-select'

import './Select.scss'
import { customStyles } from './customStyles'

const CustomSelect = ({
  selectedOption,
  handleChange,
  options,
  computedDisplayValue,
}) => (
  <div className="select-container">
    <div className="inner-select-container">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={false}
        styles={customStyles}
        autosize={false}
        classNamePrefix="react-select"
        isDisabled={!options.length || options.length === 1}
      />
    </div>
    <div className="select-computed-value">{computedDisplayValue}</div>
  </div>
)

export default CustomSelect
