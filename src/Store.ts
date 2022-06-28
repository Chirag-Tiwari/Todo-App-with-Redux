import { createStore, Reducer } from "redux";
import { initialTodoState, todoReducer, todoState } from "./states/todo";
import { initialUserState, userReducer, userState } from "./states/Users";

export type state = {
  todos: todoState;
  users: userState;
};

const initialState: state = {
  todos: initialTodoState,
  users: initialUserState,
};

const reducer: Reducer<state> = (
  currentState: state = initialState,
  action
) => {
  return {
    todos: todoReducer(currentState.todos, action),
    users: userReducer(currentState.users, action),
  };
};

const store = createStore(reducer);

export default store;
