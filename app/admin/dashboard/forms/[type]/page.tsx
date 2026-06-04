"use client";

import { use, useEffect, useState } from "react";

interface Submission {
    id: number;
    created_at: string;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    phone_no?: string;
    description?: string;
    organization?: string;
    specialty?: string;
    position?: string;
    file_name?: string;
}

export default function FormSubmissionsPage({
    params,
}: {
    params: Promise<{ type: string }>;
}) {
    const { type } = use(params);
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Formatting title
    const title = type.charAt(0).toUpperCase() + type.slice(1) + " Submissions";

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/admin/forms/${type}`, { cache: "no-store" });
                const result = await res.json();
                
                if (result.success) {
                    setSubmissions(result.data || []);
                } else {
                    setError(result.message || "Failed to fetch submissions");
                }
            } catch (err) {
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, [type]);

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">{title}</h1>
            <p className="text-gray-600 mb-6">
                Manage all your {type.toLowerCase()} form submissions here.
            </p>

            {error && <div className="mb-4 text-red-500">{error}</div>}

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Contact
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Details
                            </th>
                            {type === "resume" && (
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Resume
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center" colSpan={type === "resume" ? 5 : 4}>
                                    Loading...
                                </td>
                            </tr>
                        ) : submissions.length === 0 ? (
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center" colSpan={type === "resume" ? 5 : 4}>
                                    No submissions found.
                                </td>
                            </tr>
                        ) : (
                            submissions.map((sub) => (
                                <tr key={sub.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(sub.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="font-medium">{sub.first_name} {sub.last_name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div>{sub.email}</div>
                                        <div>{sub.phone || sub.phone_no}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                        {type === "resume" ? (
                                            <div><strong>Position:</strong> {sub.position || 'N/A'}</div>
                                        ) : (
                                            <>
                                                {sub.organization && <div><strong>Org:</strong> {sub.organization}</div>}
                                                {sub.specialty && <div><strong>Spec:</strong> {sub.specialty}</div>}
                                            </>
                                        )}
                                        {sub.description && (
                                            <div className="mt-1 text-xs whitespace-pre-wrap break-words">{sub.description}</div>
                                        )}
                                    </td>
                                    {type === "resume" && (
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                            {sub.file_name ? (
                                                <a href={sub.file_name} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                    View CV
                                                </a>
                                            ) : "No file"}
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
