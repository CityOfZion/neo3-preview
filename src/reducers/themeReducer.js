import { SET_THEME } from '../actions/themeActions'
export default (
  state = {
    mode: null,
  },
  action,
) => {
  switch (action.type) {
    case SET_THEME:
      return Object.assign({}, state, {
        mode: action.mode,
      })
    default:
      return state
  }
}
