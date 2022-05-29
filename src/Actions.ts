import { uniqueId } from "lodash";

export const TODO_ADDED = (data: string) => {
  return {
    type: "todo added",
    payload: { id: +uniqueId(), title: data, checked: true },
  };
};

export const TODO_MARKED_DONE = (id: number) => {
  return { type: "todo marked done", payload: id };
};

export const TODO_MARKED_UNDONE = (id: number) => {
  return { type: "todo marked undone", payload: id };
};
// export const TODO_MARKED_DONE = "todo marked done";
// export const TODO_MARKED_UNDONE = "todo marked undone";
