import { FC } from "react";
import { useSelector } from "react-redux";
import Activities from "./Activities";
import { doneSelector } from "./Selectors";

type TodoListProps = {};

const TodoList: FC<TodoListProps> = () => {
  const list = useSelector(doneSelector);
  console.log("list", list);
  return (
    <div>
      {list.map((element: any) => (
        <Activities
          data={element.title}
          checked={false}
          id={element.id}
          key={element.id}
        />
      ))}
    </div>
  );
};

TodoList.defaultProps = {};

export default TodoList;
