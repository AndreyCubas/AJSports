import React from "react"

type InputProps = {    
    className?: string;
} & Omit<React.ComponentProps<'input'>, 'className'>; 

const Input = React.forwardRef<HTMLInputElement, InputProps> (({ className , ...rest}, ref) => {
    const base = "peer h-10 w-full bg-[#f8f8f8] px-[15px] py-0 placeholder-transparent focus:outline-none";
    const classes = `${base} ${className || ""}`;

    return <input ref={ref} className={classes} {...rest} />;
});

Input.displayName = "Input";

export default Input;