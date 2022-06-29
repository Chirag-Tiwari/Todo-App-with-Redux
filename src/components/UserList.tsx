import { FC, useEffect } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../actions/Students";
import { user } from "../models/User";
import { userSelector } from "../selectors/UserSelector";
import { state } from "../Store";
import UserLayOut from "./UserLayOut";

type UserListProps = { users: user[]; getStudents: () => any };

const UserList: FC<UserListProps> = ({ users, getStudents }) => {
  useEffect(() => {
    getStudents();
  }, []);

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

const mapDispatchToProps = { getStudents: fetchStudents };

export const UsersList = connect(mapStateToProps, mapDispatchToProps)(UserList);
