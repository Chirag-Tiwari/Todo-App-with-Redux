import { FC } from "react";
import { useSelector } from "react-redux";
import TodoActivities from "./TodoActivities";
import { undoneSelector } from "../Selectors";
import { todo } from "../models/Todo";

type DoneListProps = {
  todos: todo[];
  onStatusChange: (id: number, checked: boolean) => void;
};

const DoneList: FC<DoneListProps> = ({ todos, onStatusChange }) => {
  // const list = useSelector(undoneSelector);

  return (
    <div>
      <h2 className="text-lg font-medium leading-6 text-gray-900 my-5">
        Things done
      </h2>
      {todos.map((element: todo) => (
        <TodoActivities
          todo={element}
          key={element.id}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

DoneList.defaultProps = {};

export default DoneList;
