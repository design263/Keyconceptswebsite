import { useEffect } from "react";
import { useNavigate } from "react-router";

export function AdminDashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/jobs", { replace: true });
  }, [navigate]);

  return null;
}
