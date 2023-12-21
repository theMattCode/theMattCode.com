import { NextRequest } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("contact-name");
  if (!name) {
    return Response.json(
      { error: "Name is required", sent: false },
      { status: 400 },
    );
  }

  const email = formData.get("contact-email");
  if (!email) {
    return Response.json(
      { error: "Email is required", sent: false },
      { status: 400 },
    );
  }

  const message = formData.get("contact-message");
  if (!message) {
    return Response.json(
      { error: "Message is required", sent: false },
      { status: 400 },
    );
  }

  const transporter = createTransport({
    port: Number.parseInt(process.env.MAIL_CONTACT_PORT ?? "587"),
    host: process.env.MAIL_CONTACT_SMTP,
    auth: {
      user: process.env.MAIL_CONTACT_USER,
      pass: process.env.MAIL_CONTACT_PASS,
    },
    requireTLS: true,
  });

  const sentMessageInfo = await transporter.sendMail({
    from: process.env.MAIL_CONTACT_FROM,
    to: process.env.MAIL_CONTACT_TO,
    subject: `[theMattCode.com, ${process.env.NODE_ENV}] New contact form message from ${name}`,
    text: `${name} (${email}): ${message}`,
    html: `<p>${name} (${email}):</p><p>${message}</p>`,
  });

  console.log("info:", sentMessageInfo);

  return Response.json({ sent: true });
}
