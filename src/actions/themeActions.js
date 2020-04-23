export const SET_THEME = 'SET_THEME'
export const setTheme = mode => dispatch => {
  dispatch({
    type: SET_THEME,
    mode,
    receivedAt: Date.now(),
  })
}
