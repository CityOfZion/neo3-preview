import React from 'react'
import { uniqueId } from 'lodash-es'

import './List.css'

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

  return (
    <div className="data-list-container">
      <div className="data-list" style={gridstyle}>
        {columns.map(column => (
          <div className="data-list-column" key={column.name}>
            {column.name}
          </div>
        ))}

        {sortedByAccessor.map(data =>
          Object.values(data).map(detail => (
            <span onClick={() => handleRowClick(data)} key={uniqueId()}>
              {typeof detail === 'function' ? detail() : detail}
            </span>
          )),
        )}
      </div>
    </div>
  )
}

export default List
