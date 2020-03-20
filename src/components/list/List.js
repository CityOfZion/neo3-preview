import React from 'react'
import { uniqueId } from 'lodash-es'
import classNames from 'classnames'

import './List.css'

export const List = ({
  columns,
  data,
  handleRowClick,
  isLoading,
  rowId,
  withoutPointer = false,
}) => {
  const sortedByAccessor = data.map(data => {
    const sorted = {}
    columns.forEach(column => {
      sorted[column.accessor] = data[column.accessor]
      sorted.id = data[rowId]
    })
    return sorted
  })

  const gridstyle = {
    gridTemplateColumns: `repeat(${columns.length}, auto)`,
  }

  const conditionalBorderRadius = index => {
    if (!index)
      return {
        borderRadius: '3px 0 0 3px',
      }
    if (index === columns.length)
      return {
        borderRadius: '0 3px 3px 0',
      }
    return null
  }

  const rowClass = classNames({
    'loading-table-row': isLoading,
    'without-pointer-cursor': withoutPointer,
  })

  const headerRowClass = classNames({
    'loading-table-row': isLoading,
    'data-list-column': true,
  })

  const [currentHoveredIndex, setCurrentHoveredIndex] = React.useState(null)

  return (
    <div className="data-list-container">
      <div className="data-list" style={gridstyle}>
        {columns.map((column, i) => (
          <div
            style={{ ...conditionalBorderRadius(i), ...(column.style || {}) }}
            className={headerRowClass}
            key={column.name}
          >
            {isLoading ? '' : column.name}
          </div>
        ))}

        {sortedByAccessor.map((data, index) =>
          Object.keys(data).map((key, i) => {
            const hoveredClassName = `cellhovered + ${rowClass}`
            return (
              key !== 'id' && (
                <span
                  style={conditionalBorderRadius(i)}
                  onClick={() => handleRowClick && handleRowClick(data)}
                  key={uniqueId()}
                  className={
                    currentHoveredIndex === index
                      ? hoveredClassName
                      : rowClass
                  }
                  onMouseEnter={() => setCurrentHoveredIndex(index)}
                  onMouseLeave={() => setCurrentHoveredIndex(null)}
                >
                  {isLoading
                    ? ''
                    : typeof data[key] === 'function'
                    ? data[key]()
                    : data[key]}
                </span>
              )
            )
          }),
        )}
      </div>
    </div>
  )
}

export default List
