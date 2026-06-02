import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    const { name, email, company, service, message, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
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
