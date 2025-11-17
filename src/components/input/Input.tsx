import React from "react";

type InputProps = {
  className?: string;
} & Omit<React.ComponentProps<"input">, "className">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    const base =
      "peer w-full h-11 bg-transparent px-4 py-0 " +
      "placeholder-transparent " +
      "border border-gray-400 rounded-md " +
      "transition-all duration-200 " +
      "focus:border-blue-600 focus:outline-none focus:ring-0";

    const classes = `${base} ${className || ""}`;

    return <input ref={ref} className={classes} {...rest} />;
  }
);

Input.displayName = "Input";
export default Input;