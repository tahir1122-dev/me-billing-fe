import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { PageContentService } from '@/services/pageContent.service';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { slug, name, seo_title, seo_description, seo_meta_tags } = body;

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        const result = await PageContentService.updatePageMeta(slug, {
            name,
            seo_title,
            seo_description,
            seo_meta_tags
        });

        if (!result.success) {
            return NextResponse.json({ error: result.error }, { status: 500 });
        }

        // Clear Next.js cache so changes reflect on live immediately
        revalidatePath('/', 'layout');

        return NextResponse.json({ success: true, message: 'Page updated successfully' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
