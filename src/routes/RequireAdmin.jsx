import { Navigate, useLocation } from "react-router-dom";

export default function RequireAdmin({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("adminToken"); // replace with real auth later

  if (!token) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  return children;
}