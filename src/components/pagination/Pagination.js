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
    selectedPage: 1,
    currentIndex: [],
    previousButtonDisabled: true,
  }

  static defaultProps = {
    paginated: true,
  }

  componentDidMount() {
    this.setState({
      currentIndex: generatePageIndex(this.props.currPage || 1),
    })
  }

  render() {
    const { currPage = 1, paginated } = this.props
    const { currentIndex } = this.state

    return (
      <div id="pagination-container">
        <Button
          onClick={() => this.handleNextButton(false)}
          disabled={this.handleDisabledLogicOnPrevButton()}
          secondary
        >
          <ChevronLeft /> Prev
        </Button>

        {paginated &&
          currentIndex.map(page => (
            <Button
              key={page}
              active={page === currPage}
              secondary
              onClick={() => this.props.handleSelectPage(page)}
              disabled={
                this.props.numberOfPages && this.props.numberOfPages < page
              }
            >
              {page}
            </Button>
          ))}

        <Button
          onClick={this.handleNextButton}
          disabled={
            this.props.numberOfPages &&
            this.props.numberOfPages <
              this.state.currentIndex[this.state.currentIndex.length - 1]
          }
          secondary
        >
          Next <ChevronRight />
        </Button>
      </div>
    )
  }

  handleDisabledLogicOnPrevButton = () => {
    const { currentIndex, previousButtonDisabled } = this.state
    const { paginated, currPage } = this.props

    if (currPage === 1) return true
    if (previousButtonDisabled && !paginated) return true
    if (!previousButtonDisabled && !paginated) return false
    return currentIndex[currentIndex.length - 1] <= PAGE_RANGE
  }

  handleNextButton = (next = true) => {
    const { paginated, currPage } = this.props
    const { currentIndex } = this.state

    if (!paginated) {
      currPage === 1 &&
        this.setState({
          previousButtonDisabled: !next,
        })
      return next
        ? this.props.handleSelectPage()
        : this.props.handleSelectPage(1)
    }

    const nextIndex = generatePageIndex(
      next ? currentIndex[currentIndex.length - 1] + 3 : currentIndex[0] - 3,
    )
    this.setState({
      currentIndex: nextIndex,
    })
  }
}
