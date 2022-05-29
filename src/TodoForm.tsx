import { useState } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TODO_ADDED } from "./Actions";
import Button from "./Button";
import { todo } from "./models/Todo";

type TodoFormProps = {};

const TodoForm: FC<TodoFormProps> = () => {
  const [inputChange, updateInputChange] = useState<any>();
  const [showTodoForm, updateShowTodoForm] = useState<boolean>(false);
  const isTodoForm = () => {
    updateShowTodoForm(true);
  };

  const removeTodoForm = () => {
    updateShowTodoForm(false);
  };

  const changeInput = (event: any) => {
    updateInputChange(event.target.value);
  };

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(TODO_ADDED(inputChange));
  };

  return (
    <>
      <Button onClick={isTodoForm}>Add a todo +</Button>
      {showTodoForm && (
        <div className="bg-white shadow sm:rounded-lg px-4 py-5 sm:p-6">
          <h1 className="font-semibold text-lg">Create a Todo</h1>
          <input
            placeholder="enter things to do"
            value={inputChange}
            onChange={changeInput}
            className="border border-gray-500 p-2 rounded-md"
          />
          <div className="flex">
            <Button onClick={addTodo}>save</Button>
            <Button onClick={removeTodoForm} theme="secondary">
              cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

TodoForm.defaultProps = {};

export default TodoForm;
