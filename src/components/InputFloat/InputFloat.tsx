import React, { useId } from "react";
import Input from "../input/Input";


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
        placeholder=" "
      />

      <label
        htmlFor={effectiveId}
        className="
          absolute left-3 top-1/2 -translate-y-1/2 
          bg-white px-1 text-gray-500 pointer-events-none
          transition-all duration-200 

          peer-placeholder-shown:text-base
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:-translate-y-1/2

          peer-focus:top-0
          peer-focus:-translate-y-1/2
          peer-focus:text-xs
          peer-focus:text-blue-600

          peer-not-placeholder-shown:top-0
          peer-not-placeholder-shown:-translate-y-1/2
          peer-not-placeholder-shown:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
});
