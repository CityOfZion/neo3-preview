import React from 'react'

import './Card.css'

export default ({ value, detail }) => {
  return (
    <div className="card">
      <h2>{value}</h2>
      <p>{detail}</p>
    </div>
  )
}
