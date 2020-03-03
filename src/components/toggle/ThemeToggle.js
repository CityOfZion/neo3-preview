import React, { useEffect } from 'react'
import Toggle from 'react-toggle'

import withThemeData from '../../hoc/withThemeData'
import './Toggle.scss'

export const LIGHT_THEME = 'LIGHT'
export const DARK_THEME = 'DARK'

const applyTheme = (theme, setTheme) => {
  if (theme === DARK_THEME) {
    document.body.classList.add('dark-mode')
    setTheme(DARK_THEME)
  } else {
    document.body.classList.remove('dark-mode')
    setTheme(LIGHT_THEME)
  }
}

const handleModeChange = (theme, setTheme) => {
  localStorage.setItem('neo3-preview-theme', theme)
  applyTheme(theme, setTheme)
}

const ThemeToggle = ({ setTheme, theme }) => {
  const { mode } = theme

  useEffect(() => {
    const theme = localStorage.getItem('neo3-preview-theme')
    setTheme(theme)
    applyTheme(theme, setTheme)
  }, [setTheme])

  return (
    <div id="footer-theme-toggle">
      <span>{mode === DARK_THEME ? 'Dark' : 'Light'} Mode</span>
      <Toggle
        defaultChecked={mode === LIGHT_THEME}
        icons={false}
        onChange={() =>
          handleModeChange(
            mode === DARK_THEME ? LIGHT_THEME : DARK_THEME,
            setTheme,
          )
        }
      />
    </div>
  )
}

export default withThemeData(ThemeToggle)
