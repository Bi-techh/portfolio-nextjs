import { NextRequest, NextResponse } from 'next/server'
import { draftMode } from 'next/headers'

const secret = process.env.SANITY_PREVIEW_SECRET || 'secret-token'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const secretParam = searchParams.get('secret')
  
  try {
    // Check if the secret is valid
    if (secretParam !== secret) {
      return new Response('Invalid secret', { status: 401 })
    }

    // Enable draft mode by setting cookies
    const response = NextResponse.redirect(new URL(slug ? `/${slug}` : '/', request.url))
    response.cookies.set('__prerender_bypass', secret)
    response.cookies.set('__next_preview_data', secret)
    
    return response
  } catch (err) {
    console.error('Preview error:', err)
    return new Response(`Preview error: ${err instanceof Error ? err.message : 'Unknown error'}`, {
      status: 500,
    })
  }
}
