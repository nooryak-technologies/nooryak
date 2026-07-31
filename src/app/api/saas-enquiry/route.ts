import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import SaasEnquiry from '@/models/SaasEnquiry';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, email, phone, product, message } = await req.json();

    if (!name || !email || !phone || !product) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const enquiry = await SaasEnquiry.create({
      name,
      email,
      phone,
      product,
      message: message || `Demo Request for ${product}`,
    });

    return NextResponse.json({ message: 'Demo request submitted successfully', enquiry }, { status: 201 });
  } catch (error: any) {
    console.error('SaaS enquiry submission error:', error);
    return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
