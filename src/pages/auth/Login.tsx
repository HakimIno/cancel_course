import React from "react";
import { useLogin } from "../../hooks/useAuth";
import FormProvider from "../../components/forms/FormProvider";
import Input from "../../components/forms/Input";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const Login = () => {
  const { methods, handleSubmit, onSubmit, errors, clearErrors } = useLogin();
  return (
    <div className="flex justify-content-center pt-8">
      <Card>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-column gap-2 w-19rem">
            <Input
              label={"Username"}
              name={"username"}
              props={{ type: "text" }}
            />
            <Input
              label={"Password"}
              name={"password"}
              props={{ type: "password" }}
            />
            <small className="block p-error">{errors.afterSubmit?.message} </small>
            <Button label="LOG IN" className="p-button-warning p-button-sm" />
          </div>
        </FormProvider>
      </Card>
    </div>
  );
};

export default Login;
