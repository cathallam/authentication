import * as actionTypes from './types';

// create first action, pass in user data and payload state that will be received from redux
export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};

export const clearUser = () => {
  return {
    type:actionTypes.CLEAR_USER
  }
}