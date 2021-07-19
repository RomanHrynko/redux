export const SET_USER = 'USERS/SET_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const setUser = user => {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
};

export const removeUser = () => {
  return {
    type: DELETE_USER,
  };
};
