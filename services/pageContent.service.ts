import { createClient } from '@supabase/supabase-js';
import { PageData } from '@/types/page-content';
import { defaultPageContent } from '@/data/defaultPageContent';
import { pageComponents } from '@/config/pageComponents';

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Use service role key if available for admin operations, otherwise use anon key
const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseKey;

export const supabaseAdmin = createClient(supabaseUrl, adminKey);

export class PageContentService {
    
    /**
     * Get page content from Supabase.
     * If it doesn't exist, try to use defaultPageContent and insert it as seed data.
     */
    static async getPage(slug: string): Promise<PageData | null> {
        // 1. Fetch page from pages table
        let { data: page, error: pageError } = await supabaseAdmin
            .from('pages')
            .select('*')
            .eq('slug', slug)
            .single();

        // 2. If page doesn't exist, check default content
        if (!page) {
            const defaultContent = defaultPageContent[slug];
            if (defaultContent) {
                // Seed data insertion
                const { data: newPage, error: insertError } = await supabaseAdmin
                    .from('pages')
                    .insert({
                        slug: defaultContent.slug,
                        name: defaultContent.slug, // default name
                        seo_title: defaultContent.seo_title,
                        seo_description: defaultContent.seo_description,
                        seo_meta_tags: defaultContent.seo_meta_tags,
                    })
                    .select()
                    .single();

                if (insertError || !newPage) {
                    console.error("Error seeding page:", insertError);
                    return null;
                }
                
                page = newPage;

                // Insert associated sections
                if (defaultContent.sections) {
                    const sectionsToInsert = Object.entries(defaultContent.sections).map(([sectionName, content]) => ({
                        page_id: page.id,
                        section_name: sectionName,
                        content: content
                    }));

                    if (sectionsToInsert.length > 0) {
                        const { error: sectionsInsertError } = await supabaseAdmin
                            .from('pages_content')
                            .insert(sectionsToInsert);
                        
                        if (sectionsInsertError) {
                            console.error("Error seeding sections:", sectionsInsertError);
                        }
                    }
                }
            } else {
                return null; // No page and no default content
            }
        }

        // 3. Fetch all sections for this page
        const { data: sectionsData, error: sectionsError } = await supabaseAdmin
            .from('pages_content')
            .select('*')
            .eq('page_id', page.id);

        if (sectionsError) {
            console.error("Error fetching sections:", sectionsError);
        }

        // 4. Convert sections into dictionary mapping
        const sections: Record<string, any> = {};
        if (sectionsData) {
            sectionsData.forEach(section => {
                sections[section.section_name] = section.content;
            });
        }

        // 5. Construct the PageData object
        return {
            id: page.id,
            slug: page.slug,
            name: page.name,
            seo_title: page.seo_title,
            seo_description: page.seo_description,
            seo_meta_tags: page.seo_meta_tags,
            created_at: page.created_at,
            sections: sections
        };
    }

    /**
     * Upsert a single section into the pages_content table.
     */
    static async upsertSection(pageId: string, sectionName: string, content: any): Promise<{ success: boolean; error?: string }> {
        const { error } = await supabaseAdmin
            .from('pages_content')
            .upsert(
                {
                    page_id: pageId,
                    section_name: sectionName,
                    content: content,
                    // updated_at could be set here if the table has it
                },
                { onConflict: 'page_id, section_name' }
            );

        if (error) {
            console.error("Error upserting section:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    }

    /**
     * Update page metadata.
     */
    static async updatePageMeta(slug: string, payload: Partial<PageData>): Promise<{ success: boolean; error?: string }> {
        const { error } = await supabaseAdmin
            .from('pages')
            .update({
                name: payload.name,
                seo_title: payload.seo_title,
                seo_description: payload.seo_description,
                seo_meta_tags: payload.seo_meta_tags,
            })
            .eq('slug', slug);

        if (error) return { success: false, error: error.message };
        return { success: true };
    }
}
