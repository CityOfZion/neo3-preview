import React from 'react'

import Button from '../button/Button'

import { ReactComponent as ChevronLeft } from '../../images/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../images/chevron-right.svg'

import './Pagination.css'

const PAGE_RANGE = 5

const generatePageIndex = currPage => {
  if (currPage <= 5) {
    return [1, 2, 3, 4, 5]
  }
  return [currPage - 2, currPage - 1, currPage, currPage + 1, currPage + 2]
}

export default class Pagination extends React.Component {
  state = {
    currPage: 1,
    currentIndex: [],
  }

  componentDidMount() {
    this.setState({
      currPage: this.props.currPage || 1,
      currentIndex: generatePageIndex(this.props.currPage || 1),
    })
  }

  render() {
    const { currPage = 1 } = this.props
    const { currentIndex } = this.state
    return (
      <div id="pagination-container">
        <Button
          onClick={() => this.handleNextButton(false)}
          disabled={currPage <= 5}
          secondary
        >
          <ChevronLeft /> Prev
        </Button>

        {currentIndex.map(page => (
          <Button key={page} active={page === currPage} secondary>
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
    const { currPage } = this.setState
    let nextPage = currPage
    // if (next) {
    return this.setState({
      currPage: next ? (nextPage += PAGE_RANGE) : (nextPage -= PAGE_RANGE),
      currentIndex: generatePageIndex(nextPage).map(number =>
        next ? number + PAGE_RANGE : number - PAGE_RANGE,
      ),
    })
    // }
    // return this.setState({
    //   currentIndex: generatePageIndex(this.state.currPage - PAGE_RANGE),
    // })
  }
}
