import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import path from "path";

// Initialize Supabase correctly for server-side insertions
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const ALLOWED_TYPES = ["application/pdf", "application/msword"];
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        console.log("==== INCOMING RESUME SUBMISSION ====");

        const firstName = formData.get("first_name") as string | null;
        const lastName = formData.get("last_name") as string | null;
        const email = formData.get("email") as string | null;
        const phone = formData.get("phone") as string | null;
        const description = formData.get("description") as string | null;
        const jobTitle = formData.get("job_title") as string | null;
        const file = formData.get("resume") as File | null;

        console.log({ firstName, lastName, email, phone, description, jobTitle, fileName: file?.name });

        // 1. Validate required fields
        if (!firstName || !lastName || !email || !phone || !file) {
            return NextResponse.json(
                { success: false, message: "All fields are required including resume file." },
                { status: 400 }
            );
        }

        // 2. Validate file type
        if (!ALLOWED_TYPES.includes(file.type)) {
            return NextResponse.json(
                { success: false, message: "Invalid file type. Only .pdf and .doc files are allowed." },
                { status: 400 }
            );
        }

        // 3. Validate file size
        if (file.size > MAX_FILE_SIZE_BYTES) {
            return NextResponse.json(
                { success: false, message: `File size exceeds the ${MAX_FILE_SIZE_MB}MB limit.` },
                { status: 400 }
            );
        }

        // 4. Upload CV to Supabase Storage (user_cv bucket)
        const fileBuffer = await file.arrayBuffer();
        const fileBytes = new Uint8Array(fileBuffer);
        const timestamp = Date.now();
        const sanitizedName = file.name.replace(/\s+/g, "_");
        const filePath = `resumes/${timestamp}_${sanitizedName}`;

        console.log("==== UPLOADING FILE TO SUPABASE STORAGE ====");
        console.log({ filePath, fileType: file.type, fileSize: file.size });

        const { error: uploadError } = await supabase.storage
            .from("user_cv")
            .upload(filePath, fileBytes, {
                contentType: file.type,
                upsert: false,
            });

        if (uploadError) {
            console.error("Supabase Storage Upload Error:", uploadError);
            return NextResponse.json(
                { success: false, message: "Failed to upload resume file." },
                { status: 500 }
            );
        }

        // 5. Get public URL of the uploaded file
        const { data: publicUrlData } = supabase.storage
            .from("user_cv")
            .getPublicUrl(filePath);

        const resumeUrl = publicUrlData.publicUrl;

        console.log("==== FILE UPLOADED SUCCESSFULLY ====");
        console.log({ resumeUrl });

        // 6. Insert Data into Supabase Database (after successful upload)
        const insertPayload = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_no: phone,
            description: description,
            file_name: resumeUrl,
            position: jobTitle,
        };

        console.log("==== DATA BEING SENT TO SUPABASE DB ====");
        console.log(insertPayload);

        const { error: dbError } = await supabase
            .from("resume")
            .insert([insertPayload]);

        if (dbError) {
            console.error("Supabase DB Error:", dbError);
            return NextResponse.json(
                { success: false, message: "Failed to save resume submission in database." },
                { status: 500 }
            );
        }

        // 7. Send Confirmation Email via Nodemailer (Wrapped in its own try-catch)
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
                to: email,
                subject: "Resume Received Successfully",
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <div style="text-align: center; margin-bottom: 20px;">
                      <img src="cid:mebillinglogo" alt="Me-Billing Logo" style="max-width: 200px; height: auto;" />
                    </div>
                    <h2 style="color: #0F5C3B;">Resume Received Successfully</h2>
                    <p>Hi ${firstName},</p>
                    <p>Thank you for submitting your resume to MeBilling. We have successfully received your application and our team will review it carefully. If your profile matches our requirements, we will contact you for the next steps.</p>
                    ${jobTitle ? `<p><strong>Position Applied For:</strong> ${jobTitle}</p>` : ""}
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
            console.log("Resume confirmation email sent successfully!");
        } catch (emailError: any) {
            // Email fail hone par api crash na ho, kyunke data database mein save ho chuka hai
            console.error("Nodemailer Error (Ignored):", emailError.message);
        }

        // 8. Proper Success Response
        return NextResponse.json({ success: true, message: "Resume submitted successfully" });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json({ error: error.message || "Internal server error.", details: error }, { status: 500 });
    }
}
