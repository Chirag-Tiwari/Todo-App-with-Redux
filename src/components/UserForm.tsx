import { ChangeEvent, FC, useState } from "react";
import { connect } from "react-redux";
import { USER_ADDED } from "../actions/UserAction";
import Button from "./Button";

type UserFormProps = {
  onSubmit: (name: string) => void;
};

const UserForm: FC<any> = ({ onSubmit }) => {
  const [inputChange, updateInputChange] = useState("");

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateInputChange(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputChange);
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        placeholder="enter name "
        onChange={changeInput}
        value={inputChange}
        className="border border-gray-500 p-2 rounded-md"
      />
      <Button onSubmit={handleSubmit}>Add Users</Button>
    </div>
  );
};

UserForm.defaultProps = {};

export default connect(undefined, { onSubmit: USER_ADDED })(UserForm);
