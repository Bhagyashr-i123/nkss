import { NextResponse } from 'next/server';
import { MOCK_EVENTS } from '@/data/mockData';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: MOCK_EVENTS,
    total: MOCK_EVENTS.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newEvent = {
      id: `ev-${Date.now()}`,
      ...body,
      date: body.date || new Date().toISOString(),
      attendeesCount: 0,
    };
    
    // In production, insert into Supabase / DB table
    return NextResponse.json({
      success: true,
      message: 'Event created successfully in IEEE NKSS SAC database',
      event: newEvent,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to create event',
    }, { status: 400 });
  }
}
