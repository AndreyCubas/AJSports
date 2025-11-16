

import React from "react";

type InputProps = {
  className?: string;
} & Omit<React.ComponentProps<"input">, "className">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    const base =
      "peer h-10 w-106 bg-transparent px-[15px] py-0 " +
      "placeholder-transparent " +
      "border border-gray-500 rounded-md " + 
      "focus:border-blue-600 " + 
      "focus:outline-none focus:ring-0"; 

    const classes = `${base} ${className || ""}`;

    return <input ref={ref} className={classes} {...rest} />;
  }
);

Input.displayName = "I  nput";
export default Input;