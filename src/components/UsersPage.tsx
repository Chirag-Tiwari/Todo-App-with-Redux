import { FC } from "react";
import UserForm from "./UserForm";
import { UsersList } from "./UserList";

type userPageProps = {};

const UsersPage: FC<userPageProps> = () => {
  return (
    <div>
      <UserForm />
      <h1 className="text-2xl font-bold">Users</h1>
      <UsersList />
    </div>
  );
};

UsersPage.defaultProps = {};

export default UsersPage;
