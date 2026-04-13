import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─────────────────────────────────────────────────────────────
// Gmail SMTP Configuration
// ─────────────────────────────────────────────────────────────
// To use Gmail SMTP, you need to:
// 1. Enable 2-Step Verification on your Google account
// 2. Generate an App Password: https://myaccount.google.com/apppasswords
// 3. Set these environment variables in .env.local:
//
//    SMTP_HOST=smtp.gmail.com
//    SMTP_PORT=465
//    SMTP_USER=arsalan.shahyar@gmail.com
//    SMTP_PASS=your-gmail-app-password
//    CONTACT_EMAIL=arsalan.shahyar@gmail.com
//
// ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // true for port 465
            auth: {
                user: process.env.SMTP_USER || "arsalan.shahyar@gmail.com",
                pass: process.env.SMTP_PASS || "", // Gmail App Password
            },
        });

        const contactEmail = process.env.CONTACT_EMAIL || "arsalan.shahyar@gmail.com";

        await transporter.sendMail({
            from: `"${name}" <${contactEmail}>`, // Send from yourself
            to: contactEmail, // Send to yourself
            replyTo: email, // Reply goes to the person who filled the form
            subject: `[Portfolio Contact] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6d28d9, #06b6d4); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Portfolio Message</h1>
          </div>
          <div style="padding: 24px; background: #f8fafc; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 8px;"><strong>From:</strong> ${name}</p>
            <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0 0 8px;"><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
