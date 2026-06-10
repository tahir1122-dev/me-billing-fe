export interface SEOData {
    title: string;
    description: string;
    keywords?: string;
    openGraph?: {
        title?: string;
        description?: string;
        url?: string;
        type?: string;
        images?: { url: string }[];
    };
    twitter?: {
        card?: string;
        title?: string;
        description?: string;
        image?: string;
    };
}

export interface SectionData {
    id?: string;
    page_id?: string;
    section_name: string;
    content: Record<string, any>;
    created_at?: string;
}

export interface PageData {
    id?: string;
    slug: string;
    name?: string;
    seo_title?: string;
    seo_description?: string;
    seo_meta_tags?: string;
    created_at?: string;
    
    // For convenience in frontend, we attach sections as a dictionary mapping section_name -> content
    sections?: Record<string, any>;
}
