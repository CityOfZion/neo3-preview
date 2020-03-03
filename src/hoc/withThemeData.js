import React from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../actions/themeActions'

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setTheme: mode => dispatch(setTheme(mode)),
})

export default function withThemeData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(props => {
    return <WrappedComponent {...props} />
  })
}