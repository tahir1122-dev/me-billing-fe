export function isEmbeddedVideo(url: string | null | undefined): boolean {
    if (!url) return false;
    
    // Check for common embed domains or structures
    return url.includes('youtube.com/embed') || 
           url.includes('youtube.com/watch') || 
           url.includes('youtu.be') || 
           url.includes('vimeo.com') ||
           url.startsWith('<iframe');
}

export function getEmbedUrl(url: string | null | undefined): string {
    if (!url) return '';
    
    // If it's already an iframe snippet, we might need to extract the src, but 
    // for simplicity, let's assume they provide the URL itself.
    if (url.startsWith('<iframe')) {
        const match = url.match(/src="([^"]+)"/);
        return match ? match[1] : url;
    }
    
    // Convert standard YouTube watch URLs to embed URLs
    if (url.includes('youtube.com/watch')) {
        try {
            const urlObj = new URL(url);
            const videoId = urlObj.searchParams.get('v');
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }
        } catch (e) {
            // Ignore invalid URL
        }
    }
    
    // Convert youtu.be short URLs to embed URLs
    if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }
    
    // Convert Vimeo standard URLs to embed URLs
    if (url.includes('vimeo.com/') && !url.includes('player.vimeo.com')) {
        const videoId = url.split('vimeo.com/')[1]?.split('?')[0]?.split('/')[0];
        if (videoId && !isNaN(Number(videoId))) {
            return `https://player.vimeo.com/video/${videoId}`;
        }
    }
    
    return url;
}
