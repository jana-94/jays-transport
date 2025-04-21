// src/app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New Booking Request from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true, message: 'Email sent' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
