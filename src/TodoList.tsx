import { FC } from "react";
import { connect, useSelector } from "react-redux";
import TodoActivities from "./TodoActivities";
import { doneSelector, undoneSelector } from "./Selectors";
import { state } from "./Store";
import { todo } from "./models/Todo";

type TodoListProps = { todos: todo[] };

const TodoList: FC<TodoListProps> = ({ todos }) => {
  // const list = useSelector(doneSelector);

  // console.log("list", list);
  return (
    <div>
      <div className="space-y-2 mt-5">
        {todos.map((element: todo) => (
          <TodoActivities
            data={element.title}
            checked={!element.checked}
            id={element.id}
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
  return { todos: doneSelector(s) };
};

const completeMapper = (s: state) => {
  return { todos: undoneSelector(s) };
};

const inCompleteListCreator = connect(inCompleteMapper);
const completeListCreator = connect(completeMapper);

export const MyTodoList = inCompleteListCreator(TodoList);
export const DoneList = completeListCreator(TodoList);
