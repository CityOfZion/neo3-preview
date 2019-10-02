import React from 'react'
import { uniqueId } from 'lodash-es'

import './List.css'

export const List = () => {
  const columns = [
    { name: 'height', accessor: 'test' },
    { name: 'size', accessor: 'test1' },
    { name: 'created on', accessor: 'test2' },
  ]

  const data = [
    {
      test: 'foobar',
      test1: '123455',
      test2: '!!!!',
    },
    {
      test: 'foobar',
      test1: '123455',
      test2: '!!!!',
    },
    {
      test2: 'TESTTEST',
      test: 'foobar',
      test1: '123455',
    },
  ]

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
            {column.name.toUpperCase()}
          </div>
        ))}

        {sortedByAccessor.map(data =>
          Object.values(data).map(data => <span key={uniqueId()}>{data}</span>),
        )}
      </div>
    </div>
  )
}

export default List
