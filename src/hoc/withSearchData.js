import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { handleSearchInput } from '../actions/searchActions'
import { SEARCH_TYPES } from '../constants'

const mapStateToProps = ({ search }) => ({
  ...search,
})

const mapDispatchToProps = dispatch => ({
  handleSearchInput: search => dispatch(handleSearchInput(search)),
})

function withSearchData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      componentDidUpdate(prevProps) {
        const { searchType, history, searchValue } = this.props
        if (searchType !== prevProps.searchType) {
          if (searchType) {
            switch (searchType) {
              case SEARCH_TYPES.TRANSACTION:
                return history.push(`/transaction/${searchValue}`)
              case SEARCH_TYPES.CONTRACT:
                return history.push(`/contract/${searchValue}`)
              case SEARCH_TYPES.ADDRESS:
                return history.push(`/address/${searchValue}`)
              case SEARCH_TYPES.BLOCK:
                return history.push(`/block/${searchValue}`)
              default:
                break
            }
          }
        }
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}

export default WrappedComponent => withRouter(withSearchData(WrappedComponent))
