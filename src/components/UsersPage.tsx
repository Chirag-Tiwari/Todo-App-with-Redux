import { FC } from "react";
import UserForm from "./UserForm";

type userPageProps = {};

const UsersPage: FC<userPageProps> = () => {
  return (
    <div>
      <UserForm />
    </div>
  );
};

UsersPage.defaultProps = {};

export default UsersPage;
