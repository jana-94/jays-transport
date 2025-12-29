// src/app/api/sendEmail/route.js

import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message, type, bookingDetails } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 1️⃣ Send email to ADMIN
    await transporter.sendMail({
      from: `"Jay's Transport Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: type === 'booking' ? `New Booking Request from ${name}` : `New Message from ${name}`,
      text: type === 'booking' 
        ? `Booking Request Details:\n\n${bookingDetails}` 
        : message,
    });

    // 2️⃣ Send confirmation email to USER
    const userMessage = type === 'booking'
      ? `Hi ${name},\n\nWe have received your booking request:\n\n${bookingDetails}\n\nOur team will contact you shortly.\n\nBest regards,\nJay's Transport`
      : `Hi ${name},\n\nThank you for contacting Jay's Transport.\nWe have received your message and will contact you shortly.\n\nBest regards,\nJay's Transport`;

    await transporter.sendMail({
      from: `"Jay's Transport" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: type === 'booking' ? "We received your booking request" : "We received your message",
      text: userMessage,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Emails sent' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
