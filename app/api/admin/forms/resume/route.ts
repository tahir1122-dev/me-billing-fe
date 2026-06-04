import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET() {
    try {
        const { data, error } = await supabase
            .from("resume")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            console.error("Supabase Fetch Error (Resume):", error);
            return NextResponse.json(
                { success: false, message: "Failed to fetch data." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data }, {
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                Pragma: "no-cache",
                Expires: "0",
            }
        });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error." },
            { status: 500 }
        );
    }
}
