import React from 'react'

import withThemeData from '../../hoc/withThemeData'
import neoLogoDark from '../../images/neo_color_light.svg'
import neoLogoLight from '../../images/neo_color_dark.svg'

export const DarkLogo = () => (
  <img id="neo-3-logo" src={neoLogoDark} alt="logo" />
)

export const LightLogo = () => (
  <img id="neo-3-logo" src={neoLogoLight} alt="logo" />
)

const ThemedLogo = ({ theme }) =>
  theme.mode === 'LIGHT' ? <LightLogo /> : <DarkLogo />

export default withThemeData(ThemedLogo)
