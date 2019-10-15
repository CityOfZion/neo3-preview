import React from 'react'
import classNames from 'classnames'

import './Panel.scss'

export default ({
  title,
  value,
  titleStyle,
  valueStyle,
  secondary = false,
  style,
}) => {
  const panelClass = classNames({
    'secondary-panel': secondary,
    panel: true,
  })
  return (
    <div style={style} className={panelClass}>
      {title && <span style={titleStyle}>{title}</span>}
      <p style={valueStyle}>{value}</p>
    </div>
  )
}
