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
      <h2 className="text-lg font-medium leading-6 text-gray-900">
        Things to do
      </h2>
      <div className="space-y-2 mt-5">
        {list.map((element: any) => (
          <Activities
            data={element.title}
            checked={false}
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
