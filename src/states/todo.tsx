import { Reducer } from "redux";
import { TODO_ADDED, TODO_MARKED_DONE } from "../actions/TodoAction";
import { todo } from "../models/Todo";

export type todoState = {
  [id: number]: todo;
};

export const initialTodoState = {};

export const todoReducer: Reducer<todoState> = (
  todoState = initialTodoState,
  action
) => {
  switch (action.type) {
    case TODO_ADDED: {
      const todo: todo = action.payload;
      return { ...todoState, [todo.id]: todo };
    }
    case TODO_MARKED_DONE: {
      const { id, checked } = action.payload;
      return {
        ...todoState,
        [id]: { ...todoState[id], checked },
      };
    }
    default: {
      return todoState;
    }
  }
};
