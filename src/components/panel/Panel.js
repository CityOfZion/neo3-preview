import React from 'react'

import './Panel.css'

export default ({ title, value }) => {
  return (
    <div className="panel">
      <span>{title}</span>
      <p>{value}</p>
    </div>
  )
}
