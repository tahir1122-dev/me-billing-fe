"use client";

import { use, useEffect, useState } from "react";
import { PageData, SectionData } from "@/types/page-content";

// A recursive component to render JSON fields dynamically
function DynamicFieldRenderer({ 
    data, 
    path, 
    onChange 
}: { 
    data: any; 
    path: string[]; 
    onChange: (path: string[], value: any) => void 
}) {
    if (typeof data === "string") {
        // If it's a long string, use a textarea, else an input
        if (data.length > 80 || path.includes("description") || path.includes("content") || path.includes("body")) {
            return (
                <textarea
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 font-outfit text-sm"
                    rows={4}
                    value={data}
                    onChange={(e) => onChange(path, e.target.value)}
                />
            );
        }
        return (
            <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 font-outfit text-sm"
                value={data}
                onChange={(e) => onChange(path, e.target.value)}
            />
        );
    }
    
    if (typeof data === "boolean") {
        return (
            <input 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={data}
                onChange={(e) => onChange(path, e.target.checked)}
            />
        );
    }
    
    if (typeof data === "number") {
        return (
            <input
                type="number"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 font-outfit text-sm"
                value={data}
                onChange={(e) => onChange(path, Number(e.target.value))}
            />
        );
    }

    if (Array.isArray(data)) {
        return (
            <div className="space-y-4 border-l-2 border-gray-200 pl-4 ml-2">
                {data.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-md border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Item {index + 1}</span>
                        </div>
                        <DynamicFieldRenderer 
                            data={item} 
                            path={[...path, index.toString()]} 
                            onChange={onChange} 
                        />
                    </div>
                ))}
            </div>
        );
    }

    if (typeof data === "object" && data !== null) {
        return (
            <div className="space-y-3">
                {Object.keys(data).map((key) => {
                    // Skip internal React/Next.js properties if any exist accidentally
                    if (key.startsWith('_')) return null;
                    return (
                        <div key={key} className="pl-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </label>
                            <DynamicFieldRenderer 
                                data={data[key]} 
                                path={[...path, key]} 
                                onChange={onChange} 
                            />
                        </div>
                    );
                })}
            </div>
        );
    }

    return null;
}

export default function AdminPageManagement({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
    // UI state for accordions
    const [openSection, setOpenSection] = useState<string | null>(null);

    // Format title
    const title = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`/api/admin/pages/get?slug=${slug}`);
                const data = await res.json();
                
                if (!res.ok) throw new Error(data.error || "Failed to fetch page data");
                
                setPageData(data.page ? { ...data.page, sections: data.sections } : data);
                if (data.sections && Object.keys(data.sections).length > 0) {
                    setOpenSection(Object.keys(data.sections)[0]);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [slug]);

    const handleSave = async () => {
        if (!pageData) return;
        setSaving(true);
        setError(null);
        setSuccessMessage(null);

        try {
            // 1. Update page metadata
            const resMeta = await fetch(`/api/admin/pages/update`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    slug,
                    name: pageData.name || slug,
                    seo_title: pageData.seo_title,
                    seo_description: pageData.seo_description,
                    seo_meta_tags: pageData.seo_meta_tags,
                }),
            });
            if (!resMeta.ok) throw new Error("Failed to save page metadata");

            // 2. Upsert each section individually
            const sectionPromises = Object.entries(pageData.sections || {}).map(([sectionName, content]) => {
                return fetch(`/api/admin/sections`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        page_id: pageData.id,
                        section_name: sectionName,
                        content: content
                    })
                });
            });

            await Promise.all(sectionPromises);
            
            setSuccessMessage("Changes saved successfully!");
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    // Helper to update deeply nested object properties based on path array
    const updateNestedData = (obj: any, path: string[], value: any): any => {
        if (path.length === 0) return value;
        const [current, ...rest] = path;
        
        if (Array.isArray(obj)) {
            const newArray = [...obj];
            const index = parseInt(current, 10);
            newArray[index] = updateNestedData(obj[index], rest, value);
            return newArray;
        }
        
        return {
            ...obj,
            [current]: updateNestedData(obj[current], rest, value)
        };
    };

    const handleSeoChange = (key: string, value: string) => {
        if (!pageData) return;
        setPageData({
            ...pageData,
            [key]: value
        });
    };

    const handleSectionChange = (sectionName: string, path: string[], value: any) => {
        if (!pageData || !pageData.sections) return;
        
        const newSections = {
            ...pageData.sections,
            [sectionName]: updateNestedData(pageData.sections[sectionName], path, value)
        };
        
        setPageData({ ...pageData, sections: newSections });
    };

    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow p-8 flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600 font-medium font-outfit">Loading CMS Data...</span>
            </div>
        );
    }

    if (!pageData) {
        return (
            <div className="bg-white rounded-lg shadow p-8">
                <div className="bg-red-50 text-red-600 p-4 rounded-md">
                    Failed to load data for this page. Please ensure the page exists in pageComponents.ts.
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow p-6 font-outfit max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sticky -top-8 bg-white pt-6 pb-4 px-6 -mx-6 -mt-6 border-b z-20 rounded-t-lg">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Editing: <span className="text-blue-600">{title}</span>
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">Make changes to the content and SEO of this page.</p>
                </div>
                <div className="flex items-center gap-4">
                    {successMessage && <span className="text-green-600 text-sm font-medium animate-pulse">{successMessage}</span>}
                    {error && <span className="text-red-600 text-sm font-medium">{error}</span>}
                    <button 
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2.5 rounded-lg transition-colors text-sm font-bold shadow-sm flex items-center gap-2"
                    >
                        {saving ? "Saving..." : "Save Changes to Supabase"}
                    </button>
                </div>
            </div>

            <div className="space-y-8">
                {/* SEO Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                            </svg>
                            SEO & Meta Data
                        </h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Meta Title</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                value={pageData.seo_title || ""}
                                onChange={(e) => handleSeoChange("seo_title", e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Meta Description</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                rows={3}
                                value={pageData.seo_description || ""}
                                onChange={(e) => handleSeoChange("seo_description", e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Page Sections (Accordions) */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                        </svg>
                        Page Components
                    </h2>
                    
                    <div className="space-y-3">
                        {Object.entries(pageData.sections || {}).map(([sectionName, content]) => {
                            const isOpen = openSection === sectionName;
                            
                            return (
                                <div key={sectionName} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                                    <button
                                        onClick={() => setOpenSection(isOpen ? null : sectionName)}
                                        className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${isOpen ? 'bg-blue-50 border-b border-blue-100' : 'hover:bg-gray-50'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                                                {sectionName}
                                            </span>
                                            <span className="font-semibold text-gray-800">
                                                {sectionName.replace(/([A-Z])/g, ' $1').trim()} Section
                                            </span>
                                        </div>
                                        <svg 
                                            className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    {isOpen && (
                                        <div className="p-6 bg-white border-t border-gray-100">
                                            <DynamicFieldRenderer 
                                                data={content} 
                                                path={[]} 
                                                onChange={(path, value) => handleSectionChange(sectionName, path, value)} 
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        
                        {Object.keys(pageData.sections || {}).length === 0 && (
                            <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-500">No components registered for this page in pageComponents.ts.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
