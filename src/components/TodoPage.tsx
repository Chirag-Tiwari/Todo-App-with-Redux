import { FC, useState } from "react";
import TodoForm from "./TodoForm";
import { DoneList, MyTodoList } from "./TodoList";
// import DoneList from "./DoneList";

// import TodoList from "./TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold leading-tight text-gray-900">
        Things to get done
      </h1>
      <div className="p-5">
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          Things to do
        </h2>
        <MyTodoList />
        <TodoForm />
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          Things Done
        </h2>
        <DoneList />
      </div>
    </div>
  );
};

TodoPage.defaultProps = {};

export default TodoPage;
