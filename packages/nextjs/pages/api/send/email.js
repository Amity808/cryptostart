// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';


// export async function POST(req, res) {
//   const { email, reciever, subject, message } = req.json();
  
//   console.log('Request body:', { email, reciever, subject, message }); 
//   const mailOptions = {
//     from: email,
//     to: reciever,
//     subject: subject,
//     text: message,
//     html: `<p>${message}</p>`
//   };

//      if (!email || !reciever || !subject || !message) {
//       return NextResponse.json({ error: 'Missing required fields' });
//     }

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     service: "gmail",
//     // secure: false, // true for 465, false for other ports
//     auth: {
//       user: process.env.SMTP_EMAIL,
//       pass: process.env.SMTP_PASSWORD
//     }
//   });

//   // transporter.sendMail(mailOptions, (err, info) => {
//   //   if (err) {
//   //     return NextResponse.json({"success": info})
//   //   } else {
//   //     return NextResponse.json({"error": error})
//   //   }

//   // })
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Message sent: %s', info.messageId);
//     return NextResponse.json({"success": info})
//     // res.status(200).json({ success: `Message delivered to ${info.accepted}` });
//   } catch (error) {
//     console.error('Error occurred:', error.message);
//     // res.status(500).json({ error: 'Error sending email' });
//     return NextResponse.json({"error": error})
//   }
// }


import nodemailer from 'nodemailer';


export default function handler(req, res) {
    const message = {
        from: req.body.email,
        to: req.body.reciever,
        subject: req.body.subject,
        text: req.body.text,
        html: `<p>${req.body.message}</p>`,
      };
      const transporter = nodemailer.createTransport({
        host: 'stmp.gmail.com',
        port: 587,
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      if (req.method === 'POST') {
        
        transporter.sendMail(message, (err, info) => {
    
          if (err) {
            res.status(404).json({
                error: `Connection refused at ${err.address}`
            });
          } else {
            res.status(250).json({
                success: `Message delivered to ${info.accepted}`
            });
          }
        });
      }
}