import React from "react";

import { Navigate, useLocation } from "react-router";
import useAuth from "../../hook/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  let { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <span className="visually-hidden">Loading...</span>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
