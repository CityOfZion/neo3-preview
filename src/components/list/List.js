import React from 'react'
import { uniqueId } from 'lodash-es'

import './List.css'
import { cpus } from 'os'

export const List = ({ columns, data, handleRowClick }) => {
  const sortedByAccessor = data.map(data => {
    const sorted = {}
    columns.forEach(column => {
      sorted[column.accessor] = data[column.accessor]
    })
    return sorted
  })

  const gridstyle = {
    gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
  }

  const conditionalBorderRadius = index => {
    if (!index)
      return {
        borderRadius: '3px 0 0 3px',
      }
    if (index === columns.length - 1)
      return {
        borderRadius: '0 3px 3px 0',
      }
    return null
  }

  return (
    <div className="data-list-container">
      <div className="data-list" style={gridstyle}>
        {columns.map((column, i) => (
          <div
            style={{ ...conditionalBorderRadius(i), ...(column.style || {}) }}
            className="data-list-column"
            key={column.name}
          >
            {column.name}
          </div>
        ))}

        {sortedByAccessor.map(data =>
          Object.values(data).map(detail => (
            <span
              style={conditionalBorderRadius()}
              onClick={() => handleRowClick(data)}
              key={uniqueId()}
            >
              {typeof detail === 'function' ? detail() : detail}
            </span>
          )),
        )}
      </div>
    </div>
  )
}

export default List
