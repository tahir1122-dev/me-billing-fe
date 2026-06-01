"use client";

import { use } from "react";

export default function AdminPageManagement({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);

    // Format title
    const title = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Edit Page: {title}
                </h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-sm font-medium">
                    Save Changes
                </button>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-4 rounded-md mb-6">
                <p className="text-sm text-blue-800 text-center">
                    This is a placeholder for managing the content and SEO of the{" "}
                    <strong>{title}</strong> page. In the future, you can integrate a
                    CMS or custom form here.
                </p>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        SEO Title
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={`${title} | Me-Billing`}
                        defaultValue={`${title} | Me-Billing`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        SEO Description
                    </label>
                    <textarea
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                        placeholder={`Description for ${title}`}
                        defaultValue={`View details for ${title} on Me-Billing.`}
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Page Content Blocks
                    </label>
                    <div className="border border-dashed border-gray-300 rounded-md p-8 text-center text-gray-500">
                        Content Editor Placeholder
                    </div>
                </div>
            </div>
        </div>
    );
}
