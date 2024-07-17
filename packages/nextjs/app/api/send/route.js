import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req, res) {
  const { email, reciever, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: reciever,
    subject: subject,
    text: message,
    html: `<p>${message}</p>`
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  // transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     return NextResponse.json({"success": info})
  //   } else {
  //     return NextResponse.json({"error": error})
  //   }

  // })
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({"success": info})
    // res.status(200).json({ success: `Message delivered to ${info.accepted}` });
  } catch (error) {
    console.error('Error occurred:', error.message);
    // res.status(500).json({ error: 'Error sending email' });
    return NextResponse.json({"error": error})
  }
}
