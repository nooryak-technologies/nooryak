import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getSession } from '@/lib/auth-check';
import dbConnect from '@/lib/mongodb';
import Setting from '@/models/Setting';

function cleanEmail(raw?: string): string {
  if (!raw) return '';
  return raw.replace(/\s+/g, '').trim();
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'Admin') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { host, port, user, pass, fromName, fromEmail, recipientEmail } = body;

    await dbConnect();
    let actualPass = pass;
    if (!actualPass || actualPass === '********' || actualPass === '••••••••') {
      const existing = await Setting.findOne({ key: 'smtp_config' });
      if (existing?.value?.pass) {
        actualPass = existing.value.pass;
      }
    }

    if (!actualPass && process.env.SMTP_PASS) {
      actualPass = process.env.SMTP_PASS;
    }

    const effectiveHost = host || process.env.SMTP_HOST;
    const effectivePort = port || process.env.SMTP_PORT || '587';
    const effectiveUser = user || process.env.SMTP_USER;

    if (!effectiveHost || !effectiveUser || !actualPass) {
      return NextResponse.json({
        message: 'Host, username, and password are required to test SMTP. Please enter your SMTP credentials.'
      }, { status: 400 });
    }

    const rawRecipient = recipientEmail || effectiveUser;
    const targetRecipient = cleanEmail(rawRecipient);

    if (!targetRecipient) {
      return NextResponse.json({ message: 'A valid recipient email address is required to send a test email.' }, { status: 400 });
    }

    const configuredFrom = cleanEmail(fromEmail);
    // If the fromEmail domain doesn't match the SMTP domain, use user to prevent SPF/DMARC rejection
    const effectiveFromEmail = (configuredFrom && configuredFrom.includes('@') && !configuredFrom.endsWith('@gmail.com') && !configuredFrom.endsWith('@yahoo.com'))
      ? configuredFrom
      : cleanEmail(effectiveUser);

    const portNum = typeof effectivePort === 'string' ? parseInt(effectivePort, 10) : effectivePort;
    const isSecure = portNum === 465;

    const transporter = nodemailer.createTransport({
      host: effectiveHost,
      port: portNum,
      secure: isSecure,
      auth: {
        user: effectiveUser,
        pass: actualPass,
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // Verify SMTP connection and authentication credentials
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"${fromName || 'Nooryak Admin'}" <${effectiveFromEmail}>`,
      to: targetRecipient,
      replyTo: configuredFrom || effectiveUser,
      subject: 'Nooryak SMTP Test - Configuration Verified',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border: 1.5px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
          <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 22px 28px; border-bottom: 3px solid #FF5216;">
            <h2 style="color: #ffffff; margin: 0 0 6px; font-size: 20px; font-weight: 700;">SMTP Test Successful!</h2>
            <p style="color: #94A3B8; margin: 0; font-size: 13px;">Nooryak Technologies Email Delivery Verification</p>
          </div>
          <div style="padding: 24px 28px;">
            <p style="font-size: 14px; color: #334155; margin-top: 0;">Your SMTP settings have been verified and can successfully send emails.</p>
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px 18px; font-size: 13px; color: #1E293B; margin: 16px 0;">
              <p style="margin: 4px 0;"><strong>Host:</strong> ${effectiveHost}</p>
              <p style="margin: 4px 0;"><strong>Port:</strong> ${effectivePort}</p>
              <p style="margin: 4px 0;"><strong>From:</strong> ${fromName || 'Nooryak Admin'} &lt;${effectiveFromEmail}&gt;</p>
              <p style="margin: 4px 0;"><strong>Notification Destination:</strong> ${targetRecipient}</p>
            </div>
            <p style="font-size: 13px; color: #64748B; margin-bottom: 0;">All new Contact Us and SaaS form submissions will automatically dispatch a notification copy to <strong>${targetRecipient}</strong>.</p>
          </div>
          <div style="background: #F8FAFC; padding: 14px 28px; border-top: 1px solid #E2E8F0; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #94A3B8;">Nooryak Technologies Automated Notification System</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: `Test email sent successfully to ${targetRecipient}` });
  } catch (error: any) {
    console.error('SMTP Test Error:', error);
    return NextResponse.json({ message: error.message || 'SMTP verification failed' }, { status: 500 });
  }
}
