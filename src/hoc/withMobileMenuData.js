import React from 'react'
import { connect } from 'react-redux'

import { openMenu, closeMenu } from '../actions/mobileMenuActions'

const mapStateToProps = ({ menu }) => ({
  mobileMenuIsOpen: menu.open,
})

const mapDispatchToProps = dispatch => ({
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu()),
})

export default function withMobileMenuData(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class extends React.Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    },
  )
}
