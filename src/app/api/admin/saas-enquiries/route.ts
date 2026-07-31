import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import SaasEnquiry from '@/models/SaasEnquiry';
import { getSession } from '@/lib/auth-check';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const enquiries = await SaasEnquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ enquiries });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    const { id, status } = body;

    const enquiry = await SaasEnquiry.findByIdAndUpdate(id, { status }, { new: true });
    return NextResponse.json({ enquiry });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    await SaasEnquiry.findByIdAndDelete(id);
    return NextResponse.json({ message: 'SaaS enquiry deleted' });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
