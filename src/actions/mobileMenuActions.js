export const OPEN_MENU = 'OPEN_MENU'
export const openMenu = () => dispatch => {
  dispatch({
    type: OPEN_MENU,
  })
}

export const CLOSE_MENU = 'CLOSE_MENU'
export const closeMenu = () => dispatch => {
  dispatch({
    type: CLOSE_MENU,
  })
}
