"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "@/app/components/admin/Sidebar";
import { Header } from "@/app/components/admin/Header";

export default function AdminLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/admin/login" || pathname === "/admin/register") return;
    const token = localStorage.getItem("admin_token");
    if (!token) router.replace("/admin/login");
  }, [pathname, router]);

  if (pathname === "/admin/login" || pathname === "/admin/register") {
    return children;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f4f2]">
      <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed((v) => !v)} />
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        <Header isCollapsed={isCollapsed} onToggle={() => setIsCollapsed((v) => !v)} />
        <main className="flex-1 overflow-auto p-4 md:p-6 space-y-4">{children}</main>
      </div>
    </div>
  );
}
