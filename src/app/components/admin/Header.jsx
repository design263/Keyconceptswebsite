import { memo, useState, useRef, useEffect } from "react";
import { FiMenu, FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";
import { IoSearchOutline, IoMailOutline, IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";


export const Header = memo(({ onToggle, isCollapsed }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {
        try {
            setUserDetails(JSON.parse(localStorage.getItem("admin_user") || "{}"));
        } catch {
            setUserDetails({});
        }
    }, []);

    const displayName =
        [userDetails?.salutation, userDetails?.firstName, userDetails?.lastName]
            .filter(Boolean)
            .join(" ") || "Admin User";

    const initials = displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const handleLogout = () => {
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_user");
        navigate("/admin/login");
    };

    const toggleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };

    useEffect(() => {
        const onFSChange = () => setIsFullScreen(!!document.fullscreenElement);
        document.addEventListener("fullscreenchange", onFSChange);
        return () => document.removeEventListener("fullscreenchange", onFSChange);
    }, []);

    useEffect(() => {
        const onOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener("mousedown", onOutsideClick);
        return () => document.removeEventListener("mousedown", onOutsideClick);
    }, []);

    return (
        <header className="h-[70px] bg-white border-b border-border flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
            <div className="flex items-center gap-3">

                <button
                    onClick={onToggle}
                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-foreground"
                >
                    <FiMenu size={20} />
                </button>

                <div className="relative hidden sm:block w-64 md:w-80">
                    <IoSearchOutline
                        size={16}
                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${searchFocused ? "text-primary" : "text-muted-foreground"
                            }`}
                    />
                    <input
                        type="text"
                        placeholder="Search anything…"
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        className="w-full pl-9 pr-4 py-1.5 text-sm rounded-sm border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={toggleFullscreen}
                    title={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-input-background text-foreground hover:bg-muted hover:text-primary transition-all duration-200"
                >
                    {isFullScreen
                        ? <RiFullscreenExitLine size={17} />
                        : <RiFullscreenFill size={17} />
                    }
                </button>

                {/* Mail */}
                <button
                    title="Messages"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-input-background text-foreground hover:bg-muted hover:text-primary transition-all duration-200"
                >
                    <IoMailOutline size={18} />
                </button>

                {/* Notifications */}
                <button
                    title="Notifications"
                    className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border bg-input-background text-foreground hover:bg-muted hover:text-primary transition-all duration-200"
                >
                    <IoNotificationsOutline size={18} />
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-white animate-pulse" />
                </button>

                {/* User Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setOpenDropdown((v) => !v)}
                        className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl"
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#ff7a45] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 border-2 border-primary/30 select-none">
                            {initials}
                        </div>

                        <div className="hidden md:flex flex-col text-left leading-tight">
                            <span className="text-sm font-semibold text-foreground max-w-[120px] truncate">
                                {displayName}
                            </span>
                        </div>
                        <ChevronDown
                            size={14}
                            className={`${openDropdown ? "rotate-180" : ""}`}
                        />
                    </button>

                    {openDropdown && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                            <div className="px-4 py-3 bg-gradient-to-br from-orange-50 to-white border-b border-border">
                                <p className="text-sm font-bold text-foreground truncate">{displayName}</p>
                                <p className="text-xs text-muted-foreground truncate mt-0.5">
                                    {userDetails?.email || "admin@keyconcept.com"}
                                </p>
                            </div>

                            {/* Menu Items */}
                            <div className="py-2">
                                <button
                                    onClick={() => { navigate("/admin/profile"); setOpenDropdown(false); }}
                                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-primary transition-colors duration-150"
                                >
                                    <FiUser size={15} />
                                    My Profile
                                </button>

                                <div className="h-px bg-border my-2" />

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-destructive hover:bg-gray-100 transition-colors duration-150"
                                >
                                    <FiLogOut size={15} />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
});

Header.displayName = "Header";