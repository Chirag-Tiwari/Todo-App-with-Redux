import { FC, useState } from "react";
import Button from "./Button";
import DoneList from "./DoneList";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = () => {
  return (
    <div>
      <div className="p-5">
        <TodoList />
        <TodoForm />
        <DoneList />
      </div>
    </div>
  );
};

TodoPage.defaultProps = {};

export default TodoPage;
