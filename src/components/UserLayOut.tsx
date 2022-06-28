import { FC } from "react";
import { user } from "../models/User";

type userLayOutProps = { user: user };

const userLayOut: FC<userLayOutProps> = ({ user }) => {
  const { id, name } = user;
  return (
    <div className="space-x-2 flex bg-purple-300 border rounded-md ">
      <h1 className="font-bold "># {id} </h1>
      <h1 className=" font-semibold italic ml-3">{name}</h1>
    </div>
  );
};

userLayOut.defaultProps = {};

export default userLayOut;
