import { UserActionTypes } from "./user.type";

export const setCurrentUser = user => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
};
