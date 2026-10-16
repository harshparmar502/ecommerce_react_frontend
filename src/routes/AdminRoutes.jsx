import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../admin/layout/Layout";
import Dashboard from "../admin/dashboard/Dashboard";
import Auth from "../admin/auth/Auth";
import RequireAdmin from "./RequireAdmin";

export default function AdminRoutes() {
  return (
    <Routes>
      
      <Route path="login" element={<Auth />} />

      <Route
        path="/"
        element={
          <RequireAdmin>
            <AdminLayout />
          </RequireAdmin>
        }
      >
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}