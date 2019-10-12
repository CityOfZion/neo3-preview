import React from 'react'

import Button from '../button/Button'

import { ReactComponent as ChevronLeft } from '../../images/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../images/chevron-right.svg'

import './Pagination.scss'

const PAGE_RANGE = 5

const generatePageIndex = position => {
  if (position <= 5) {
    return [1, 2, 3, 4, 5]
  }
  return [position - 2, position - 1, position, position + 1, position + 2]
}

export default class Pagination extends React.Component {
  state = {
    currPage: 1,
    selectedPage: 1,
    currentIndex: [],
  }

  componentDidMount() {
    this.setState({
      currentIndex: generatePageIndex(this.props.currPage || 1),
    })
  }

  render() {
    const { currentIndex } = this.state
    const { currPage = 1 } = this.props
    return (
      <div id="pagination-container">
        <Button
          onClick={() => this.handleNextButton(false)}
          disabled={currentIndex[currentIndex.length - 1] <= PAGE_RANGE}
          secondary
        >
          <ChevronLeft /> Prev
        </Button>

        {currentIndex.map(page => (
          <Button
            key={page}
            active={page === currPage}
            secondary
            onClick={() => this.props.handleSelectPage(page)}
          >
            {page}
          </Button>
        ))}

        <Button onClick={this.handleNextButton} secondary>
          Next <ChevronRight />
        </Button>
      </div>
    )
  }

  handleNextButton = (next = true) => {
    const { currentIndex } = this.state
    console.log(currentIndex[0] - 3)
    const nextIndex = generatePageIndex(
      next ? currentIndex[currentIndex.length - 1] + 3 : currentIndex[0] - 3,
    )
    this.setState({
      currentIndex: nextIndex,
    })
  }
}
