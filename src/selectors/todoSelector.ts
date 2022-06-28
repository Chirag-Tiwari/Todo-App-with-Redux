import { createSelector } from "reselect";
import { todoState } from "../states/todo";
import { state } from "../Store";
import { todo } from "../models/Todo";

const todoState = (s: state) => {
  return s.todos;
};

export const todoListSelector = createSelector(todoState, (todoState) =>
  Object.keys(todoState).map((todoId) => todoState[todoId as any])
);

export const doneSelector = createSelector(todoListSelector, (todo) =>
  todo.filter((t) => t.checked)
);

export const undoneSelector = createSelector(todoListSelector, (todo) =>
  todo.filter((t) => !t.checked)
);

export const doneCounter = createSelector(
  doneSelector,
  (doneList) => doneList.length
);

export const unDoneCounter = createSelector(
  undoneSelector,
  (unDoneList) => unDoneList.length
);

// export const todoListSelector = (todoState: todoState) =>
//   Object.keys(todoState).map((todoId) => todoState[todoId as any]);

// export const doneSelector = (todo: todo[]) => todo.filter((t) => t.checked);

// export const undoneSelector = (todo: todo[]) => todo.filter((t) => !t.checked);

// export const doneCounter = (doneSelector1: todo[]) => doneSelector1.length;

// export const unDoneCounter = (undoneSelector1: todo[]) =>
//   undoneSelector1.length;
