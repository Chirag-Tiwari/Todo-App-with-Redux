import { FC } from "react";
import { useSelector } from "react-redux";
import Activities from "./Activities";
import { undoneSelector } from "./Selectors";
import TodoForm from "./TodoForm";

type DoneListProps = {};

const DoneList: FC<DoneListProps> = () => {
  const list = useSelector(undoneSelector);

  return (
    <div>
      {list.map((element: any) => (
        <Activities
          data={element.title}
          key={element.id}
          id={element.id}
          checked
        />
      ))}
    </div>
  );
};

DoneList.defaultProps = {};

export default DoneList;
