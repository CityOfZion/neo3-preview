import React from 'react'
import Toggle from 'react-toggle'

import withThemeData from '../../hoc/withThemeData'
import './Toggle.scss'

export const DARK_THEME = 'DARK'
export const LIGHT_THEME = 'LIGHT'

export const applyTheme = (theme, setTheme) => {
  if (theme === DARK_THEME) {
    document.body.classList.add('dark-mode')
    setTheme(DARK_THEME)
  } else {
    document.body.classList.remove('dark-mode')
    setTheme(LIGHT_THEME)
  }
}

const saveAndApplyTheme = (theme, setTheme) => {
  localStorage.setItem('neo3-preview-theme', theme)
  applyTheme(theme, setTheme)
}

const ThemeToggle = ({ setTheme, theme }) => {
  const { mode } = theme

  return (
    <div id="footer-theme-toggle">
      <span>{mode === DARK_THEME ? 'Dark' : 'Light'} Mode</span>
      <Toggle
        defaultChecked={mode === LIGHT_THEME}
        icons={false}
        onChange={() =>
          saveAndApplyTheme(
            mode === DARK_THEME ? LIGHT_THEME : DARK_THEME,
            setTheme,
          )
        }
      />
    </div>
  )
}

export default withThemeData(ThemeToggle)
