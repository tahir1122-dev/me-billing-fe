import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET() {
    try {
        const { data, error } = await supabase.storage.from("assets").list();

        if (error) {
            return NextResponse.json({ success: false, message: error.message }, { status: 500 });
        }

        // Filter out empty folder placeholders
        const files = data.filter(file => file.name && file.name !== '.emptyFolderPlaceholder');

        const fileList = files.map(file => {
            const { data: publicUrlData } = supabase.storage.from("assets").getPublicUrl(file.name);
            const isVideo = !!file.name.match(/\.(mp4|webm|ogg)$/i);
            const isImage = !!file.name.match(/\.(jpeg|jpg|gif|png|svg|webp|avif)$/i);

            return {
                name: file.name,
                url: publicUrlData.publicUrl,
                type: isVideo ? 'video' : isImage ? 'image' : 'other',
                created_at: file.created_at,
                id: file.id
            };
        });

        // Sort by created_at descending
        fileList.sort((a, b) => new Date(b.created_at ?? '').getTime() - new Date(a.created_at ?? '').getTime());

        return NextResponse.json({ success: true, data: fileList });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 });
        }

        // Sanitize file name and add timestamp
        const originalName = file.name;
        const extension = originalName.substring(originalName.lastIndexOf('.'));
        const nameWithoutExt = originalName.substring(0, originalName.lastIndexOf('.'));
        const safeName = nameWithoutExt.replace(/[^a-zA-Z0-9-_\.]/g, '') + '-' + Date.now() + extension;

        const { data, error } = await supabase.storage
            .from("assets")
            .upload(safeName, file, {
                contentType: file.type,
                upsert: false
            });

        if (error) {
            console.error("Supabase Upload Error:", error);
            return NextResponse.json({ success: false, message: error.message }, { status: 500 });
        }

        const { data: publicUrlData } = supabase.storage.from("assets").getPublicUrl(safeName);
        const isVideo = !!safeName.match(/\.(mp4|webm|ogg)$/i);
        const isImage = !!safeName.match(/\.(jpeg|jpg|gif|png|svg|webp|avif)$/i);

        return NextResponse.json({
            success: true,
            data: {
                name: safeName,
                url: publicUrlData.publicUrl,
                type: isVideo ? 'video' : isImage ? 'image' : 'other',
                created_at: new Date().toISOString()
            }
        });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const fileName = searchParams.get('fileName');

        if (!fileName) {
            return NextResponse.json({ success: false, message: "No fileName provided" }, { status: 400 });
        }

        const { error } = await supabase.storage.from("assets").remove([fileName]);

        if (error) {
            console.error("Supabase Delete Error:", error);
            return NextResponse.json({ success: false, message: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "File deleted successfully" });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
    }
}
