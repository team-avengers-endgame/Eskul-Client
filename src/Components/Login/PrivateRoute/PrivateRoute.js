import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import LoadingPage from "../../Shared/LoadingPage/LoadingPage";

const PrivateRoute = ({ children }) => {
    let { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <LoadingPage />;
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;