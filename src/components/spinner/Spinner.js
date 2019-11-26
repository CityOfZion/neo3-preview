import React from 'react'
import classNames from 'classnames'

import './Spinner.scss'

export default ({ searchSpinner = false }) => {
  return (
    <div
      className={classNames({
        // 'is-searching': true,
        'spinner-container': !searchSpinner,
        'search-spinner-container': searchSpinner,
      })}
    >
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  )
}
