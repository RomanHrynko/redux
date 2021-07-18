import React from 'react';
import { ThemeContext } from './themes-context.js';

class ThemedButton extends React.Component {
  render() {
    console.log(this.context);
    return (
      <button
        {...this.props}
        className="btn"
        style={{ backgroundColor: this.context.background, color: this.context.fontColor }}
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
