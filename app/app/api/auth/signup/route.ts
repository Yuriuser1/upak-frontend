


import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = body

    if (!email || !password || !name) {
      return NextResponse.json({
        error: 'Missing required fields'
      }, { status: 400 })
    }

    // Simulate user creation
    // In a real app, you would hash the password and save to database
    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: '1',
        email,
        name
      }
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Invalid JSON'
    }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Signup endpoint',
    method: 'POST'
  })
}
