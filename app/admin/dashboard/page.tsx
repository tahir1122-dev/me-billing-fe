"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
    const [stats, setStats] = useState({ pages: 10, formSubmissions: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/admin/dashboard/stats", { cache: "no-store" });
                const result = await res.json();
                if (result.success && result.data) {
                    setStats(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Welcome to the Admin Dashboard
            </h1>
            <p className="text-gray-600">
                From this panel, you can manage all pages and view form submissions.
                Select an option from the left sidebar to get started.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-3xl mb-2">📄</span>
                    <h3 className="font-semibold text-blue-900">
                        {loading ? "..." : `${stats.pages} Pages`}
                    </h3>
                </div>
                <div className="bg-green-50 border border-green-100 p-6 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-3xl mb-2">📥</span>
                    <h3 className="font-semibold text-green-900">
                        {loading ? "..." : `${stats.formSubmissions} Form Submissions`}
                    </h3>
                </div>
                <div className="bg-purple-50 border border-purple-100 p-6 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-3xl mb-2">⚙️</span>
                    <h3 className="font-semibold text-purple-900">Settings</h3>
                </div>
            </div>
        </div>
    );
}
