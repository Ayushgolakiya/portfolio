import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // For now, we'll use a simple approach with mailto link
    // In a production environment, you'd want to use a proper email service
    // like SendGrid, Resend, or Nodemailer with SMTP
    
    const mailtoLink = `mailto:golakiyaayush29@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`

    // You can also log the contact form submission for debugging
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.',
        mailtoLink 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
} 