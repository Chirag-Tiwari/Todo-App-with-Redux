import { FC, useState } from "react";
import { DoneList, MyTodoList } from "./TodoList";
// import DoneList from "./DoneList";
import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          Things to do
        </h2>
        <MyTodoList />
        <TodoForm />
        <DoneList />
      </div>
    </div>
  );
};

TodoPage.defaultProps = {};

export default TodoPage;
