import React from 'react'
import { connect } from 'react-redux'

import { fetchStats } from '../actions/statsActions'

const mapStateToProps = ({ stats }) => ({
  ...stats,
})

const mapDispatchToProps = dispatch => ({
  fetchStats: () => dispatch(fetchStats()),
})

export default function withStatsData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      componentDidMount() {
        this.props.fetchStats()
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}
