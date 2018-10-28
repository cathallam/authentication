import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';


// Reduces all the user related data
// Updates state based on current user and loads it to true

const initialUserState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    // ...Spreads all the properties from initialUserState
      case actionTypes.CLEAR_USER:
        return{
          ...initialUserState,
          isLoading: false
        }
        
    default:
      return state;
  }
};

// Only modify on certain part of state e.g.  Global state
const rootReducer = combineReducers({
  user: user_reducer
});

export default rootReducer;