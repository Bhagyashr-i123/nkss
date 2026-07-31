import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, ieeeNumber, studentBranch, message, type } = body;

    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        message: 'Name, email, and message are required fields',
      }, { status: 400 });
    }

    // In production, save to DB or dispatch email notification via Resend/SendGrid
    return NextResponse.json({
      success: true,
      message: type === 'volunteer' 
        ? 'Thank you for registering as an IEEE NKSS SAC Student Volunteer! Our track chair will contact you.'
        : 'Your message has been dispatched to IEEE NKSS SAC ExeCom.',
      submissionId: `sub-${Date.now()}`,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to process contact submission',
    }, { status: 500 });
  }
}
