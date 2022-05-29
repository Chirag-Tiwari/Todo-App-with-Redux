import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

type ButtonProps = {
  theme?: "primary" | "secondary";
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, children, ...rest }) => {
  const buttonClasses = cn(
    "border p-2 rounded-md bg-yellow-500 border-indigo-700 text-white",
    {
      "bg-yellow-500 border-indigo-700 text-white rounded-3xl":
        theme === "primary",
      " border-gray-400": theme === "secondary",
    }
  );
  // let themeClass = "bg-yellow-500 border-indigo-700 text-white";
  // if (theme === "primary") {
  //   themeClass = "bg-yellow-500 border-indigo-700 text-white rounded-3xl";
  // }
  // if (theme === "secondary") {
  //   themeClass = " border-gray-400";
  // }
  return (
    <div>
      <button {...rest} className={buttonClasses}>
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = { theme: "primary" };

export default Button;
