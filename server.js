import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Nodemailer transporter
// Provide your exact SMTP credentials from your email hosting provider (e.g., Hostinger, Zoho, GoDaddy, etc.) in the .env file
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465', // typically true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, inquiry_type, inquiry_types, message } = req.body;

  const rawInquiry = inquiry_types || inquiry_type;
  const inquiryList = Array.isArray(rawInquiry)
    ? rawInquiry.filter(Boolean)
    : typeof rawInquiry === 'string'
    ? rawInquiry.split(',').map(s => s.trim()).filter(Boolean)
    : [];
  const inquirySummary = inquiryList.length > 0 ? inquiryList.join(', ') : '';

  if (!name || !email || !inquirySummary || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields and select at least one inquiry type.' });
  }

  try {
    const inquiryHtml = inquiryList.length > 1
      ? `<ul style="margin: 0; padding-left: 20px; color: #002244; font-weight: bold;">
          ${inquiryList.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}
         </ul>`
      : `<span style="color: #002244; font-weight: bold;">${inquirySummary}</span>`;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || 'sales@vericon.com', // The email address receiving the inquiries
      replyTo: email,
      subject: `New Website Inquiry: [${inquirySummary}] from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-w-xl; color: #333;">
          <h2 style="color: #D80C20; margin-bottom: 5px;">New Contact Request</h2>
          <p style="color: #555; margin-top: 0;">You have received a new inquiry from the Vericon Engineering website.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 160px; background-color: #f9f9f9;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Phone</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Company</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Services Requested</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${inquiryHtml}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="font-size: 11px; color: #888; margin-top: 20px;">This email was automatically dispatched from the official Vericon Engineering website contact portal.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
