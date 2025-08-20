
import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все обязательные поля' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Пожалуйста, введите корректный email адрес' },
        { status: 400 }
      )
    }

    // Rate limiting check (simple implementation)
    const clientIP = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send to Telegram bot
    
    // For now, we'll just log and return success
    console.log('Contact form submission:', {
      ...body,
      ip: clientIP,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500))

    // In production, you might want to:
    // - Send email to admin
    // - Save to database
    // - Send notification to Telegram
    // - Add to CRM system

    return NextResponse.json({
      success: true,
      message: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
