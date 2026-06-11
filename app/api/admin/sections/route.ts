import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { PageContentService } from '@/services/pageContent.service';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { page_id, section_name, content } = body;

        if (!page_id || !section_name || !content) {
            return NextResponse.json(
                { error: 'Missing required fields: page_id, section_name, or content' },
                { status: 400 }
            );
        }

        const result = await PageContentService.upsertSection(page_id, section_name, content);

        if (!result.success) {
            return NextResponse.json({ error: result.error }, { status: 500 });
        }

        // Clear Next.js cache so changes reflect on live immediately
        revalidatePath('/', 'layout');

        return NextResponse.json({ message: 'Section updated successfully' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
