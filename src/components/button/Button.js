import React from 'react'
import classNames from 'classnames'

import './Button.scss'

export default ({
  children,
  secondary = false,
  active = false,
  classes,
  ...props
}) => {
  const btnClass = classNames({
    'primary-button': !secondary,
    'secondary-button': secondary,
    'active-button': active,
    ...classes,
  })
  return (
    <button {...props} className={btnClass}>
      {children}
    </button>
  )
}
