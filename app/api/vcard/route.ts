import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const fullName = process.env.NEXT_PUBLIC_VCARD_NAME || 'Ayush Golakiya'
    const email = process.env.NEXT_PUBLIC_VCARD_EMAIL || 'golakiyaayush29@gmail.com'
    const phone = process.env.NEXT_PUBLIC_VCARD_PHONE || '+916355009344'
    const github = process.env.NEXT_PUBLIC_VCARD_GITHUB || 'https://github.com/Ayushgolakiya'
    const linkedin = process.env.NEXT_PUBLIC_VCARD_LINKEDIN || 'https://www.linkedin.com/in/ayush-golakiya-a03407255/'
    const website = process.env.NEXT_PUBLIC_VCARD_WEBSITE || 'https://portfolio-eight-henna-42.vercel.app/'
    
    // Get user agent to detect platform
    const userAgent = request.headers.get('user-agent') || ''
    const isIOS = /iPhone|iPad|iPod/.test(userAgent)
    const isAndroid = /Android/.test(userAgent)
    const isWindows = /Windows/.test(userAgent)
    const isMac = /Macintosh|Mac OS X/.test(userAgent)
    
    // For now, let's create a basic vCard without image to test iOS compatibility
    // We'll add image back once we confirm the basic vCard works

    // Generate vCard with platform-specific optimizations
    let vCard = 'BEGIN:VCARD\n'
    vCard += 'VERSION:3.0\n'
    vCard += `FN:${fullName}\n`
    vCard += `N:${fullName.split(' ').pop() || ''};${fullName.split(' ').slice(0, -1).join(' ') || ''};;;\n`
    vCard += `EMAIL:${email}\n`
    if (phone) vCard += `TEL;TYPE=CELL:${phone}\n`
    if (github) vCard += `URL;TYPE=github:${github}\n`
    if (linkedin) vCard += `URL;TYPE=linkedin:${linkedin}\n`
    if (website) vCard += `URL;TYPE=homepage:${website}\n`
    
    // Add additional fields for better compatibility
    vCard += `TITLE:AI Developer\n`
    vCard += 'END:VCARD'

    return new NextResponse(vCard, {
      status: 200,
      headers: {
        'Content-Type': 'text/vcard; charset=utf-8',
        'Content-Disposition': 'attachment; filename="Ayush_Golakiya.vcf"',
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('vCard generation error:', error)
    return NextResponse.json({ error: 'Failed to generate vCard' }, { status: 500 })
  }
}


