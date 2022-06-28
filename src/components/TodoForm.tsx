import { ChangeEvent, useState } from "react";
import { FC } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { todoAdded } from "../actions/TodoAction";
import Button from "./Button";

type TodoFormProps = {
  // onSubmit: (title: string) => void;
};

const TodoForm: FC<TodoFormProps> = ({}) => {
  const [inputChange, updateInputChange] = useState("");
  const [showTodoForm, updateShowTodoForm] = useState<boolean>(false);

  // const handleChange = () => {
  //   onSubmit;
  // };

  const isTodoForm = () => {
    updateShowTodoForm(true);
  };

  const removeTodoForm = () => {
    updateShowTodoForm(false);
  };

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateInputChange(event.target.value);
  };

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(todoAdded(inputChange));
    updateInputChange("");
    updateShowTodoForm(false);
  };

  return (
    <>
      <div className="my-5">
        <Button onClick={isTodoForm}>Add a todo +</Button>
      </div>
      {showTodoForm && (
        <div className="bg-white shadow sm:rounded-lg px-4 py-5 sm:p-6 space-y-5">
          <h1 className="font-semibold text-lg">Create a Todo</h1>
          <input
            placeholder="enter things to do"
            value={inputChange}
            onChange={changeInput}
            className="border border-gray-500 p-2 rounded-md"
          />
          <div className="flex space-x-2">
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

// const dispatchMapper = { onsubmit: todoAdded };
// const addTodo = connect(undefined, dispatchMapper);
// const TodoForm = addTodo(TodoForm);
// export default TodoForm;
