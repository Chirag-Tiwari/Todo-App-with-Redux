import { FC } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { todoMarkedDone, todoMarkedUndone } from "./Actions";

type TodoActivitiesProps = {
  checked: boolean;
  id: number;
  data: string;
};

const TodoActivities: FC<TodoActivitiesProps> = ({ checked, data, id }) => {
  const dispatch = useDispatch();
  const isChecked = () => {
    if (checked) {
      dispatch(todoMarkedDone(id));
    } else dispatch(todoMarkedUndone(id));
  };

  return (
    <div>
      {" "}
      <div className="flex space-x-2">
        <input
          key={id}
          onChange={isChecked}
          checked={checked}
          type="checkbox"
          className="mt-1"
        />
        <span className={"font-bold " + (checked && "line-through ")}>
          {data}
        </span>{" "}
        <RiDeleteBin5Fill className="mt-1" />
      </div>
    </div>
  );
};

TodoActivities.defaultProps = { checked: false };

export default TodoActivities;
