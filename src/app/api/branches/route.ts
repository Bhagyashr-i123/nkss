import { NextResponse } from 'next/server';
import { MOCK_STUDENT_BRANCHES } from '@/data/mockData';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: MOCK_STUDENT_BRANCHES,
    count: MOCK_STUDENT_BRANCHES.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newBranch = {
      id: `sb-${Date.now()}`,
      ...body,
      established: body.established || new Date().getFullYear(),
      score: 500,
      rank: MOCK_STUDENT_BRANCHES.length + 1,
    };
    return NextResponse.json({
      success: true,
      message: 'Student Branch registered successfully',
      branch: newBranch,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to add Student Branch',
    }, { status: 400 });
  }
}
