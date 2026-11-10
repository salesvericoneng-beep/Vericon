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
    const serviceBadgesHtml = inquiryList.length > 0
      ? inquiryList.map(s => 
          `<span style="display: inline-block; background-color: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; margin: 3px 4px 3px 0;">${s}</span>`
        ).join('')
      : `<span style="color: #001838; font-weight: 700;">${inquirySummary}</span>`;

    const receivedTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL 
        ? `${process.env.RECIPIENT_EMAIL}, sales@vericon.in`
        : 'sales@vericon.com, sales@vericon.in', // The email address receiving the inquiries
      replyTo: email,
      subject: `New Lead: [${inquirySummary}] from ${name} (${company || 'Direct Client'})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Website Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 30px 15px;">
            <tr>
              <td align="center">
                <!-- Main Container -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
                  
                  <!-- Corporate Header -->
                  <tr>
                    <td style="background-color: #001838; padding: 26px 32px; border-bottom: 3px solid #D80C20;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td>
                            <div style="font-size: 22px; font-weight: 800; letter-spacing: 1px; color: #ffffff; line-height: 1.2;">
                              VERICON <span style="color: #D80C20;">ENGINEERING</span>
                            </div>
                            <div style="font-size: 11px; color: #94a3b8; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-top: 4px;">
                              Turnkey MEP &amp; Industrial Contracting
                            </div>
                          </td>
                          <td align="right">
                            <span style="display: inline-block; background-color: #D80C20; color: #ffffff; padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
                              Website Lead
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Notification Alert -->
                  <tr>
                    <td style="padding: 24px 32px 10px 32px;">
                      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
                        <div style="font-size: 15px; font-weight: 700; color: #001838; margin-bottom: 3px;">
                          New Client Inquiry Received
                        </div>
                        <div style="font-size: 13px; color: #64748b; line-height: 1.4;">
                          A prospective client submitted this request through the contact portal on <a href="https://www.vericon.in" style="color: #D80C20; text-decoration: none; font-weight: 600;">vericon.in</a>.
                        </div>
                      </div>
                    </td>
                  </tr>

                  <!-- Services Requested Badges -->
                  <tr>
                    <td style="padding: 14px 32px 10px 32px;">
                      <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.75px; color: #64748b; margin-bottom: 8px;">
                        Services Requested:
                      </div>
                      <div>
                        ${serviceBadgesHtml}
                      </div>
                    </td>
                  </tr>

                  <!-- Client Details Grid -->
                  <tr>
                    <td style="padding: 10px 32px 20px 32px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse: separate; border-spacing: 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                        <tr style="background-color: #f8fafc;">
                          <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; width: 140px; border-bottom: 1px solid #e2e8f0;">
                            Client Name
                          </td>
                          <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #001838; border-bottom: 1px solid #e2e8f0;">
                            ${name}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
                            Email Address
                          </td>
                          <td style="padding: 12px 16px; font-size: 14px; color: #D80C20; font-weight: 600; border-bottom: 1px solid #e2e8f0;">
                            <a href="mailto:${email}" style="color: #D80C20; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr style="background-color: #f8fafc;">
                          <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">
                            Phone Number
                          </td>
                          <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #001838; border-bottom: 1px solid #e2e8f0;">
                            <a href="tel:${phone}" style="color: #001838; text-decoration: none;">${phone || 'Not provided'}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
                            Company Name
                          </td>
                          <td style="padding: 12px 16px; font-size: 14px; color: #334155; border-bottom: 1px solid #e2e8f0;">
                            ${company || 'N/A'}
                          </td>
                        </tr>
                        <tr style="background-color: #f8fafc;">
                          <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569;">
                            Received At
                          </td>
                          <td style="padding: 12px 16px; font-size: 13px; color: #64748b;">
                            ${receivedTime}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message Box -->
                  <tr>
                    <td style="padding: 0 32px 24px 32px;">
                      <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.75px; color: #64748b; margin-bottom: 8px;">
                        Client's Message:
                      </div>
                      <div style="background-color: #f8fafc; border-left: 4px solid #D80C20; border-radius: 4px; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; font-weight: 500;">${message}</div>
                    </td>
                  </tr>

                  <!-- Quick Action Buttons -->
                  <tr>
                    <td style="padding: 0 32px 30px 32px;" align="center">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="padding-right: 12px;">
                            <a href="mailto:${email}?subject=RE: VERICON Engineering Inquiry (${inquirySummary})" style="display: inline-block; background-color: #D80C20; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 13px; letter-spacing: 0.5px;">
                              Reply by Email
                            </a>
                          </td>
                          ${phone ? `
                          <td>
                            <a href="tel:${phone}" style="display: inline-block; background-color: #001838; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 13px; letter-spacing: 0.5px;">
                              Call ${phone}
                            </a>
                          </td>
                          ` : ''}
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Corporate Footer -->
                  <tr>
                    <td style="background-color: #0f172a; padding: 24px 32px; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.6;">
                      <div style="color: #ffffff; font-weight: 700; font-size: 13px; margin-bottom: 4px;">
                        VERICON Engineering Private Limited
                      </div>
                      <div style="color: #94a3b8;">Plot No 13, Ground floor, Awfis Ohris Tech Park, Madhapur, HITEC City, Hyderabad 500081</div>
                      <div style="margin-top: 8px;">
                        <a href="https://www.vericon.in" style="color: #60a5fa; text-decoration: none; margin-right: 12px; font-weight: 600;">www.vericon.in</a>
                        <span style="color: #475569;">|</span>
                        <span style="margin-left: 12px; color: #cbd5e1; font-weight: 600;">+91 90000 19249</span>
                      </div>
                      <div style="margin-top: 12px; font-size: 11px; color: #64748b;">
                        This is an automated confidential notification dispatched from your website contact portal.
                      </div>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
