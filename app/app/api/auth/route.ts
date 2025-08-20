


import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Authentication endpoint',
    status: 'OK'
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    return NextResponse.json({
      message: 'Authentication endpoint',
      status: 'OK',
      data: body
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Invalid JSON'
    }, { status: 400 })
  }
}
