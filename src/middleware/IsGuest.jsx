// IsGuest.js
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const IsGuest = () => {
  const cookies = new Cookies();
  const user =
    cookies.get("token") || cookies.get("user") || localStorage.getItem("user");

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default IsGuest;
