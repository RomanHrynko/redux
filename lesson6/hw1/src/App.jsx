import React from 'react';
import Weather from './weather/Weather.jsx';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;
