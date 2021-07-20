import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer.js';

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer);

export default store;
