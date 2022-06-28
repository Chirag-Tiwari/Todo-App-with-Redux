import { uniqueId } from "lodash";
export const TODO_ADDED = "todo added";
export const TODO_MARKED_DONE = "todo marked done";
export const TODO_MARKED_UNDONE = "todo marked undone";

export const todoAdded = (data: string) => {
  return {
    type: TODO_ADDED,
    payload: { id: +uniqueId(), title: data, checked: false },
  };
};

export const todoMarkedDone = (id: number, checked: boolean) => {
  return { type: TODO_MARKED_DONE, payload: { id, checked } };
};

// export const todoMarkedUndone = (id: number) => {
//   return { type: TODO_MARKED_UNDONE, payload: id };
// };
