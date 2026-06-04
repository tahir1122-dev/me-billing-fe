import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET() {
    try {
        // Fetch count for contact/sales forms
        const { count: contactUsCount, error: contactError } = await supabase
            .from("contact_us")
            .select('*', { count: 'exact', head: true });

        if (contactError) {
            console.error("Supabase Count Error (Contact):", contactError);
            return NextResponse.json(
                { success: false, message: "Failed to fetch stats." },
                { status: 500 }
            );
        }

        // Fetch count for resume submissions
        const { count: resumeCount, error: resumeError } = await supabase
            .from("resume")
            .select('*', { count: 'exact', head: true });

        if (resumeError) {
            console.error("Supabase Count Error (Resume):", resumeError);
            return NextResponse.json(
                { success: false, message: "Failed to fetch stats." },
                { status: 500 }
            );
        }

        const totalFormSubmissions = (contactUsCount || 0) + (resumeCount || 0);

        return NextResponse.json({ 
            success: true, 
            data: {
                pages: 10,
                formSubmissions: totalFormSubmissions
            }
        }, {
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
