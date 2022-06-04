import { FC, useCallback } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { connect, useDispatch } from "react-redux";
import { todoMarkedDone } from "./Actions";
import { todo } from "./models/Todo";

type TodoActivitiesProps = {
  todo: todo;
  onStatusChange: (id: number, checked: boolean) => void;
};

const TodoActivities: FC<TodoActivitiesProps> = ({ todo, onStatusChange }) => {
  const { id, checked, title } = todo;

  const onChange = useCallback(() => {
    onStatusChange(id, !checked);
  }, [id, checked]);
  // const dispatch = useDispatch();
  // const isChecked = () => {
  //   dispatch(todoMarkedDone(id, checked));
  // };

  return (
    <div>
      {" "}
      <div className="flex space-x-2">
        <input
          key={id}
          onChange={onChange}
          checked={checked}
          type="checkbox"
          className="mt-1"
        />
        <span className={"font-bold " + (checked && "line-through ")}>
          {title}
        </span>{" "}
        <RiDeleteBin5Fill className="mt-1" />
      </div>
    </div>
  );
};

// TodoActivities.defaultProps = { checked: false };

export default TodoActivities;

// const dispatchMapper = { onStatusChange: todoMarkedDone };

// const todoRow = connect(undefined, dispatchMapper);
// export const todoActivities = todoRow(TodoActivities);
