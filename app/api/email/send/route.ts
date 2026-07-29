export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import path from "path";

// Initialize Supabase correctly for server-side insertions
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface ContactFormData {
    first_name?: string;
    last_name?: string;
    email?: string;
    description?: string; // Mapped from "Your queries"
    type?: string;
    phone?: string;
    organization?: string;
    specialty?: string;
}

export async function POST(req: Request) {
    try {
        const data: ContactFormData = await req.json();

        console.log("==== INCOMING DATA FROM FRONTEND ====");
        console.log(data);

        const insertPayload = {
            first_name: data.first_name || null,
            last_name: data.last_name || null,
            email: data.email || null,
            description: data.description || null,
            type: data.type || "contact",
            phone: data.phone || null,
            organization: data.organization || null,
            specialty: data.specialty || null,
        };

        console.log("==== DATA BEING SENT TO SUPABASE ====");
        console.log(insertPayload);

        // 1. FIRST: Insert Data into Supabase
        const { error: dbError } = await supabase
            .from("contact_us")
            .insert([insertPayload]);

        if (dbError) {
            console.error("Supabase Error:", dbError);
            return NextResponse.json({ error: "Failed to save contact information in database." }, { status: 500 });
        }

        // 2. SECOND: Send Email via Nodemailer (Wrapped in its own try-catch)
        if (data.email) {
            try {
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: Number(process.env.SMTP_PORT) || 587,
                    secure: process.env.SMTP_PORT === "465",
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASSWORD,
                    },
                });

                const mailOptions = {
                    from: `"Me-Billing Support" <${process.env.SMTP_USER}>`,
                    to: data.email,
                    subject: "Thank You for Reaching Out!",
                    html: `
                      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                        <div style="text-align: center; margin-bottom: 20px;">
                          <img src="cid:mebillinglogo" alt="Me-Billing Logo" style="max-width: 200px; height: auto;" />
                        </div>
                        <h2 style="color: #0F5C3B;">Thank You for Reaching Out!</h2>
                        <p>Hi ${data.first_name || "there"},</p>
                        <p>We have received your query and we will get back to you soon.</p>
                        <br/>
                        <p>Best Regards,</p>
                        <p><strong>The MeBilling Team</strong></p>
                      </div>
                    `,
                    attachments: [
                        {
                            filename: 'Logo2.png',
                            path: path.join(process.cwd(), 'public', 'images', 'Logo2.png'),
                            cid: 'mebillinglogo'
                        }
                    ]
                };

                await transporter.sendMail(mailOptions);
                console.log("Confirmation email sent successfully!");

                const adminMailOptions = {
                    from: `"Me-Billing Website" <${process.env.SMTP_USER}>`,
                    to: "rabia@freemindmarketing.com, jacqueline@freemindmarketing.com, ahmedsami@freemindmarketing.com, ahmed@freemindmarketing.com",
                    subject: `New Form Submission: ${data.type || 'Contact Form'}`,
                    html: `
                        <h2>New Form Submission</h2>
                        <p><strong>First Name:</strong> ${data.first_name || 'N/A'}</p>
                        <p><strong>Last Name:</strong> ${data.last_name || 'N/A'}</p>
                        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
                        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
                        <p><strong>Organization:</strong> ${data.organization || 'N/A'}</p>
                        <p><strong>Specialty:</strong> ${data.specialty || 'N/A'}</p>
                        <p><strong>Message/Queries:</strong> ${data.description || 'N/A'}</p>
                        <p><strong>Type:</strong> ${data.type || 'N/A'}</p>
                    `
                };
                
                await transporter.sendMail(adminMailOptions);
                console.log("Admin notification email sent successfully!");
            } catch (emailError: any) {
                // Email fail hone par api crash na ho, kyunke data database mein save ho chuka hai
                console.error("Nodemailer Error (Ignored):", emailError.message);
            }
        }

        // 3. Proper Success Response
        return NextResponse.json({ success: true, message: "Your message has been received." });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json({ error: error.message || "Internal server error.", details: error }, { status: 500 });
    }
}