import { SET_USER, DELETE_USER } from './user.actions.js';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;

    case DELETE_USER:
      return null;

    default:
      return state;
  }
};

export default userReducer;
