import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // false for 587, true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Generate PDF from lead data
const generateLeadPDF = (leadData) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });
    doc.on('error', reject);

    // Add logo/header
    doc.fontSize(20).font('Helvetica-Bold').text('Key Concepts', { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text('New Contact Lead Details', { align: 'center' });
    doc.moveDown();
    doc.lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown();

    // Lead Information
    doc.fontSize(12).font('Helvetica-Bold').text('Contact Information:', { underline: true });
    doc.moveDown(0.5);
    doc.font('Helvetica');
    doc.text(`Name: ${leadData.name || 'N/A'}`);
    doc.text(`Email: ${leadData.email || 'N/A'}`);
    doc.text(`Subject: ${leadData.subject || 'N/A'}`);
    if (leadData.company) doc.text(`Company: ${leadData.company}`);
    if (leadData.phone) doc.text(`Phone: ${leadData.phone}`);
    doc.moveDown();

    doc.font('Helvetica-Bold').text('Message:', { underline: true });
    doc.moveDown(0.5);
    doc.font('Helvetica').text(leadData.message || 'No message provided');
    doc.moveDown();

    doc.fontSize(10).font('Helvetica-Oblique').text(`Submitted on: ${new Date().toLocaleString()}`, { align: 'center' });

    doc.end();
  });
};

// Send email to user (customer)
export const sendUserConfirmationEmail = async (userEmail, userName) => {
  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: userEmail,
    subject: 'Thank you for contacting Key Concepts',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f1592a 0%, #ff7a45 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; font-size: 28px; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #f1592a; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Key Concepts</h1>
          </div>
          <div class="content">
            <h2>Hello ${userName || 'there'}!</h2>
            <p>Thank you for reaching out to Key Concepts. We have received your inquiry and our team will get back to you within 24-48 business hours.</p>
            <p>Here's what you can expect next:</p>
            <ul>
              <li>Our team will review your requirements</li>
              <li>We'll schedule a discovery call to understand your needs better</li>
              <li>You'll receive a customized solution proposal</li>
            </ul>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Visit our website to learn more about our services</li>
              <li>Check out our portfolio and case studies</li>
              <li>Connect with us on social media for updates</li>
            </ul>
            <center>
              <a href="https://keyconcepts.co.in" class="button">Visit Our Website</a>
            </center>
            <p>Best regards,<br><strong>The Key Concepts Team</strong></p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Key Concepts. All rights reserved.</p>
            <p>301, Highfield Ascot, Opp. Palm Avenue, VIP Road, Vesu, Surat - 395007</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${userEmail}`);
    return true;
  } catch (error) {
    console.error('Error sending user confirmation email:', error);
    throw error;
  }
};

// Send email to company with PDF attachment
export const sendCompanyNotificationEmail = async (leadData) => {
  try {
    const pdfBuffer = await generateLeadPDF(leadData);

    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Lead: ${leadData.name} - ${leadData.subject || 'Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f1592a; padding: 20px; text-align: center; color: white; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 15px; border-left: 4px solid #f1592a; margin: 15px 0; }
            .badge { display: inline-block; padding: 5px 10px; background: #f1592a; color: white; border-radius: 3px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <p><strong>A new lead has been submitted through the website contact form.</strong></p>
              
              <div class="info-box">
                <h3>Lead Details:</h3>
                <p><strong>Name:</strong> ${leadData.name || 'N/A'}</p>
                <p><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></p>
                <p><strong>Subject:</strong> ${leadData.subject || 'N/A'}</p>
                ${leadData.company ? `<p><strong>Company:</strong> ${leadData.company}</p>` : ''}
                ${leadData.phone ? `<p><strong>Phone:</strong> <a href="tel:${leadData.phone}">${leadData.phone}</a></p>` : ''}
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <div class="info-box">
                <h3>Message:</h3>
                <p>${leadData.message || 'No message provided'}</p>
              </div>
              
              <p><span class="badge">Action Required</span></p>
              <p>Please respond to this lead within 24 hours.</p>
              <p><strong>Quick Actions:</strong></p>
              <ul>
                <li><a href="mailto:${leadData.email}">Reply to ${leadData.name}</a></li>
                <li><a href="tel:${leadData.phone}">Call ${leadData.name}</a></li>
              </ul>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: `lead_${leadData.name.replace(/\s/g, '_')}_${Date.now()}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log(`Company notification email sent to ${process.env.COMPANY_EMAIL}`);
    return true;
  } catch (error) {
    console.error('Error sending company notification email:', error);
    throw error;
  }
};

// Combined function to send all emails
export const sendLeadEmails = async (leadData) => {
  try {
    // Send email to company with PDF
    await sendCompanyNotificationEmail(leadData);

    // Send confirmation email to user
    await sendUserConfirmationEmail(leadData.email, leadData.name);

    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Error sending lead emails:', error);
    throw error;
  }
};