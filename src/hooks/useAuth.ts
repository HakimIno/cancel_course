import { useContext } from "react";
//
import { AuthContext, ILogin } from "../contexts/JWTContext";
// ----------------------------------------------------------------------

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error("Auth context must be use inside AuthProvider");

    return context;
};

export default useAuth;

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
export const useLogin = () => {
    const LoginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues: ILogin = {
        username: "admin",
        password: "demo1234",
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });
    const { login } = useAuth();

    const {
        reset,
        setError,
        clearErrors,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = async (data: ILogin) => {
        if (data.username === defaultValues.username && defaultValues.password === data.password) {
            login(data);
            reset();
        } else {
            setError("afterSubmit", {
                message: "Your account or password is incorrect. Please check and try again.",
            });
        }
    };
    return {
        onSubmit,
        handleSubmit,
        clearErrors,
        errors,
        isSubmitting,
        methods,
    };
};
