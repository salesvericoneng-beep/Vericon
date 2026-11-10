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
    const servicesText = inquiryList.length > 0 ? inquiryList.join(', ') : inquirySummary;

    const mailOptions = {
      from: `"VERICON Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL 
        ? `${process.env.RECIPIENT_EMAIL}, sales@vericon.in`
        : 'sales@vericon.com, sales@vericon.in', // The email address receiving the inquiries
      replyTo: email,
      subject: `New Website Inquiry: [${inquirySummary}] from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #001838; padding: 22px 25px; border-bottom: 3px solid #D80C20;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <h2 style="color: #ffffff; margin: 0; font-size: 21px; font-weight: bold; letter-spacing: 0.5px;">
                    VERICON <span style="color: #D80C20;">ENGINEERING</span>
                  </h2>
                  <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
                    Turnkey MEP &amp; Industrial Contracting
                  </p>
                </td>
                <td align="right">
                  <span style="background-color: #D80C20; color: #ffffff; padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase;">
                    Website Lead
                  </span>
                </td>
              </tr>
            </table>
          </div>

          <div style="padding: 24px;">
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px 16px; margin-bottom: 18px;">
              <strong style="color: #001838; font-size: 14px;">New Client Inquiry from www.vericon.in</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 3px;">Received on ${receivedTime}</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
              <tr style="background-color: #f8fafc;">
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; font-weight: bold; width: 150px; color: #475569; font-size: 13px;">Client Name</td>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; color: #001838; font-weight: bold; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px;">Email Address</td>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; font-size: 14px;"><a href="mailto:${email}" style="color: #D80C20; font-weight: bold; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; font-weight: bold; color: #475569; font-size: 13px;">Phone Number</td>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; color: #001838; font-weight: bold; font-size: 14px;">${phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px;">Company Name</td>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; color: #333333; font-size: 14px;">${company || 'N/A'}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; font-weight: bold; color: #475569; font-size: 13px;">Services Requested</td>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; color: #D80C20; font-weight: bold; font-size: 14px;">${servicesText}</td>
              </tr>
              <tr>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px;">Message</td>
                <td style="padding: 11px 14px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>

            <div style="margin-top: 22px; text-align: center;">
              <a href="mailto:${email}?subject=RE: VERICON Engineering Inquiry (${inquirySummary})" style="display: inline-block; background-color: #D80C20; color: #ffffff; padding: 11px 22px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px; margin-right: 8px;">
                Reply to Client
              </a>
              ${phone ? `
              <a href="tel:${phone}" style="display: inline-block; background-color: #001838; color: #ffffff; padding: 11px 22px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px;">
                Call ${phone}
              </a>
              ` : ''}
            </div>
          </div>

          <div style="background-color: #0f172a; padding: 16px 20px; text-align: center; color: #94a3b8; font-size: 11px; line-height: 1.5;">
            <strong style="color: #ffffff;">VERICON Engineering Private Limited</strong><br />
            Plot No 13, Ground floor, Awfis Ohris Tech Park, Madhapur, HITEC City, Hyderabad 500081<br />
            <a href="https://www.vericon.in" style="color: #60a5fa; text-decoration: none;">www.vericon.in</a> | +91 90000 19249
          </div>
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
