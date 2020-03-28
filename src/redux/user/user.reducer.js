import { UserActionTypes } from "./user.type";

const INITIAL_STATE = {
  currentUser: null
};

// every single reducer, gets every single dispatched action
// even if that action is not related to a particular reducer,
// that reducer still gets passed the action in, that why we
//  always returbn a default state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
