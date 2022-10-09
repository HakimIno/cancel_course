import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// hooks
import useAuth from "../hooks/useAuth";
// pages
import Login from "../pages/auth/Login";
import { PATH_AUTH } from "../routes/paths";
// components

// ----------------------------------------------------------------------

const AuthGuard: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );
  if (!isInitialized) {
    return <> Loading...</>;
  }
  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={PATH_AUTH.root} />;
  }
  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};
export default AuthGuard;
