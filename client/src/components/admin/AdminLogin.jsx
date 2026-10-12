// client/src/components/admin/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User, Shield, KeyRound, Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { adminAPI, API_BASE_URL } from "../../utils/api";
import axios from "axios";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      toast.error("Please enter both username and password.");
      return;
    }

    setLoading(true);
    try {
      const data = await adminAPI.login(username, password);
      toast.success(data.message || "Welcome to APARAITECH Admin Portal");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSetupInitialAdmin = async () => {
    setInitializing(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/setup`);
      toast.success(res.data.message || "Initial admin created! Username: admin");
      setUsername("admin");
      setPassword("Admin@Aparaitech2026");
    } catch (err) {
      toast.error(err.response?.data?.message || "Admin already configured. Please log in.");
    } finally {
      setInitializing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0B1220] border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Accent Glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#0D9488]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#22D3EE] mb-4">
            <Shield className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">APARAITECH Admin Portal</h1>
          <p className="text-xs text-slate-400 mt-1">
            Secure Role-Based Access for System Administrators
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Username or Email
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full bg-[#020617] border border-slate-700 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Admin Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#020617] border border-slate-700 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#0D9488]/20 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Verifying Credentials..." : "Sign In to Admin Console"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <button
            type="button"
            onClick={handleSetupInitialAdmin}
            disabled={initializing}
            className="text-[11px] text-[#22D3EE] hover:underline flex items-center justify-center gap-1.5 mx-auto text-slate-400 hover:text-[#22D3EE]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {initializing ? "Configuring..." : "First time setup? Initialize Superadmin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
