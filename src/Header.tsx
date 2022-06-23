import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { doneCounter, unDoneCounter } from "./Selectors";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const todoCount = useSelector(unDoneCounter);
  const doneCount = useSelector(doneCounter);

  return (
    <div className="flex justify-evenly border border-gray-700 p-2">
      <Link to="/">
        <h1 className=" text-xl font-semibold pl-6">XTodo</h1>
      </Link>
      <h1 className="italic font-bold">Todo Count:{todoCount}</h1>
      <h1 className="italic font-bold">Done Count:{doneCount}</h1>
      {/* <Link
        to="/upgrade"
        className="border border-gray-500 px-4 py-1 rounded-md hover:bg-gray-200"
      >
        Upgrade
      </Link> */}
    </div>
  );
};

Header.defaultProps = {};

export default Header;
