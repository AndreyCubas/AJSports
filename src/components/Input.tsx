import React from "react"

type InputProps = {    
    className?: string;
} & Omit<React.ComponentProps<'input'>, 'className'>; //nao entendi isso mas tem que ter

const Input = React.forwardRef<HTMLInputElement, InputProps> (({ className , ...rest}, ref) => {
    const base = "font-semibold py-2 px-4 rounded duration-200";
    const classes = `${base} ${className || ""}`;

    return <input ref={ref} className={classes} {...rest} />;
});

Input.displayName = "Input";

export default Input;