import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { api } from "../../lib/api";

export function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("admin_token", res.token);
      navigate("/admin/jobs");
    } catch (err) {
      setError(err ? err.message : "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={submit} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200 space-y-4">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <input className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="w-full bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-lg py-3 font-semibold">Sign In</button>
        <p className="text-sm text-gray-600 text-center">
          Need an admin account? <Link className="text-[#f1592a]" to="/admin/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
