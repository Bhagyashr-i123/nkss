import { NextResponse } from 'next/server';
import { MOCK_CERTIFICATES } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({
      success: false,
      message: 'Certificate ID is required',
    }, { status: 400 });
  }

  const certificate = MOCK_CERTIFICATES.find(
    (c) => c.id.toLowerCase() === id.trim().toLowerCase()
  );

  if (!certificate) {
    return NextResponse.json({
      success: false,
      message: 'Certificate not found in official IEEE NKSS registry',
    }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    certificate,
  });
}
