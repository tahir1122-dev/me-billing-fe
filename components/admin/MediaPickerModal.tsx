"use client";

import { useEffect, useState, useRef } from "react";

export interface MediaFile {
    id?: string;
    name: string;
    url: string;
    type: 'image' | 'video' | 'other';
    created_at: string;
}

interface MediaPickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (url: string) => void;
}

export default function MediaPickerModal({ isOpen, onClose, onSelect }: MediaPickerModalProps) {
    const [media, setMedia] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
    
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
        if (isOpen) {
            fetchMedia();
        }
    }, [isOpen]);

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
                // Add the new file to the beginning of the list
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

    if (!isOpen) return null;

    const filteredMedia = media.filter(m => filter === 'all' || m.type === filter);

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden font-outfit">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50 shrink-0">
                    <h2 className="text-xl font-bold text-gray-800">Media Library</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        ✕
                    </button>
                </div>
                
                {/* Toolbar */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 shrink-0">
                    <div className="flex items-center gap-2">
                        <button 
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        <button 
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === 'image' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            onClick={() => setFilter('image')}
                        >
                            Images
                        </button>
                        <button 
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === 'video' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            onClick={() => setFilter('video')}
                        >
                            Videos
                        </button>
                    </div>
                    
                    <div>
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
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
                        >
                            {uploading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Uploading...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                    Upload New
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}
                    
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : filteredMedia.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <p className="text-lg font-medium">No media found</p>
                            <p className="text-sm">Upload an image or video to get started.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {filteredMedia.map((file) => (
                                <div 
                                    key={file.name} 
                                    onClick={() => onSelect(file.url)}
                                    className="group bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-md transition-all relative aspect-square flex flex-col"
                                >
                                    <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-hidden relative">
                                        {file.type === 'image' ? (
                                            <img 
                                                src={file.url} 
                                                alt={file.name} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full relative">
                                                <video 
                                                    src={file.url} 
                                                    className="w-full h-full object-cover"
                                                    preload="metadata"
                                                />
                                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                        <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors pointer-events-none" />
                                    </div>
                                    <div className="p-2 border-t border-gray-100 bg-white shrink-0">
                                        <p className="text-xs font-medium text-gray-800 truncate" title={file.name}>{file.name}</p>
                                        <div className="flex justify-between items-center mt-1">
                                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{file.type}</p>
                                            <p className="text-[10px] text-gray-400">
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
        </div>
    );
}
