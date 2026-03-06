import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // Create SMTP transporter with hardcoded credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "sumitraza35@gmail.com", // your Gmail
        pass: "mvwp zzze eawf waox",   // app password, not your real Gmail password
      },
    });

    await transporter.sendMail({
      from: "sumitraza35@gmail.com", // use your Gmail directly
      to: 'sumitraza35@gmail.com',   // recipient
      subject: subject || 'New Message from Contact Form',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}