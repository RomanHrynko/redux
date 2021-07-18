import React from 'react';
import ThemedButton from './ThemedButton.jsx';
import { themes, ThemeContext } from './themes-context.js';

class App extends React.Component {
  state = {
    theme: themes.dark,
  };

  toggleThemes = () => {
    const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;

    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleThemes}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleThemes}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;