import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectAuth } from "../features/auth/authSlice";


const RequireAuth = ({ children }: { children: JSX.Element }) => {
const {user} = useSelector(selectAuth)
  let location = useLocation();
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
