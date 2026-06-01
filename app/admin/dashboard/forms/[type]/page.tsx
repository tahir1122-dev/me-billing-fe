"use client";

import { use } from "react";

export default function FormSubmissionsPage({
    params,
}: {
    params: Promise<{ type: string }>;
}) {
    const { type } = use(params);

    // Formatting title
    const title = type.charAt(0).toUpperCase() + type.slice(1) + " Submissions";

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">{title}</h1>
            <p className="text-gray-600 mb-6">
                Manage all your {type.toLowerCase()} form submissions here.
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center" colSpan={5}>
                                No submissions found. (Placeholder data)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
