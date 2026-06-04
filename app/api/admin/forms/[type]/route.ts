import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

// Initialize Supabase correctly for server-side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(
    request: Request,
    { params }: { params: Promise<{ type: string }> }
) {
    try {
        const { type } = await params;
        
        let data, error;

        // Fetch data based on the form type
        if (type === "resume") {
            const response = await supabase
                .from("resume")
                .select("*")
                .order("created_at", { ascending: false });
            data = response.data;
            error = response.error;
        } else if (type === "contact" || type === "sales") {
            const response = await supabase
                .from("contact_us")
                .select("*")
                .eq("type", type)
                .order("created_at", { ascending: false });
            data = response.data;
            error = response.error;
        } else {
            return NextResponse.json(
                { success: false, message: "Invalid form type." },
                { status: 400 }
            );
        }

        if (error) {
            console.error(`Supabase Fetch Error for type ${type}:`, error);
            return NextResponse.json(
                { success: false, message: "Failed to fetch data." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error." },
            { status: 500 }
        );
    }
}
