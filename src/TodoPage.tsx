import { FC } from "react";
import DoneList from "./DoneList";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = () => {
  return (
    <div>
      <div className="p-5">
        <h1>Todo</h1>
        <TodoList />
        <TodoForm />
        <h1>done</h1>
        <DoneList />
      </div>
    </div>
  );
};

TodoPage.defaultProps = {};

export default TodoPage;
