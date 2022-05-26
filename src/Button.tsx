import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  theme?: "primary" | "secondary";
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, children, ...rest }) => {
  let themeClass = "bg-yellow-500 border-indigo-700 text-white";
  if (theme === "primary") {
    themeClass = "bg-yellow-500 border-indigo-700 text-white rounded-3xl";
  }
  if (theme === "secondary") {
    themeClass = " border-gray-400";
  }
  return (
    <div>
      <button {...rest} className={"border p-2 rounded-md " + themeClass}>
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = { theme: "primary" };

export default Button;
