import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { InputTextProps } from "primereact";

const Input: React.FC<{
  
  icon?: string;
  name: string;
  label?: string;
  props?: InputTextProps;
  valueProps: string;
  onChangeProps: (e: any) => void;
}> = ({ icon, label, name, props, valueProps, onChangeProps }) => {
  const { control } = useFormContext();

  console.log(name)
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="" >
          <label htmlFor={name + "-label"} className="block">
            {label}
          </label>
          <InputText
            {...field}
            {...props}
            key={name}
            id={name + "-id"}
            value={valueProps}
            className={`block w-full ${!!error?.message && "p-invalid"} m-0`}
            onChange={(e) => {
                field.onChange(e)
                onChangeProps(e.target.value)
            }}
            
          />
          {error?.message && (
            <small id={name + "-error"} className="block p-error">
              {error?.message}
            </small>
          )}
        </div>
      )}
    />
  );
};

export default Input;
