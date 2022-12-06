import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { RadioButton, RadioButtonProps } from "primereact/radiobutton";

const Redio: React.FC<{
  name: string;
  props?: RadioButtonProps;
  options: { value: string; label: string }[];
  veticle?: boolean;
}> = ({ options, name, props, veticle }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        console.log(field);

        return (
          <div
            id="redio"
            className={`flex ${
              veticle
                ? "flex-column mt-3"
                : "align-items-center gap-3"
            } flex-wrap`}
          >
            {options.map((opt, i) => (
              <div key={i} className="field-radiobutton">
                <RadioButton
                  {...props}
                  inputId={opt.value}
                  value={opt.value}
                  name={field.name}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  checked={field.value === opt.value}
                />
                <label htmlFor={opt.value}>{opt.label}</label>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};

export default Redio;
