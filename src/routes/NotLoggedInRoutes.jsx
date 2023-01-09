import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedInRoutes() {
  const { user } = useSelector((state) => ({ ...state }));
  return <>{user.user ? <Navigate to="/"/> : <Outlet/>}</>;
}
