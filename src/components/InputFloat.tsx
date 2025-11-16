import React, { useId } from 'react';
import Input from './Input';

type InputFloatProps = React.ComponentProps<typeof Input> & {
  label: string;
};

export const InputFloat = React.forwardRef<HTMLInputElement, InputFloatProps>(
  ({ label, id, ...inputProps }, ref) => {
    

    const internalId = useId();
    const effectiveId = id || internalId;

    return (
      <div className={`relative w-[250px]}`}>
        <Input
          {...inputProps}
          ref={ref}
          id={effectiveId}
          placeholder={label} 
        />
        
        <label
          htmlFor={effectiveId}
          className="absolute left-0 top-0 flex h-full w-full items-center 
                     pl-2.5 transition-all duration-300 ease-in-out
                     text-gray-500 
                     
                     peer-placeholder-shown:text-base
                     peer-placeholder-shown:pl-2.5
                     
                     peer-focus:h-1/2
                     peer-focus:-translate-y-full
                     peer-focus:pl-0
                     peer-focus:text-xs
                     peer-focus:text-[#777]

                     peer-[&:not(:placeholder-shown)]:h-1/2
                     peer-[&:not(:placeholder-shown)]:-translate-y-full
                     peer-[&:not(:placeholder-shown)]:pl-0
                     peer-[&:not(:placeholder-shown)]:text-xs
                     peer-[&:not(:placeholder-shown)]:text-[#777]"
        >
          {label}
        </label>
      </div>
    );
  }
);

InputFloat.displayName = 'I nputFloat';