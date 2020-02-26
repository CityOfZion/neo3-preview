import React, { Component } from 'react';

import './Toggle.scss';
import Toggle from 'react-toggle';

class ThemeToggle extends Component {
  constructor(props) {
    super(props);

    if(JSON.parse(localStorage.getItem('dark-mode')) === true) {
      document.body.classList.add('dark-mode');
    }

    this.state = {
      darkMode: JSON.parse(localStorage.getItem('dark-mode'))
    }

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  getState() {
    return this.state.darkMode;
  }

  handleModeChange() {
    if(!this.state.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    this.setState({
      darkMode: (!this.state.darkMode)
    });
    localStorage.setItem('dark-mode', !this.state.darkMode);
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

export default ThemeToggle;