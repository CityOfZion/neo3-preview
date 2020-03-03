import React, { Component } from 'react';

import withThemeData from '../../hoc/withThemeData'
import neoLogoDark from '../../images/neo_color_light.svg'
import neoLogoLight from '../../images/neo_color_dark.svg'

export const DarkLogo = () => (
  <img id="neo-3-logo" src={neoLogoDark} alt="logo" />
)

export const LightLogo = () => (
  <img id="neo-3-logo" src={neoLogoLight} alt="logo" />
)


class ThemedLogo extends Component {

  componentDidMount() {

    if (localStorage.getItem("neo3-preview-dark-mode") === null || localStorage.getItem("neo3-preview-dark-mode") === 'true') {

      this.props.setTheme('DARK');
    } else {
      this.props.setTheme('LIGHT');
    }

  }

  render() {

    return (
      <>
        {this.props.theme.mode === "DARK" ? (
          <DarkLogo />
        ) : (
          <LightLogo />
        )}
      </>
    );
  }
}

export default withThemeData(ThemedLogo)