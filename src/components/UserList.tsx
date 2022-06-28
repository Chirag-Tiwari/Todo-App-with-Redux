import { FC } from "react";
import { connect } from "react-redux";
import { user } from "../models/User";
import { userSelector } from "../selectors/UserSelector";
import { state } from "../Store";
import UserLayOut from "./UserLayOut";

type UserListProps = { users: user[] };

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="space-y-2">
      {users.map((u) => (
        <UserLayOut user={u} key={u.id}></UserLayOut>
      ))}
    </div>
  );
};

UserList.defaultProps = {};

export default UserList;

const mapStateToProps = (s: state) => {
  return {
    users: userSelector(s),
  };
};

export const UsersList = connect(mapStateToProps)(UserList);
