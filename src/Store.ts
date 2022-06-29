import { applyMiddleware, createStore, Reducer } from "redux";
import sagaMiddleware, { rootSaga } from "./sagas";
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
  console.log("action dispatched", action);
  return {
    todos: todoReducer(currentState.todos, action),
    users: userReducer(currentState.users, action),
  };
};

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
