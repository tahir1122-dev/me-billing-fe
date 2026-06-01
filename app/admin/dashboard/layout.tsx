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
            { name: "Physician Billing", href: "/admin/dashboard/pages/physician-billing" },
            { name: "Specialties", href: "/admin/dashboard/pages/specialties" },
            { name: "Services", href: "/admin/dashboard/pages/services" },
            { name: "Solutions", href: "/admin/dashboard/pages/solutions" },
            { name: "Resources", href: "/admin/dashboard/pages/resources" },
            { name: "Contact", href: "/admin/dashboard/pages/contact" },
            { name: "Sales", href: "/admin/dashboard/pages/sales" },
            { name: "Privacy Policy", href: "/admin/dashboard/pages/privacy-policy" },
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

    const toggleDropdown = (name: string) => {
        setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col h-full overflow-y-auto">
                <div className="p-4 border-b border-gray-800">
                    <h1 className="text-xl font-bold tracking-wider">Admin Panel</h1>
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
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white shadow-sm p-4 flex items-center justify-between h-16">
                    <h2 className="text-xl font-semibold text-gray-800 capitalize">
                        {pathname.split("/").pop()?.replace(/-/g, " ") || "Dashboard"}
                    </h2>
                </header>
                <div className="flex-1 overflow-auto p-6">{children}</div>
            </main>
        </div>
    );
}
