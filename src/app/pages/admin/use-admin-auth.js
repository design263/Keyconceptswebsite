import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../../lib/api";

export function useAdminAuth() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("admin_token") || "");
  }, []);

  useEffect(() => {
    if (token === null) return;
    if (!token) {
      navigate("/admin/login");
      return;
    }
    api.get("/auth/me", token).catch(() => {
      localStorage.removeItem("admin_token");
      navigate("/admin/login");
    });
  }, [token, navigate]);

  return token ?? "";
}
