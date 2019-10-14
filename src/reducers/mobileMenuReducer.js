import { CLOSE_MENU, OPEN_MENU } from '../actions/mobileMenuActions'

export default (
  state = {
    open: false,
  },
  action,
) => {
  switch (action.type) {
    case CLOSE_MENU:
      return Object.assign({}, state, {
        open: false,
      })
    case OPEN_MENU:
      return Object.assign({}, state, {
        open: true,
      })

    default:
      return state
  }
}
