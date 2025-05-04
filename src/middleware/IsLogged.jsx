import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const IsLogged = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  const token = cookies.get("token");
  const location = useLocation();

  

  const isLogged = token || user || localStorage.getItem("user") ? true : false;

  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default IsLogged;
