import { createStore, Reducer } from "redux";
import { TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE } from "./Actions";
import { todo } from "./models/Todo";

export type state = {
  todos: todo[];
};

const initialState: state = { todos: [] };

const reducer: Reducer<state> = (
  currentState: state = initialState,
  action
) => {
  switch (action.type) {
    case "todo added": {
      const newTodoArray = [...currentState.todos, action.payload];
      return { ...currentState, todos: newTodoArray };
    }
    case "todo marked done": {
      const newTodoArray = currentState.todos.map((t) => {
        if (t.id === action.payload) {
          return { ...t, checked: true };
        }
        return t;
      });
      return { ...currentState, todos: newTodoArray };
    }
    case "todo marked undone": {
      const newTodoArray = currentState.todos.map((t) => {
        if (t.id === action.payload) {
          return { ...t, checked: false };
        }
        return t;
      });
      return { ...currentState, todos: newTodoArray };
    }
    default: {
      return currentState;
    }
  }
};

const store = createStore(reducer);

export default store;