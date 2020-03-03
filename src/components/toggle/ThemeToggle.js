import React, { Component } from 'react';
import Toggle from 'react-toggle';

import withThemeData from '../../hoc/withThemeData'
import './Toggle.scss';




class ThemeToggle extends Component {
  constructor(props) {
    super(props);

    if(JSON.parse(localStorage.getItem('neo3-preview-dark-mode')) === true) {
      document.body.classList.add('dark-mode');
    }

    this.state = {
      darkMode: JSON.parse(localStorage.getItem('neo3-preview-dark-mode'))
    }

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  getState() {
    return this.state.darkMode;
  }

  handleModeChange() {
    if(!this.state.darkMode) {
      document.body.classList.add('dark-mode');
      this.props.setTheme('DARK');
    } else {
      document.body.classList.remove('dark-mode');
      this.props.setTheme('LIGHT');
    }

    this.setState({
      darkMode: (!this.state.darkMode)
    });
    
    localStorage.setItem('neo3-preview-dark-mode', !this.state.darkMode);

  }

  render() {
    return (
      <div id="footer-theme-toggle">
        <span>{this.state.darkMode === true ? 'Dark' : 'Light'} Mode</span>
        <Toggle
        defaultChecked={this.state.darkMode}
        icons={false}
        onChange={this.handleModeChange} />
      </div>
    );
  }
}

export default withThemeData(ThemeToggle)