import { NextResponse } from 'next/server';
import { PageContentService } from '@/services/pageContent.service';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        const data = await PageContentService.getPage(slug);

        if (!data) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 });
        }

        // Return precisely as requested: { page: { ...seo + metadata }, sections: { ...dynamic content } }
        return NextResponse.json({
            page: {
                id: data.id,
                slug: data.slug,
                name: data.name,
                seo_title: data.seo_title,
                seo_description: data.seo_description,
                seo_meta_tags: data.seo_meta_tags,
                created_at: data.created_at,
            },
            sections: data.sections || {}
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
