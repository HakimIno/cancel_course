import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { InputTextProps } from "primereact";

const Input: React.FC<{
  icon?: string;
  name: string;
  label?: string;
  props?: InputTextProps;
}> = ({ icon, label, name, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="field">
          <label htmlFor={name + "-label"} className="block">
            {label}
          </label>
          <InputText
            {...field}
            {...props}
            id={name + "-id"}
            className={`block w-full ${!!error?.message && "p-invalid"}`}
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
