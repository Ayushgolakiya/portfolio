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
    
    // Platform-specific image handling
    let photoData = ''
    let photoUrl = ''
    
    try {
      const imagePath = path.join(process.cwd(), 'public', 'Ayush-golakiya.jpeg')
      const imageBuffer = fs.readFileSync(imagePath)
      photoData = imageBuffer.toString('base64')
      photoUrl = `${website}/Ayush-golakiya.jpeg`
    } catch (error) {
      console.log('Could not read image file')
    }

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
    
    // Platform-specific image handling
    if (photoData && photoUrl) {
      if (isIOS) {
        // iOS prefers base64 encoding for better compatibility
        vCard += `PHOTO;ENCODING=BASE64;TYPE=JPEG:${photoData}\n`
      } else if (isAndroid) {
        // Android works well with both, but URL is often preferred for performance
        vCard += `PHOTO;VALUE=URI:${photoUrl}\n`
      } else if (isWindows) {
        // Windows often prefers base64 for Outlook compatibility
        vCard += `PHOTO;ENCODING=BASE64;TYPE=JPEG:${photoData}\n`
      } else if (isMac) {
        // macOS works well with both, base64 for better compatibility
        vCard += `PHOTO;ENCODING=BASE64;TYPE=JPEG:${photoData}\n`
      } else {
        // Default to base64 for maximum compatibility
        vCard += `PHOTO;ENCODING=BASE64;TYPE=JPEG:${photoData}\n`
      }
    }
    
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


