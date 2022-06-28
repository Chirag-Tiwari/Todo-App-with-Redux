import { Reducer } from "redux";
import { USER_ADDED } from "../actions/UserAction";
import { user } from "../models/User";

export type userState = {
  [id: number]: user;
};

export const initialUserState = {};

export const userReducer: Reducer<userState> = (
  userState = initialUserState,
  action
) => {
  switch (action.type) {
    case USER_ADDED: {
      const user: user = action.payload;
      return { ...userState, [user.id]: user };
    }
    default: {
      return initialUserState;
    }
  }
};
