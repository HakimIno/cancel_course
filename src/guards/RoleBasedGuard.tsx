// hooks
import useAuth from "../hooks/useAuth";
import React from "react";
import { UserRole } from "../contexts/JWTContext";

// ----------------------------------------------------------------------
const RoleBasedGuard: React.FC<{
    hasContent: boolean;
    roles: UserRole[];
    children: JSX.Element;
}> = ({ hasContent, roles, children }) => {
    // Logic here to get current user role
    const { user } = useAuth();

    // const currentRole = 'user';
    const currentRole = user?.role; // admin;

    if (typeof roles !== undefined && currentRole && !roles.includes(currentRole)) {
        return hasContent ? <>Permission Denied</> : null;
    }

    return <>{children}</>;
};
export default RoleBasedGuard;
