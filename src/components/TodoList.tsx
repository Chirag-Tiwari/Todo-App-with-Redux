import { FC } from "react";
import { connect, useSelector } from "react-redux";
import TodoActivities from "./TodoActivities";
import { doneSelector, undoneSelector } from "../selectors/TodoSelector";
import { state } from "../Store";
import { todo } from "../models/Todo";
import { todoMarkedDone } from "../actions/TodoAction";

type TodoListProps = {
  todos: todo[];
  onStatusChange: (id: number, checked: boolean) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onStatusChange }) => {
  // const list = useSelector(doneSelector);

  // console.log("list", list);
  return (
    <div>
      <div className="space-y-2 mt-5">
        {todos.map((element: todo) => (
          <TodoActivities
            onStatusChange={onStatusChange}
            todo={element}
            key={element.id}
          />
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {};

export default TodoList;

const inCompleteMapper = (s: state) => {
  return { todos: undoneSelector(s) };
};

const completeMapper = (s: state) => {
  return { todos: doneSelector(s) };
};

const dispatchMapper = { onStatusChange: todoMarkedDone };

const inCompleteListCreator = connect(inCompleteMapper, dispatchMapper);
const completeListCreator = connect(completeMapper, dispatchMapper);

export const MyTodoList = inCompleteListCreator(TodoList);
export const DoneList = completeListCreator(TodoList);
