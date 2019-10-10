import React from 'react'

import './Panel.css'

export default ({ title, value, titleStyle, valueStyle, style }) => {
  return (
    <div style={style} className="panel">
      <span style={titleStyle}>{title}</span>
      <p style={valueStyle}>{value}</p>
    </div>
  )
}
