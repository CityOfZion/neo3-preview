import React from 'react'

import Button from '../button/Button'

import { ReactComponent as ChevronLeft } from '../../images/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../images/chevron-right.svg'

import './Pagination.scss'

const PAGE_RANGE = 5
const ITEMS_PER_PAGE = 15

const generatePageIndex = position => {
  if (position <= 5) {
    return [1, 2, 3, 4, 5]
  }
  return [position - 2, position - 1, position, position + 1, position + 2]
}

export default class Pagination extends React.Component {
  state = {
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

    this.broadcastCurrentPaginationData()
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currPage !== this.props.currPage ||
      prevProps.totalCount !== this.props.totalCount
    ) {
      this.broadcastCurrentPaginationData()
    }
  }

  render() {
    const { currPage = 1, paginated } = this.props
    const { currentIndex } = this.state

    return (
      <div id="pagination-container">
        <Button
          onClick={() => this.handleNextButton(false)}
          disabled={this.shouldDisablePreviousButton()}
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
              disabled={this.shouldDisablePaginationButton(page)}
            >
              {page}
            </Button>
          ))}

        <Button
          onClick={this.handleNextButton}
          disabled={this.shouldDisableNextButton()}
          secondary
        >
          Next <ChevronRight />
        </Button>
      </div>
    )
  }

  broadcastCurrentPaginationData = () => {
    const { currPage = 1, returnPaginationData, totalCount } = this.props
    const beginningCount = `${currPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE + 1}`
    if (returnPaginationData && totalCount) {
      const returnEndCount = () => {
        if (currPage * ITEMS_PER_PAGE < totalCount) {
          return `${currPage * ITEMS_PER_PAGE}`
        }
        return totalCount
      }

      returnPaginationData({
        display: `Viewing ${beginningCount} - ${returnEndCount()} out of ${totalCount}`,
        beginningCount,
        endCount: returnEndCount(),
      })
    } else if (returnPaginationData) {
      returnPaginationData({
        beginningCount,
        endCount: `${currPage * ITEMS_PER_PAGE}`,
      })
    }
  }

  shouldDisablePreviousButton = () => {
    const { currentIndex, previousButtonDisabled } = this.state
    const { paginated, currPage } = this.props

    if (currPage === 1) return true
    if (previousButtonDisabled && !paginated) return true
    if (!previousButtonDisabled && !paginated) return false
    return currentIndex[currentIndex.length - 1] <= PAGE_RANGE
  }

  shouldDisableNextButton = () => {
    const { currentIndex } = this.state
    if (this.props.paginated) {
      if (
        currentIndex[currentIndex.length - 1] * ITEMS_PER_PAGE >
        this.props.totalCount
      ) {
        return true
      }

      return false
    } else {
      if (this.props.currPage * ITEMS_PER_PAGE > this.props.totalCount) {
        return true
      }
    }
  }

  shouldDisablePaginationButton = page => {
    if (page * ITEMS_PER_PAGE - ITEMS_PER_PAGE + 1 > this.props.totalCount)
      return true
    return false
  }

  handleNextButton = (next = true) => {
    const { paginated, currPage } = this.props
    const { currentIndex } = this.state

    // if not paginated and the current page is 1
    // we disable the previous button
    if (!paginated) {
      currPage === 1 &&
        this.setState({
          previousButtonDisabled: !next,
        })
      return next
        ? this.props.handleSelectPage()
        : this.props.handleSelectPage(1)
    }

    // if paginated the next button simply renders
    // the next set of 5 pages available
    const nextIndex = generatePageIndex(
      next ? currentIndex[currentIndex.length - 1] + 3 : currentIndex[0] - 3,
    )
    this.setState({
      currentIndex: nextIndex,
    })
  }
}
