import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

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
      return res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error(error);
      return res.status(500).send('Failed to send email');
    }
  } else {
    return res.status(405).send('Method not allowed');
  }
}
