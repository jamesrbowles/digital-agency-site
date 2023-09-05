import nodemailer from 'nodemailer';
/* import type { NextApiRequest, NextApiResponse } from 'next';
 */
export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const { name, email, subject, message } = body;

      // Configure the transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PW,
        },
      });

      // Construct the email message
      const mailOptions = {
        from: 'hello@jamesbowles.co',
        to: 'hello@jamesbowles.co',
        subject: `New contact form submission: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      /*  return res.status(200).json('Email sent successfully'); */
      return new Response();
    } catch (error) {
      console.error(error);
      /*  return res.status(500).json('Failed to send email'); */
      return new Response();
    }
  } else {
    /*  return res.status(405).json('Method not allowed'); */
    return new Response();
  }
}
