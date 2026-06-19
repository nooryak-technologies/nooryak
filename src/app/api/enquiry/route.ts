import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, email, company, service, message, phone, token } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (!token) {
      return NextResponse.json({ message: 'reCAPTCHA token is required' }, { status: 400 });
    }

    // Verify token with Google
    const secretKey = '6LciQSgtAAAAAHaHBWBlRSQ0PSwDn52EcOu-CiAH';
    const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return NextResponse.json({ message: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      company,
      service,
      message,
      phone
    });

    return NextResponse.json({ message: 'Enquiry submitted successfully', enquiry }, { status: 201 });
  } catch (error: any) {
    console.error('Enquiry submission error:', error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
