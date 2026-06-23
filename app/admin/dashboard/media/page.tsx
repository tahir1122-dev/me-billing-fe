"use client";

import { useEffect, useState, useRef } from "react";
import { MediaFile } from "@/components/admin/MediaPickerModal";

export default function MediaLibraryPage() {
    const [media, setMedia] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
    const [copySuccess, setCopySuccess] = useState<string | null>(null);
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fetchMedia = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/media');
            const data = await res.json();
            if (data.success) {
                setMedia(data.data);
            } else {
                setError(data.message || "Failed to load media");
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMedia();
    }, []);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        
        const file = e.target.files[0];
        setUploading(true);
        setError(null);
        
        const formData = new FormData();
        formData.append('file', file);
        
        try {
            const res = await fetch('/api/admin/media', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            
            if (data.success) {
                setMedia(prev => [data.data, ...prev]);
            } else {
                setError(data.message || "Upload failed");
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleDelete = async (fileName: string) => {
        if (!window.confirm(`Are you sure you want to delete ${fileName}?`)) return;
        
        setDeleting(fileName);
        try {
            const res = await fetch(`/api/admin/media?fileName=${encodeURIComponent(fileName)}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            
            if (data.success) {
                setMedia(prev => prev.filter(m => m.name !== fileName));
            } else {
                setError(data.message || "Delete failed");
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setDeleting(null);
        }
    };

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
        setCopySuccess(url);
        setTimeout(() => setCopySuccess(null), 2000);
    };

    const handleVideoPlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video !== e.target) {
                video.pause();
            }
        });
    };

    const filteredMedia = media.filter(m => filter === 'all' || m.type === filter);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden font-outfit min-h-[80vh] flex flex-col">
            {/* Header & Toolbar */}
            <div className="p-8 border-b border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shrink-0">
                <div>
                    <h1 className="text-5xl font-serif text-[#1e293b] tracking-tight">Media Library</h1>
                    <p className="text-sm text-gray-500 mt-2">Manage all your uploaded images and videos.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                        <button 
                            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        <button 
                            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'image' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                            onClick={() => setFilter('image')}
                        >
                            Images
                        </button>
                        <button 
                            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'video' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                            onClick={() => setFilter('video')}
                        >
                            Videos
                        </button>
                    </div>
                    
                    <div className="relative">
                        <input 
                            type="file" 
                            className="hidden" 
                            ref={fileInputRef} 
                            onChange={handleUpload}
                            accept="image/*,video/*"
                        />
                        <button 
                            onClick={() => fileInputRef.current?.click()}
                            disabled={uploading}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm"
                        >
                            {uploading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Uploading...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                    Upload Media
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 bg-gray-50/50">
                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm flex items-center justify-between border border-red-100">
                        <span>{error}</span>
                        <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600">✕</button>
                    </div>
                )}
                
                {loading ? (
                    <div className="flex flex-col justify-center items-center h-64 gap-4">
                        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-500 font-medium text-sm animate-pulse">Loading media library...</p>
                    </div>
                ) : filteredMedia.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-500 border-2 border-dashed border-gray-200 rounded-xl bg-white">
                        <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p className="text-lg font-semibold text-gray-700">No media found</p>
                        <p className="text-sm mt-1">Click "Upload Media" to add your first image or video.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {filteredMedia.map((file) => (
                            <div 
                                key={file.name} 
                                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all relative flex flex-col"
                            >
                                <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden relative">
                                    {file.type === 'image' ? (
                                        <img 
                                            src={file.url} 
                                            alt={file.name} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-black relative">
                                            <video 
                                                src={file.url} 
                                                className="w-full h-full object-contain"
                                                preload="metadata"
                                                controls
                                                onPlay={handleVideoPlay}
                                            />
                                        </div>
                                    )}
                                    
                                    {/* Action overlay */}
                                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button 
                                            onClick={() => copyToClipboard(file.url)}
                                            className="bg-white/90 hover:bg-white text-gray-700 p-1.5 rounded-md shadow-sm tooltip relative"
                                            title="Copy URL"
                                        >
                                            {copySuccess === file.url ? (
                                                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                            )}
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(file.name)}
                                            disabled={deleting === file.name}
                                            className="bg-white/90 hover:bg-red-50 text-red-600 p-1.5 rounded-md shadow-sm transition-colors"
                                            title="Delete"
                                        >
                                            {deleting === file.name ? (
                                                <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="p-3 border-t border-gray-100">
                                    <p className="text-xs font-semibold text-gray-800 truncate" title={file.name}>{file.name}</p>
                                    <div className="flex justify-between items-center mt-1.5">
                                        <span className="inline-block px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-gray-600 uppercase rounded-sm tracking-wider">
                                            {file.type}
                                        </span>
                                        <p className="text-[10px] text-gray-400 font-medium">
                                            {new Date(file.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
