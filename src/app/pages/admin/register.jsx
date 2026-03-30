import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { api } from "../../lib/api";

export function AdminRegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "", registrationKey: "" });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/auth/register", {
        email: form.email,
        password: form.password,
        registrationKey: form.registrationKey || undefined,
      });
      localStorage.setItem("admin_token", res.token);
      navigate("/admin/jobs");
    } catch (err) {
      setError(err ? err.message : "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={submit} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200 space-y-4">
        <h1 className="text-2xl font-bold">Admin Registration</h1>
        <input className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} required />
        <input className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Password" type="password" value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} required />
        <input className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Confirm Password" type="password" value={form.confirmPassword} onChange={(e) => setForm((prev) => ({ ...prev, confirmPassword: e.target.value }))} required />
        <input className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Registration Key (optional)" type="text" value={form.registrationKey} onChange={(e) => setForm((prev) => ({ ...prev, registrationKey: e.target.value }))} />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button className="w-full bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-lg py-3 font-semibold">Create Admin Account</button>

        <p className="text-sm text-gray-600 text-center">
          Already registered? <Link className="text-[#f1592a]" to="/admin/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
