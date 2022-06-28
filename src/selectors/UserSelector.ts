import { createSelector } from "reselect";
import { state } from "../Store";

export const userState = (s: state) => {
  return s.users;
};

export const userSelector = createSelector(userState, (userState) =>
  Object.keys(userState).map((userId) => userState[userId as any])
);

// export const userSelector = (s: state) =>
//   Object.keys(s.users).map((userId) => s.users[userId as any]);
