import { NextResponse } from 'next/server';
import { PageContentService } from '@/services/pageContent.service';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ error: 'Slug parameter is required' }, { status: 400 });
    }

    try {
        const pageData = await PageContentService.getPage(slug);
        
        if (!pageData) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 });
        }

        return NextResponse.json(pageData);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
