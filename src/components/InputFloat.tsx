import React, { useId } from "react";
import Input from "./Input";

type InputFloatProps =  {
  label: string;
  containerClassName?: string;
}& Omit<React.ComponentProps<"input">, "className">;

export const InputFloat = React.forwardRef<
  HTMLInputElement,
  InputFloatProps
>(({ label, id, containerClassName, ...inputProps }, ref) => {
  
  const internalId = useId();
  const effectiveId = id || internalId;

  return (
    <div className={`relative w-full ${containerClassName || ""}`}>
      
      <Input
        {...inputProps}
        ref={ref}
        id={effectiveId}
        placeholder={label}
      />

      <label
        htmlFor={effectiveId}
        className="absolute left-0 top-0 flex h-10 w-full items-center 
                   pl-4 
                   transition-all duration-300 ease-in-out
                   text-gray-500 
                   pointer-events-none 

                   peer-placeholder-shown:text-base
                   peer-placeholder-shown:pl-4
                   
                   peer-focus:top-0
                   peer-focus:-translate-y-1/2 
                   peer-focus:left-3 
                   peer-focus:text-xs
                   peer-focus:text-[#777]
                   peer-focus:bg-white
                   peer-focus:px-1
                   peer-focus:h-auto

                   peer-[&:not(:placeholder-shown)]:top-0
                   peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                   peer-[&:not(:placeholder-shown)]:left-3
                   peer-[&:not(:placeholder-shown)]:text-xs
                   peer-[&:not(:placeholder-shown)]:text-[#777]
                   peer-[&:not(:placeholder-shown)]:bg-white /* <-- IMPORTANTE */
                   peer-[&:not(:placeholder-shown)]:px-1
                   peer-[&:not(:placeholder-shown)]:h-auto"
      >
        {label}
      </label>
    </div>
  );
});

InputFloat.displayName = "InputFloat";