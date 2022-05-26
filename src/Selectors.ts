import { state } from "./Store";

export const doneSelector = (s: state) => s.todos.filter((t) => t.checked);
export const undoneSelector = (s: state) => s.todos.filter((t) => !t.checked);
export const doneCounter = (s: state) =>
  s.todos.filter((t) => t.checked).length;
export const unDoneCounter = (s: state) =>
  s.todos.filter((t) => !t.checked).length;
