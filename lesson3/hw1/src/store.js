import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer.js';
import userReducer from './user.reducer.js';
import cartReducer from './cart.reducer.js';

const appReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: userReducer,
});

export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
