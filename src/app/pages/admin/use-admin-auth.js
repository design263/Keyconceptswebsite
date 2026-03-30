import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { api } from "../../lib/api";

export function useAdminAuth() {
  const navigate = useNavigate();
  const token = useMemo(() => localStorage.getItem("admin_token") || "", []);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    api.get("/auth/me", token).catch(() => {
      localStorage.removeItem("admin_token");
      navigate("/admin/login");
    });
  }, [token]);

  return token;
}
