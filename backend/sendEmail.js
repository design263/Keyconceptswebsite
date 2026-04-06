// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import { dirname, resolve } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// dotenv.config({ path: resolve(__dirname, '.env') });

// export default async function sendEmail(options) {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.verify();
//     console.log("Connection verified!\n");

//     console.log("Sending email to:", options.to);

//     const info = await transporter.sendMail({
//       from: `"Key Concepts TEST" <${process.env.SMTP_USER}>`,
//       to: options.to || process.env.COMPANY_EMAIL,
//       subject: options.subject,
//       html: options.html,
//       attachments: options.attachments || [],
//     });

//     console.log("Email sent:", info.messageId);

//   } catch (error) {
//     console.error("ERROR:", error);
//   }
// }

// // Run test
// sendEmail({
//   ...options,
//   to: process.env.COMPANY_EMAIL
// });



import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function sendEmail({ to, subject, html, attachments = [] }) {
  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
    const fromName = process.env.FROM_NAME || "Key Concepts";
    const fromEmail = process.env.FROM_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPassword) {
      throw new Error("Missing SMTP configuration. Set SMTP_HOST, SMTP_USER and SMTP_PASSWORD.");
    }
    if (!to) {
      throw new Error("Missing email recipient (`to`).");
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      subject,
      html,
      attachments,
    });

    return info;

  } catch (error) {
    console.error(" EMAIL ERROR FULL:");
    console.error(error);
    throw error;
  }
}