import React from "react";
import { Navigate } from "react-router-dom";
// hooks
import useAuth from "../hooks/useAuth";
// routes
import { PATH_APP } from "../routes/paths";

// ----------------------------------------------------------------------
const GuestGuard: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to={PATH_APP.home} />;
    }

    return <>{children}</>;
};
export default GuestGuard;
