import { FC } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { TODO_MARKED_DONE, TODO_MARKED_UNDONE } from "./Actions";

type ActivitiesProps = {
  checked: boolean;
  id: string;
  data: string;
};

const Activities: FC<ActivitiesProps> = ({ checked, data, id }) => {
  const dispatch = useDispatch();
  const isChecked = () => {
    if (checked) {
      dispatch(TODO_MARKED_DONE(id));
    } else dispatch(TODO_MARKED_UNDONE(id));
  };

  return (
    <div>
      {" "}
      <div className="flex space-x-2">
        <input
          key={id}
          onClick={isChecked}
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

Activities.defaultProps = { checked: false };

export default Activities;
