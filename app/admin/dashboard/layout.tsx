"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
    { name: "Dashboard", href: "/admin/dashboard", icon: "📊" },
    {
        name: "Pages",
        icon: "📄",
        subLinks: [
            { name: "Home", href: "/admin/dashboard/pages/home" },
            { name: "About", href: "/admin/dashboard/pages/about" },
            { name: "Specialties", href: "/admin/dashboard/pages/specialties" },
            { name: "Services", href: "/admin/dashboard/pages/services" },
            { name: "Solutions", href: "/admin/dashboard/pages/solutions" },
            { name: "Resources", href: "/admin/dashboard/pages/resources" },
            { name: "Careers", href: "/admin/dashboard/pages/careers" },
        ],
    },
    {
        name: "Form Submissions",
        icon: "📥",
        subLinks: [
            { name: "Contact Form", href: "/admin/dashboard/forms/contact" },
            { name: "Sales Form", href: "/admin/dashboard/forms/sales" },
            { name: "Resume Submissions", href: "/admin/dashboard/forms/resume" },
        ],
    },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({
        Pages: true,
        "Form Submissions": true,
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleDropdown = (name: string) => {
        setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar Overlay (Mobile) */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed md:static inset-y-0 left-0 w-64 bg-gray-900 text-white flex flex-col h-full overflow-y-auto transform transition-transform duration-200 ease-in-out z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                    <h1 className="text-xl font-bold tracking-wider">Admin Panel</h1>
                    <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsSidebarOpen(false)}>✕</button>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {sidebarLinks.map((link) => (
                        <div key={link.name}>
                            {link.subLinks ? (
                                <div>
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-800 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span>{link.icon}</span>
                                            <span>{link.name}</span>
                                        </div>
                                        <span>{openDropdowns[link.name] ? "▼" : "▶"}</span>
                                    </button>
                                    {openDropdowns[link.name] && (
                                        <div className="ml-6 mt-2 space-y-1">
                                            {link.subLinks.map((sub) => {
                                                const isActive = pathname === sub.href;
                                                return (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={() => setIsSidebarOpen(false)}
                                                        className={`block p-2 rounded text-sm transition-colors ${isActive
                                                                ? "bg-blue-600 text-white"
                                                                : "text-gray-400 hover:text-white hover:bg-gray-800"
                                                            }`}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`flex items-center gap-3 p-2 rounded transition-colors ${pathname === link.href
                                            ? "bg-blue-600"
                                            : "hover:bg-gray-800"
                                        }`}
                                >
                                    <span>{link.icon}</span>
                                    <span>{link.name}</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 p-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
                    >
                        Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden w-full">
                <header className="bg-white shadow-sm p-4 flex items-center justify-between h-16 shrink-0">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsSidebarOpen(true)}
                            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800 capitalize truncate">
                            {pathname.split("/").pop()?.replace(/-/g, " ") || "Dashboard"}
                        </h2>
                    </div>
                </header>
                <div className="flex-1 overflow-auto p-6">{children}</div>
            </main>
        </div>
    );
}
