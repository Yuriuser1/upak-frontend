


import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    providers: {
      credentials: {
        id: 'credentials',
        name: 'Credentials',
        type: 'credentials'
      }
    }
  })
}
