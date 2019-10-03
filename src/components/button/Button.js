import React from 'react'

import './Button.css'

export default ({ children, secondary = false }) => {
  return (
    <button className={secondary ? 'secondary-button' : 'primary-button'}>
      {children}
    </button>
  )
}
