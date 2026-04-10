"use client";

import { NavLink } from "react-router-dom";
import { Mail, FileSpreadsheet, BriefcaseBusiness, LogOut } from "lucide-react";
const ADMIN_LOGO_SRC = "/assets/logo.png";

const NavItems = [
    { to: "/admin/jobs", label: "Job Openings", icon: BriefcaseBusiness },
    { to: "/admin/applications", label: "Applications", icon: FileSpreadsheet },
    { to: "/admin/leads", label: "Contact Leads", icon: Mail },
];

export function Sidebar({ isCollapsed, onToggle }) {

    const logout = () => {
        localStorage.removeItem("admin_token");
        window.location.href = "/admin/login";
    };

    return (
        <>
            {!isCollapsed && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={onToggle}
                />
            )}

            <aside
                className={`
                    fixed md:relative z-50 h-screen 
                    transition-all duration-300 ease-in-out
                    border-r border-gray-200 bg-white
                    flex flex-col shrink-0
                    ${isCollapsed ? 'w-[70px]' : 'w-[260px]'}
                `}
            >
                {/* Logo Section — shrink-0 + explicit size so flex never collapses the image */}
                <div className="relative flex h-[70px] min-h-[70px] w-full items-center justify-center border-b border-gray-200 px-3 shrink-0">
                    <div
                        className={`relative flex shrink-0 items-center justify-center overflow-hidden ${
                            isCollapsed ? "h-12 w-12" : "h-14 w-[140px]"
                        }`}
                    >
                        <img
                            src={ADMIN_LOGO_SRC}
                            alt="Key Concepts"
                            width={160}
                            height={56}
                            className="h-full w-full object-contain object-center"
                            decoding="async"
                            fetchPriority="high"
                        />
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col justify-between h-[calc(100vh-70px)] min-h-0">
                    <div className="space-y-1 px-3 pt-3 flex-1">
                        {NavItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) => `
                                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm my-2
                                    transition-all duration-200 group relative
                                    font-medium
                                    ${isActive
                                        ? "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white shadow-sm"
                                        : "text-gray-600 hover:bg-orange-50 hover:text-[#f1592a]"
                                    }
                                    ${isCollapsed ? 'justify-center px-2' : ''}
                                `}
                                title={isCollapsed ? item.label : ""}
                            >
                                <item.icon size={20} strokeWidth={1.5} />
                                {!isCollapsed && <span>{item.label}</span>}

                                {isCollapsed && (
                                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded 
                                                     opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity 
                                                     whitespace-nowrap z-50">
                                        {item.label}
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="border-t border-gray-200 mt-4">
                        <button
                            type="button"
                            onClick={logout}
                            className={`
                                w-full flex items-center gap-3 px-3 py-3 text-sm font-medium
                                transition-all duration-200
                                text-red-600 bg-orange-50
                                ${isCollapsed ? 'justify-center' : 'justify-start'}
                            `}
                            title={isCollapsed ? "Logout" : ""}
                        >
                            <LogOut size={18} />
                            {!isCollapsed && <span>Logout</span>}

                            {isCollapsed && (
                                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded 
                                                 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity 
                                                 whitespace-nowrap z-50">
                                    Logout
                                </span>
                            )}
                        </button>
                    </div>
                </nav>
            </aside>
        </>
    );
}
