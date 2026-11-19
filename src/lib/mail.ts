import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import Setting from '@/models/Setting';

function cleanEmail(raw?: string): string {
  if (!raw) return '';
  return raw.replace(/\s+/g, '').trim();
}

/**
 * Creates a nodemailer transporter from dynamic database settings or environment variables.
 * Enforces tls: { rejectUnauthorized: false } to handle custom cPanel/Exim mail servers
 * where SSL certificates may match the hosting server cluster hostname.
 */
function createTransporter(config: { host: string; port: string | number; user: string; pass: string }) {
  const portNum = typeof config.port === 'string' ? parseInt(config.port, 10) : config.port;
  const isSecure = portNum === 465;

  return nodemailer.createTransport({
    host: config.host,
    port: portNum,
    secure: isSecure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

export async function sendWelcomeEmail(userEmail: string, password: string, userName: string) {
  await dbConnect();
  const smtpSetting = await Setting.findOne({ key: 'smtp_config' });

  const host = smtpSetting?.value?.host || process.env.SMTP_HOST;
  const port = smtpSetting?.value?.port || process.env.SMTP_PORT || '587';
  const user = smtpSetting?.value?.user || process.env.SMTP_USER;
  let pass = smtpSetting?.value?.pass || process.env.SMTP_PASS;
  const fromName = smtpSetting?.value?.fromName || process.env.SMTP_FROM_NAME || 'Nooryak Admin';
  const fromEmail = smtpSetting?.value?.fromEmail || process.env.SMTP_FROM_EMAIL || user;

  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured in Admin Settings. Please configure it under Settings > SMTP Mail.');
  }

  const transporter = createTransporter({ host, port, user, pass });

  const mailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: cleanEmail(userEmail),
    subject: 'Welcome to Nooryak - Your Account Details',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #ff7a18;">Welcome to Nooryak, ${userName}!</h2>
        <p>Your account has been created by the administrator. Here are your login credentials:</p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Email:</strong> ${cleanEmail(userEmail)}</p>
          <p><strong>Password:</strong> ${password}</p>
        </div>
        <p>Please log in and change your password for security.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #888;">This is an automated message. Please do not reply to this email.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function checkSMTPConfig() {
  await dbConnect();
  const smtpSetting = await Setting.findOne({ key: 'smtp_config' });
  return !!smtpSetting;
}

export async function sendEnquiryNotificationEmail(data: {
  type: 'contact' | 'saas';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceOrProduct?: string;
  message?: string;
}) {
  try {
    await dbConnect();
    const smtpSetting = await Setting.findOne({ key: 'smtp_config' });

    // Dynamic configuration from Admin Panel Settings (with env fallback)
    const host = smtpSetting?.value?.host || process.env.SMTP_HOST;
    const port = smtpSetting?.value?.port || process.env.SMTP_PORT || '587';
    const user = smtpSetting?.value?.user || process.env.SMTP_USER;
    const pass = smtpSetting?.value?.pass || process.env.SMTP_PASS;
    const fromName = smtpSetting?.value?.fromName || process.env.SMTP_FROM_NAME || 'Nooryak Admin';
    const configuredFrom = smtpSetting?.value?.fromEmail || process.env.SMTP_FROM_EMAIL || user;

    // Dynamic recipient configured from Admin Settings
    const recipientConfig = smtpSetting?.value?.recipientEmail || process.env.ENQUIRY_RECIPIENT_EMAIL;
    const targetRecipient = cleanEmail(recipientConfig) || cleanEmail(user) || cleanEmail(configuredFrom);

    if (!host || !user || !pass || pass === '********' || pass === '••••••••') {
      console.warn('SMTP is not fully configured in Admin Settings. Please visit Admin > Settings > SMTP Mail to set host, user, password.');
      return;
    }

    if (!targetRecipient) {
      console.warn('No notification recipient email configured. Please set Notification Recipient Email in Settings > SMTP Mail.');
      return;
    }

    // Sender logic: Use domain email (user) if fromEmail is a personal gmail/yahoo to avoid SPF/DMARC rejection
    const effectiveFromEmail = (configuredFrom && configuredFrom.includes('@') && !configuredFrom.endsWith('@gmail.com') && !configuredFrom.endsWith('@yahoo.com'))
      ? cleanEmail(configuredFrom)
      : cleanEmail(user);

    const transporter = createTransporter({ host, port, user, pass });

    const isContact = data.type === 'contact';
    const subject = isContact ? 'New Contact Enquiry - Nooryak Technologies' : 'New SAAS Platform Demo Request - Nooryak';
    const heading = isContact ? 'New Contact Form Enquiry' : 'New SAAS Platform Demo Request';

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border: 1.5px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 24px 30px; border-bottom: 3px solid #FF5216;">
          <h2 style="color: #ffffff; margin: 0 0 6px; font-size: 22px; font-weight: 700;">${heading}</h2>
          <p style="color: #94A3B8; margin: 0; font-size: 13px;">Received via Nooryak Website Portal</p>
        </div>
        
        <div style="padding: 28px 30px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #64748B; width: 140px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Full Name:</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 700; border-bottom: 1px solid #F1F5F9;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Email Address:</td>
              <td style="padding: 10px 0; color: #0F172A; border-bottom: 1px solid #F1F5F9;"><a href="mailto:${cleanEmail(data.email)}" style="color: #FF5216; text-decoration: none; font-weight: 600;">${cleanEmail(data.email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Phone Number:</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 600; border-bottom: 1px solid #F1F5F9;">${data.phone || 'N/A'}</td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding: 10px 0; color: #64748B; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Company:</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 600; border-bottom: 1px solid #F1F5F9;">${data.company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #64748B; font-weight: 600; border-bottom: 1px solid #F1F5F9;">${isContact ? 'Service Interested:' : 'Product / Solution:'}</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 600; border-bottom: 1px solid #F1F5F9;">${data.serviceOrProduct || 'General Inquiry'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B; font-weight: 600; vertical-align: top; border-bottom: 1px solid #F1F5F9;">Message:</td>
              <td style="padding: 10px 0; color: #334155; line-height: 1.5; border-bottom: 1px solid #F1F5F9; white-space: pre-wrap;">${data.message || 'No additional message provided.'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Submitted At:</td>
              <td style="padding: 10px 0; color: #64748B;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</td>
            </tr>
          </table>
        </div>

        <div style="background: #F8FAFC; padding: 16px 30px; border-top: 1px solid #E2E8F0; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #94A3B8;">Nooryak Technologies Automated Notification System</p>
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"${fromName}" <${effectiveFromEmail}>`,
      to: targetRecipient,
      replyTo: cleanEmail(data.email),
      subject,
      html: htmlContent,
    });

    console.log(`Successfully dispatched enquiry notification to ${targetRecipient} [MessageId: ${info.messageId}]`);
  } catch (error: any) {
    console.error('Failed to send enquiry email notification:', error.message);
  }
}
