import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/admin/Sidebar";
import { Header } from "../components/admin/Header";

export function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f4f2]">

      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden min-w-0">

        {/* Header */}
        <Header
          isCollapsed={isCollapsed}
          onToggle={toggleSidebar}
        />

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 space-y-4">
          <Outlet />
        </main>

      </div>
    </div>
  );
}