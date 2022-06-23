import { state } from "./Store";

export const doneSelector = (s: state) =>
  Object.keys(s.todos)
    .map((todoId) => s.todos[todoId as any])
    .filter((t) => t.checked);

export const undoneSelector = (s: state) =>
  Object.keys(s.todos)
    .map((todoId) => s.todos[todoId as any])
    .filter((t) => !t.checked);

export const doneCounter = (s: state) =>
  Object.keys(s.todos)
    .map((todoId) => s.todos[todoId as any])
    .filter((t) => t.checked).length;

export const unDoneCounter = (s: state) =>
  Object.keys(s.todos)
    .map((todoId) => s.todos[todoId as any])
    .filter((t) => !t.checked).length;
