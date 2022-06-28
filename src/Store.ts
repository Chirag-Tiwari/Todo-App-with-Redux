import { createStore, Reducer } from "redux";
import { initialTodoState, todoReducer, todoState } from "./states/todo";

export type state = {
  todos: todoState;
};

const initialState: state = { todos: initialTodoState };

const reducer: Reducer<state> = (
  currentState: state = initialState,
  action
) => {
  return {
    todos: todoReducer(currentState.todos, action),
  };
};

const store = createStore(reducer);

export default store;
