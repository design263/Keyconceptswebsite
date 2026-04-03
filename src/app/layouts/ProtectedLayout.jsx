import { Navigate, Outlet } from "react-router";


export function AdminProtectedLayout() {
  const token = localStorage.getItem("admin_token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}