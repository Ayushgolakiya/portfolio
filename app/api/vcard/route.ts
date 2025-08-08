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
    
    // Get user agent to detect platform and version
    const userAgent = request.headers.get('user-agent') || ''
    const isIOS = /iPhone|iPad|iPod/.test(userAgent)
    const isAndroid = /Android/.test(userAgent)
    const isWindows = /Windows/.test(userAgent)
    const isMac = /Macintosh|Mac OS X/.test(userAgent)
    const isLinux = /Linux/.test(userAgent)
    const isBlackBerry = /BlackBerry/.test(userAgent)
    const isSymbian = /Symbian/.test(userAgent)
    const isWindowsPhone = /Windows Phone/.test(userAgent)
    
    // Detect older versions
    const isOldIOS = isIOS && /OS [1-9]_/.test(userAgent)
    const isOldAndroid = isAndroid && /Android [1-6]/.test(userAgent)
    const isOldWindows = isWindows && /Windows NT [5-6]/.test(userAgent)
    const isOldMac = isMac && /Mac OS X 10\.[1-9]/.test(userAgent)
    
    // For maximum compatibility, use URL approach for most platforms
    // Base64 only for modern platforms that handle it well
    let photoData = ''
    let photoUrl = ''
    
    try {
      const imagePath = path.join(process.cwd(), 'public', 'Ayush-golakiya.jpeg')
      const imageBuffer = fs.readFileSync(imagePath)
      const imageSizeKB = imageBuffer.length / 1024
      
      // Use base64 only for modern platforms with small images
      const shouldUseBase64 = !isOldIOS && !isOldAndroid && !isOldWindows && !isOldMac && 
                             !isBlackBerry && !isSymbian && !isWindowsPhone && 
                             imageSizeKB <= 100 // Even more conservative for older devices
      
      if (shouldUseBase64) {
        photoData = imageBuffer.toString('base64')
      }
      
      // Always have URL as fallback
      photoUrl = `${website}/Ayush-golakiya.jpeg`
    } catch (error) {
      console.log('Could not read image file, using URL only')
      photoUrl = `${website}/Ayush-golakiya.jpeg`
    }

    // Generate vCard with clean, non-duplicated fields
    let vCard = 'BEGIN:VCARD\n'
    vCard += 'VERSION:3.0\n'
    vCard += `FN:${fullName}\n`
    vCard += `N:${fullName.split(' ').pop() || ''};${fullName.split(' ').slice(0, -1).join(' ') || ''};;;\n`
    vCard += `EMAIL:${email}\n`
    
    // Phone - single entry with CELL type (most compatible)
    if (phone) {
      vCard += `TEL;TYPE=CELL:${phone}\n`
    }
    
    // URLs - single entry per URL with appropriate type
    if (github) {
      vCard += `URL;TYPE=github:${github}\n`
    }
    if (linkedin) {
      vCard += `URL;TYPE=linkedin:${linkedin}\n`
    }
    if (website) {
      vCard += `URL;TYPE=homepage:${website}\n`
    }
    
    // Image - single entry based on platform
    if (photoData && !isOldIOS && !isOldAndroid && !isOldWindows && !isOldMac) {
      // Modern platforms: Use base64
      vCard += `PHOTO;ENCODING=BASE64;TYPE=JPEG:${photoData}\n`
    } else if (photoUrl) {
      // Older platforms and fallback: Use URL
      vCard += `PHOTO;VALUE=URI;TYPE=JPEG:${photoUrl}\n`
    }
    
    // Essential fields for compatibility
    vCard += `TITLE:AI Developer\n`
    vCard += `ORG:${fullName.split(' ')[0]} Portfolio\n`
    vCard += `CATEGORIES:Portfolio,Developer,AI\n`
    vCard += `UID:${fullName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}\n`
    vCard += `REV:${new Date().toISOString()}\n`
    
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
        // Add headers for older systems
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
      },
    })
  } catch (error) {
    console.error('vCard generation error:', error)
    return NextResponse.json({ error: 'Failed to generate vCard' }, { status: 500 })
  }
}


