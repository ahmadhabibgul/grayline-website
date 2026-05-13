import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "studiosgrayline@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER || "studiosgrayline@gmail.com";
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";

    if (!pass) {
      return NextResponse.json(
        { error: "SMTP is not configured. Add SMTP_PASS in .env.local to enable direct sending." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass
      }
    });

    await transporter.sendMail({
      from: `Grayline Website <${user}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project details:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not send message. Please try again." }, { status: 500 });
  }
}
