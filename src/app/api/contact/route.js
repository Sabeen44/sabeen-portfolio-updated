import { Resend } from "resend";

export async function POST(request) {
  const { email, message } = await request.json();

  if (!email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  // To wire up email delivery, install Resend: npm install resend
  // Then add RESEND_API_KEY to your .env.local and uncomment below:
  //
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "craftedstack@gmail.com",
    subject: `New message from ${email}`,
    text: message,
  });

  console.log("Contact form submission:", { email, message });

  return Response.json({ success: true });
}
