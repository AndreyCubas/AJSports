import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & Omit<React.ComponentProps<'button'>, 'className'>;

const Button: React.FC<ButtonProps> = ({children, className, ...rest}) => {
  
    const baseClasses = "font-semibold py-2 px-4 rounded duration-200";
    const combinedClasses = `${baseClasses} ${className || ''}`;

    return (
        <button className={combinedClasses} {...rest}>
            {children}
        </button>
    );
};

export default Button;