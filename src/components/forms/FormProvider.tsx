// form
import {
  FormProvider as Form,
  FormProviderProps,
  UseFormReturn,
} from "react-hook-form";

// ----------------------------------------------------------------------
const FormProvider: React.FC<{
  children?: JSX.Element | JSX.Element[];
  onSubmit: React.FormEventHandler;
  methods: UseFormReturn<any, object>;
}> = ({ children, onSubmit, methods }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};
export default FormProvider;
