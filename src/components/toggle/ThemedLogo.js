import React, { Component } from 'react';
import { connect } from 'react-redux'

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

  constructor() {
    super();
    this.state = {
      theme: null
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("neo3-preview-dark-mode"))
    if (localStorage.getItem("neo3-preview-dark-mode") === null) {
      this.setState({ theme: "neo3-preview-light-mode" });
    }

    this.setState({ theme: "neo3-preview-light-mode" });
    console.log(this.props.theme.theme)
  }

  render() {
    const { theme } = this.state;

    return (
      <>
        {this.props.theme.mode === "LIGHT" ? (
          <LightLogo />
        ) : (
          <DarkLogo />
        )}
      </>
    );
  }
}

export default withThemeData(ThemedLogo)