import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router";
import { Bell, CircleUserRound, LayoutGrid, ListTodo, Mail, Search, Settings, ShieldCheck, FileSpreadsheet, BriefcaseBusiness } from "lucide-react";

const sideItems = [
  { to: "/admin/jobs", label: "Job Openings", icon: BriefcaseBusiness },
  { to: "/admin/applications", label: "Applications", icon: FileSpreadsheet },
  { to: "/admin/leads", label: "Contact Leads", icon: Mail },
];

const utilityItems = [
  { label: "Masters", icon: ShieldCheck },
  { label: "Templates", icon: LayoutGrid },
  { label: "Role Permissions", icon: Settings },
  { label: "Task List", icon: ListTodo },
];

export function AdminShell({ title, children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#f2f4f8] flex">
      <aside className="w-[260px] border-r border-gray-300 bg-[#f7f8fa] p-3 hidden md:block">
        <div className="h-12 rounded-md bg-[#1f3b89] text-white font-semibold flex items-center px-4 mb-3">Keyconcepts Admin</div>
        <nav className="space-y-1">
          {sideItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm border ${isActive ? "bg-white border-blue-500 text-blue-700" : "border-transparent text-gray-700 hover:bg-white"}`}
            >
              <item.icon size={17} />
              {item.label}
            </NavLink>
          ))}

          <div className="pt-3 mt-3 border-t border-gray-200 space-y-1">
            {utilityItems.map((item) => (
              <button key={item.label} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-gray-600 hover:bg-white text-left">
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </aside>

      <main className="flex-1 min-w-0">
        <header className="h-16 border-b border-gray-300 bg-[#f7f8fa] px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 w-full max-w-md">
            <div className="relative w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input className="w-full rounded-md border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm" placeholder="Type to Search.." />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center"><Bell size={16} /></button>
            <button className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center"><Mail size={16} /></button>
            <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm flex items-center gap-2"><CircleUserRound size={16} /> Admin</button>
            <button onClick={logout} className="px-3 py-2 rounded-md bg-[#0b5fe0] text-white text-sm">Logout</button>
          </div>
        </header>

        <div className="p-4 md:p-6 space-y-4">
          <div className="rounded-lg border border-gray-300 bg-white px-4 py-3">
            <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
