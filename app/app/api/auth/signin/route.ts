


import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({
        error: 'Email and password are required'
      }, { status: 400 })
    }

    // Simulate authentication
    // In a real app, you would verify credentials against database
    return NextResponse.json({
      message: 'Login successful',
      user: {
        id: '1',
        email,
        name: 'Иван Иванов'
      },
      token: 'fake-jwt-token'
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Invalid JSON'
    }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Signin endpoint',
    method: 'POST'
  })
}
