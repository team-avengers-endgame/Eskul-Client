import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import LoadingPage from "../../Shared/LoadingPage/LoadingPage";



const AdminRoute = ({ children }) => {
    let { admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <LoadingPage />;
    }
    if (admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;