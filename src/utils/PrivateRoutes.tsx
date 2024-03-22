import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return user.token ? <Outlet /> : <Navigate to="/authrorisation" />;
};

export default PrivateRoutes;
