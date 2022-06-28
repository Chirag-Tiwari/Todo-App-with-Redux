import { uniqueId } from "lodash";

export const USER_ADDED = "user added";

export const userAdded = (name: string) => ({
  type: USER_ADDED,
  payload: { id: +uniqueId(), name: name },
});
